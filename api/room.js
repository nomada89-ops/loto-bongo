const memoryRooms = globalThis.__lotoBongoRooms || new Map();
globalThis.__lotoBongoRooms = memoryRooms;

const ROOM_TTL_SECONDS = 60 * 60 * 4;
const MAX_ROOM_AGE_MS = ROOM_TTL_SECONDS * 1000;
const UPSTASH_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

function roomKey(roomId) {
  return `loto-bongo-room:${roomId}`;
}

function hasDurableStore() {
  return Boolean(UPSTASH_URL && UPSTASH_TOKEN);
}

async function redisCommand(command) {
  const response = await fetch(UPSTASH_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(command)
  });

  if (!response.ok) {
    throw new Error(`Redis REST ${response.status}`);
  }

  return response.json();
}

async function loadRoom(roomId) {
  if (hasDurableStore()) {
    const data = await redisCommand(["GET", roomKey(roomId)]);
    if (!data.result) return null;
    return JSON.parse(data.result);
  }

  return memoryRooms.get(roomId) || null;
}

async function saveRoom(roomId, room) {
  room.updatedAt = Date.now();

  if (hasDurableStore()) {
    await redisCommand(["SET", roomKey(roomId), JSON.stringify(room), "EX", ROOM_TTL_SECONDS]);
    return;
  }

  memoryRooms.set(roomId, room);
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

function pruneMemoryRooms() {
  const now = Date.now();
  for (const [roomId, room] of memoryRooms.entries()) {
    if (now - room.updatedAt > MAX_ROOM_AGE_MS) {
      memoryRooms.delete(roomId);
    }
  }
}

module.exports = async function handler(req, res) {
  pruneMemoryRooms();

  const url = new URL(req.url, `https://${req.headers.host || "localhost"}`);
  const roomId = url.searchParams.get("room");

  if (!roomId) {
    json(res, 400, { error: "Missing room" });
    return;
  }

  if (req.method === "GET") {
    const room = await loadRoom(roomId);
    if (!room) {
      json(res, 404, { error: "Room not found", durable: hasDurableStore() });
      return;
    }
    json(res, 200, { ...room, durable: hasDurableStore() });
    return;
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    json(res, 405, { error: "Method not allowed" });
    return;
  }

  try {
    const body = await readBody(req);
    const current = await loadRoom(roomId) || {
      state: null,
      cards: [],
      updatedAt: Date.now()
    };

    if (body.action === "state") {
      current.state = body.state || null;
      await saveRoom(roomId, current);
      json(res, 200, { ok: true, durable: hasDurableStore() });
      return;
    }

    if (body.action === "register-card" && body.card) {
      if (!current.cards.some((card) => card.id === body.card.id)) {
        current.cards.push(body.card);
      }
      await saveRoom(roomId, current);
      json(res, 200, { ok: true, cardId: body.card.id, durable: hasDurableStore() });
      return;
    }

    json(res, 400, { error: "Invalid action" });
  } catch (error) {
    json(res, 500, { error: error.message || "Room API error", durable: hasDurableStore() });
  }
};
