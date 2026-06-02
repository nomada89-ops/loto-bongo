const rooms = globalThis.__lotoBongoRooms || new Map();
globalThis.__lotoBongoRooms = rooms;

const MAX_ROOM_AGE_MS = 1000 * 60 * 60 * 4;

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Body too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function pruneRooms() {
  const now = Date.now();
  for (const [roomId, room] of rooms.entries()) {
    if (now - room.updatedAt > MAX_ROOM_AGE_MS) {
      rooms.delete(roomId);
    }
  }
}

module.exports = async function handler(req, res) {
  pruneRooms();

  const url = new URL(req.url, `https://${req.headers.host || "localhost"}`);
  const roomId = url.searchParams.get("room");

  if (!roomId) {
    json(res, 400, { error: "Missing room" });
    return;
  }

  if (req.method === "GET") {
    const room = rooms.get(roomId);
    if (!room) {
      json(res, 404, { error: "Room not found" });
      return;
    }
    json(res, 200, room);
    return;
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    json(res, 405, { error: "Method not allowed" });
    return;
  }

  try {
    const body = await readBody(req);
    const current = rooms.get(roomId) || {
      state: null,
      cards: [],
      updatedAt: Date.now()
    };

    if (body.action === "state") {
      current.state = body.state || null;
      current.updatedAt = Date.now();
      rooms.set(roomId, current);
      json(res, 200, { ok: true });
      return;
    }

    if (body.action === "register-card" && body.card) {
      if (!current.cards.some((card) => card.id === body.card.id)) {
        current.cards.push(body.card);
      }
      current.updatedAt = Date.now();
      rooms.set(roomId, current);
      json(res, 200, { ok: true, cardId: body.card.id });
      return;
    }

    json(res, 400, { error: "Invalid action" });
  } catch (error) {
    json(res, 400, { error: error.message || "Bad request" });
  }
};
