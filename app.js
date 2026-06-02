/* ==========================================================================
   LISTAS DE CANCIONES PREDEFINIDAS (Con YouTube IDs Reales)
   ========================================================================== */
const PRESET_PLAYLISTS = {
    "pop-espanol": [
        { title: "Como Camarón", artist: "Estopa", ytId: "hN1vL6zQdsk" },
        { title: "A quién le importa", artist: "Alaska y Dinarama", ytId: "xS4sE7GomWc" },
        { title: "La Flaca", artist: "Jarabe de Palo", ytId: "r2g0pM3PMWY" },
        { title: "Sin Documentos", artist: "Los Rodríguez", ytId: "1xZpQyZWh5w" },
        { title: "Mi Gran Noche", artist: "Raphael", ytId: "h8l2oR_fH9k" },
        { title: "Lamento Boliviano", artist: "Enanitos Verdes", ytId: "khbDnLvy_G4" },
        { title: "El Universo sobre mí", artist: "Amaral", ytId: "pXz_ZfKqF78" },
        { title: "Chiquilla", artist: "Seguridad Social", ytId: "R2Kz15h-7w8" },
        { title: "Clavado en un Bar", artist: "Maná", ytId: "zJtM_7b7pS0" },
        { title: "Caminando por la Vida", artist: "Melendi", ytId: "3GqQ0b-U8vM" },
        { title: "Carolina", artist: "M-Clan", ytId: "e0VbJqIex4s" },
        { title: "Princesas", artist: "Pereza", ytId: "Y2_1gXh_xQY" },
        { title: "Zapatillas", artist: "El Canto del Loco", ytId: "_VbKk03M2s4" },
        { title: "Slomo", artist: "Chanel", ytId: "4mYBiSGc19c" },
        { title: "Nochentera", artist: "Vicco", ytId: "Z3Q7tQz7j8E" },
        { title: "Antes muerta que sencilla", artist: "María Isabel", ytId: "sQO3XyQ3jZc" },
        { title: "Devuélveme a mi Chica", artist: "Hombres G", ytId: "8D_7s_gI4qg" },
        { title: "Bailando", artist: "Enrique Iglesias", ytId: "NUsoVlDFqZg" },
        { title: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee", ytId: "kJQP7kiw5Fk" },
        { title: "La Camisa Negra", artist: "Juanes", ytId: "kRt2sRyup6A" },
        { title: "Limón y Sal", artist: "Julieta Venegas", ytId: "tIpzfs5tBJU" },
        { title: "Color Esperanza", artist: "Diego Torres", ytId: "NbLhArJt1Lg" },
        { title: "Torero", artist: "Chayanne", ytId: "IcoqT12k-14" },
        { title: "Ave María", artist: "David Bisbal", ytId: "gG9Ssh9kO0I" },
        { title: "Lobo Hombre en París", artist: "La Unión", ytId: "h4gG71uLw2E" },
        { title: "Sabor de Amor", artist: "Danza Invisible", ytId: "wG7rX6w8j9g" },
        { title: "Mil Calles llevan hacia ti", artist: "La Guardia", ytId: "F4iPuhLpM5Q" },
        { title: "Cuando brille el Sol", artist: "La Guardia", ytId: "aC_C56sLw9Y" },
        { title: "La Flaca (Directo)", artist: "Jarabe de Palo", ytId: "5FfB35fQW6s" },
        { title: "El Ritmo del Garaje", artist: "Loquillo y Trogloditas", ytId: "yU1m219T2Cg" }
    ],
    "hits-internacionales": [
        { title: "Dancing Queen", artist: "ABBA", ytId: "xO10Rob9k5A" },
        { title: "Billie Jean", artist: "Michael Jackson", ytId: "Zi_XLOBDo_Y" },
        { title: "Wannabe", artist: "Spice Girls", ytId: "gJLIiF15wjQ" },
        { title: "I Want It That Way", artist: "Backstreet Boys", ytId: "4fndeDfaWCg" },
        { title: "Smells Like Teen Spirit", artist: "Nirvana", ytId: "hTWKbfoikeg" },
        { title: "Sweet Child O' Mine", artist: "Guns N' Roses", ytId: "1w7OgIMMRc4" },
        { title: "Stayin' Alive", artist: "Bee Gees", ytId: "I_izvAbhExY" },
        { title: "Livin' on a Prayer", artist: "Bon Jovi", ytId: "lDK9QqIZhwk" },
        { title: "Take on Me", artist: "a-ha", ytId: "djV11Xbc914" },
        { title: "As It Was", artist: "Harry Styles", ytId: "H5v3kku4y6Q" },
        { title: "Blinding Lights", artist: "The Weeknd", ytId: "fHI8X4OXluQ" },
        { title: "Toxic", artist: "Britney Spears", ytId: "LOZuxwVk7TU" },
        { title: "Don't Stop Believin'", artist: "Journey", ytId: "VcjzHMhBtf0" },
        { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", ytId: "OPf0YbXqDm0" },
        { title: "Rolling in the Deep", artist: "Adele", ytId: "rYEDA3JcQdx" },
        { title: "Wake Me Up", artist: "Avicii", ytId: "IcrbM1l_BoI" },
        { title: "Get Lucky", artist: "Daft Punk ft. Pharrell", ytId: "5NV6Rdv1a3I" },
        { title: "Wonderwall", artist: "Oasis", ytId: "6hzrDeOPUPw" },
        { title: "Bohemian Rhapsody", artist: "Queen", ytId: "fJ9rUzIMcZQ" },
        { title: "Barbie Girl", artist: "Aqua", ytId: "ZyhrYis509A" },
        { title: "Macarena", artist: "Los Del Río", ytId: "z168bIzk3Jc" },
        { title: "Umbrella", artist: "Rihanna ft. Jay-Z", ytId: "CvBfHwUxHIk" },
        { title: "Poker Face", artist: "Lady Gaga", ytId: "bESGLojNYJY" },
        { title: "Mr. Brightside", artist: "The Killers", ytId: "gGdGFtwCN0c" },
        { title: "Bad Romance", artist: "Lady Gaga", ytId: "qrO4YZeyl0I" },
        { title: "Thriller", artist: "Michael Jackson", ytId: "sOnqjkJTMaA" },
        { title: "Stay", artist: "The Kid LAROI & Justin Bieber", ytId: "kTJczUoc26U" },
        { title: "Shivers", artist: "Ed Sheeran", ytId: "Il0S8BoucSA" },
        { title: "Dynamite", artist: "BTS", ytId: "gdZLi9oWNZg" },
        { title: "Girls Just Want To Have Fun", artist: "Cyndi Lauper", ytId: "PIb6AZdTr-A" }
    ],
    "reggaeton-viejo": [
        { title: "Gasolina", artist: "Daddy Yankee", ytId: "qGKrc3ZhEE4" },
        { title: "Lo Que Pasó, Pasó", artist: "Daddy Yankee", ytId: "n41jCgG9s3w" },
        { title: "Danza Kuduro", artist: "Don Omar", ytId: "7zp1TbLFPp8" },
        { title: "Dile", artist: "Don Omar", ytId: "734W53JtFCo" },
        { title: "Papi Chulo", artist: "Lorna", ytId: "c_q2r6l1V4Q" },
        { title: "Atrévete-te-te", artist: "Calle 13", ytId: "v_yyuvGxpSg" },
        { title: "Ella Me Levantó", artist: "Daddy Yankee", ytId: "n3u_zQ9qYq8" },
        { title: "Rakata", artist: "Wisin & Yandel", ytId: "cGAc0x7XnJg" },
        { title: "Noche de Entierro", artist: "Tony Dize, Daddy Yankee, Wisin & Yandel", ytId: "S8wU2SuxcE4" },
        { title: "Safaera", artist: "Bad Bunny", ytId: "wzMR7NpH_vU" },
        { title: "Pepas", artist: "Farruko", ytId: "y8trd3gjJbc" },
        { title: "Mi Gente", artist: "J Balvin", ytId: "wnJ6LuUFpMo" },
        { title: "Tusa", artist: "Karol G & Nicki Minaj", ytId: "tbneQDc2H3I" },
        { title: "Con Calma", artist: "Daddy Yankee", ytId: "DiItGE340U8" },
        { title: "Limbo", artist: "Daddy Yankee", ytId: "CcCw1GGzH5E" },
        { title: "Te Boté (Remix)", artist: "Nio García, Casper, Darell, Ozuna, Bad Bunny", ytId: "9jI-z9QN6g8" },
        { title: "Felices los 4", artist: "Maluma", ytId: "t_jHrHC5AxI" },
        { title: "Hawái", artist: "Maluma", ytId: "pK060iUFWXg" },
        { title: "Despechá", artist: "Rosalía", ytId: "ch-x5p8C4N8" },
        { title: "Quevedo: Bzrp Music Sessions, Vol. 52", artist: "Bizarrap & Quevedo", ytId: "A_gB5f15yW0" },
        { title: "Yonaguni", artist: "Bad Bunny", ytId: "ouLcnKz2f10" },
        { title: "Callaita", artist: "Bad Bunny", ytId: "acEOASYi1z4" },
        { title: "Dakiti", artist: "Bad Bunny & Jhay Cortez", ytId: "Tm0_FRXnN30" },
        { title: "La Bachata", artist: "Manuel Turizo", ytId: "tLrRzN5z35U" },
        { title: "Mayor que Yo", artist: "Baby Ranks, Daddy Yankee, Hector, Wisin & Yandel", ytId: "k-fA3BvN4W8" },
        { title: "Pam Pam", artist: "Wisin & Yandel", ytId: "j6fKzLpC8hQ" },
        { title: "Sexy Movimiento", artist: "Wisin & Yandel", ytId: "FvjCg7yUvX0" },
        { title: "Baila Morena", artist: "Héctor & Tito", ytId: "yv_9nLdG390" },
        { title: "Pobre Diabla", artist: "Don Omar", ytId: "84V73ZkS9r8" },
        { title: "Salió El Sol", artist: "Don Omar", ytId: "K1y5qT1Z55k" }
    ]
};

/* ==========================================================================
   ESTADO DEL JUEGO
   ========================================================================== */
let gameSongs = [];       // Canciones en la partida actual
let drawOrder = [];       // Orden aleatorio de extracción
let currentIndex = -1;    // Índice de la canción que está sonando
let playedSongs = [];     // Lista de canciones que ya han salido
let localFiles = [];      // Archivos MP3 locales cargados
let generatedCards = [];  // Cartones generados en la sesión

// Audio Players
let audioPlayerElement = null;

// Temporizadores de reproducción
let playbackTimer = null;
let playbackTimeLeft = 30; // 30 segundos por canción
const PLAYBACK_MAX_TIME = 30;
let autoplayEnabled = false;
let autoplayTimeout = null;

// PeerJS P2P y Lector QR
let peer = null;
let conn = null;
let hostConnections = [];
let roomId = null;
let isGuestUser = false;
let gameSessionId = null;
let guestReadyInterval = null;
let guestLastSessionId = null;
let guestRegisteredCardIds = new Set();
let guestPendingCard = null;
let guestCardRegisterInterval = null;

// Nodos de Audio Visualizer
let audioAnalyser = null;
let audioSourceNode = null;
let visualizerAnimationId = null;

// Web Audio API para efectos de sonido
let audioCtx = null;

function handleAudioError(event) {
    if (!audioPlayerElement || !audioPlayerElement.src || audioPlayerElement.src === window.location.href || audioPlayerElement.src.endsWith('/') || audioPlayerElement.src === "") {
        return;
    }
    console.warn("Audio Player error:", event);
    
    if (currentIndex < 0) return;
    const songIndex = drawOrder[currentIndex];
    const song = gameSongs[songIndex];
    
    // Rellenar datos en el modal
    document.getElementById("modal-song-title").textContent = song.title;
    document.getElementById("modal-song-artist").textContent = song.artist;
    
    // Configurar enlace de búsqueda rápida en YouTube
    const searchQuery = encodeURIComponent(`${song.artist} ${song.title}`);
    document.getElementById("modal-search-yt-link").href = `https://www.youtube.com/results?search_query=${searchQuery}`;
    
    // Mostrar modal
    document.getElementById("yt-error-modal").classList.remove("hidden");
    
    // Actualizar textos informativos en pantalla de fondo
    document.getElementById("board-song-artist").textContent = "⚠️ Error: Canción no disponible";
    document.getElementById("current-track-artist").textContent = "Por favor, resuelve el error de reproducción en el modal.";
}

function closeYtErrorModal() {
    document.getElementById("yt-error-modal").classList.add("hidden");
}

function skipCurrentSongAndDraw() {
    closeYtErrorModal();
    
    if (currentIndex < 0) return;
    const songIndex = drawOrder[currentIndex];
    
    // Desmarcar en la rejilla general del tablero
    const gridCard = document.getElementById(`board-song-${songIndex}`);
    if (gridCard) {
        gridCard.classList.remove("played");
    }
    
    // Quitar del final de playedSongs
    if (playedSongs.length > 0 && playedSongs[playedSongs.length - 1] === songIndex) {
        playedSongs.pop();
    }
    
    // Extraer la siguiente canción
    drawNextSong();
}

/* ==========================================================================
   INICIALIZACIÓN Y NAVEGACIÓN
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    audioPlayerElement = document.getElementById("audio-player");
    if (audioPlayerElement) {
        audioPlayerElement.addEventListener("error", handleAudioError);
    }
    setupDragAndDrop();

    // Detección de sala P2P para invitados
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('room')) {
        isGuestUser = true;
        const targetRoom = urlParams.get('room');
        
        // Ocultar botones de navegación del host
        const navOrg = document.getElementById("nav-btn-organizer");
        const navVal = document.getElementById("nav-btn-validator");
        const navShare = document.getElementById("nav-btn-share");
        if (navOrg) navOrg.style.display = "none";
        if (navVal) navVal.style.display = "none";
        if (navShare) navShare.style.display = "none";
        
        // Personalizar el mensaje de carga vacío para los invitados
        const emptyTitle = document.querySelector("#cards-container .empty-state h3");
        const emptyDesc = document.querySelector("#cards-container .empty-state p");
        if (emptyTitle) emptyTitle.textContent = "Esperando al Organizador...";
        if (emptyDesc) emptyDesc.textContent = "En cuanto el organizador comience la partida, tu cartón de juego se generará automáticamente aquí.";
        
        // Ocultar controles de cantidad y botones de generación del host para el invitado
        const headerActions = document.querySelector(".header-actions");
        if (headerActions) headerActions.style.display = "none";
        
        // Forzar vista en pestaña de jugador (cartones)
        switchTab('player');
        
        // Mostrar el dock flotante de emojis
        const emojiDock = document.getElementById("emoji-dock");
        if (emojiDock) emojiDock.classList.remove("hidden");
        
        // Conectar P2P con el host
        connectToRoom(targetRoom);
    } else {
        // Inicializar sala del host
        initHostPeer();
    }
});

// Cambiar de pestaña
function switchTab(tabName) {
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".nav-btn").forEach(el => el.classList.remove("active"));
    
    document.getElementById(`tab-${tabName}`).classList.add("active");
    document.getElementById(`nav-btn-${tabName}`).classList.add("active");
}

// Sonidos generados mediante Web Audio API
function playSound(type) {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        const now = audioCtx.currentTime;

        if (type === 'stamp') {
            // Un pop rápido al marcar
            osc.type = 'sine';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(600, now + 0.1);
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.linearRampToValueAtTime(0, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'draw') {
            // Sonido mágico al extraer bola
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
            osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
            osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
            gainNode.gain.setValueAtTime(0.2, now);
            gainNode.gain.linearRampToValueAtTime(0.2, now + 0.3);
            gainNode.gain.linearRampToValueAtTime(0, now + 0.45);
            osc.start(now);
            osc.stop(now + 0.45);
        } else if (type === 'fanfare') {
            // Sonido de premio
            const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, idx) => {
                const oscN = audioCtx.createOscillator();
                const gainN = audioCtx.createGain();
                oscN.connect(gainN);
                gainN.connect(audioCtx.destination);
                
                oscN.type = 'sawtooth';
                oscN.frequency.setValueAtTime(freq, now + idx * 0.08);
                gainN.gain.setValueAtTime(0.15, now + idx * 0.08);
                gainN.gain.linearRampToValueAtTime(0.15, now + idx * 0.08 + 0.15);
                gainN.gain.linearRampToValueAtTime(0, now + idx * 0.08 + 0.25);
                
                oscN.start(now + idx * 0.08);
                oscN.stop(now + idx * 0.08 + 0.25);
            });
        }
    } catch (e) {
        console.warn("No se pudo iniciar Web Audio API:", e);
    }
}

/* ==========================================================================
   CONFIGURACIÓN DEL ORIGEN DE MÚSICA
   ========================================================================== */
function handleSourceChange() {
    const source = document.getElementById("music-source-select").value;
    
    // Ocultar todas las configuraciones
    document.querySelectorAll(".source-config").forEach(el => el.classList.add("hidden"));
    
    // Mostrar la seleccionada
    if (source === "preset") {
        document.getElementById("source-preset-config").classList.remove("hidden");
    } else if (source === "local") {
        document.getElementById("source-local-config").classList.remove("hidden");
    } else if (source === "external") {
        document.getElementById("source-external-config").classList.remove("hidden");
    }
}

// Configurar Drag and Drop para MP3s locales
function setupDragAndDrop() {
    const dropZone = document.getElementById("drop-zone");
    
    if (!dropZone) return;

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.classList.add('dragover');
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
        }, false);
    });

    dropZone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        processLocalFiles(files);
    }, false);
}

function handleLocalFiles(event) {
    const files = event.target.files;
    processLocalFiles(files);
}

function processLocalFiles(files) {
    localFiles = [];
    const validAudioFiles = Array.from(files).filter(file => file.type.startsWith('audio/'));
    
    validAudioFiles.forEach(file => {
        // Extraer artista y título del nombre del archivo
        // Ej: "Estopa - Como Camaron.mp3" -> Artista: Estopa, Título: Como Camaron
        const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
        let artist = "Artista Desconocido";
        let title = nameWithoutExt;

        if (nameWithoutExt.includes('-')) {
            const parts = nameWithoutExt.split('-');
            artist = parts[0].trim();
            title = parts.slice(1).join('-').trim();
        } else if (nameWithoutExt.includes('—')) { // raya larga
            const parts = nameWithoutExt.split('—');
            artist = parts[0].trim();
            title = parts.slice(1).join('—').trim();
        }

        localFiles.push({
            title: title,
            artist: artist,
            file: file,
            url: URL.createObjectURL(file)
        });
    });

    document.getElementById("file-count-indicator").textContent = `${localFiles.length} canciones cargadas`;
}

/* ==========================================================================
   INTEGRACIÓN YOUTUBE IFRAME (REPRODUCTOR NATIVO SIMPLIFICADO)
   ========================================================================== */
// El reproductor utiliza un iframe nativo con autoplay para máxima compatibilidad local.

/* ==========================================================================
   LÓGICA DEL JUEGO (CANTOR)
   ========================================================================== */
function startGame() {
    const source = document.getElementById("music-source-select").value;
    gameSongs = [];
    playedSongs = [];
    currentIndex = -1;

    if (source === "preset") {
        const presetKey = document.getElementById("preset-list-select").value;
        gameSongs = JSON.parse(JSON.stringify(PRESET_PLAYLISTS[presetKey]));
    } else if (source === "local") {
        if (localFiles.length < 10) {
            alert("Por favor, sube al menos 10 canciones en MP3 para jugar adecuadamente.");
            return;
        }
        gameSongs = JSON.parse(JSON.stringify(localFiles));
    } else if (source === "external") {
        const text = document.getElementById("external-songs-textarea").value;
        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        
        if (lines.length < 10) {
            alert("Introduce al menos 10 canciones (una por línea) para poder jugar.");
            return;
        }

        lines.forEach(line => {
            let artist = "Desconocido";
            let title = line;
            if (line.includes('-')) {
                const parts = line.split('-');
                artist = parts[0].trim();
                title = parts.slice(1).join('-').trim();
            }
            gameSongs.push({ title: title, artist: artist });
        });
    }

    if (gameSongs.length === 0) {
        alert("No se han cargado canciones válidas.");
        return;
    }

    // Mezclar el orden de las canciones
    drawOrder = Array.from({ length: gameSongs.length }, (_, i) => i);
    shuffleArray(drawOrder);

    // Preparar UI
    document.getElementById("stats-total").textContent = gameSongs.length;
    document.getElementById("stats-played").textContent = "0";
    document.getElementById("total-songs-count").textContent = gameSongs.length;

    // Crear Grid de todas las canciones en el tablero
    const songsGrid = document.getElementById("all-songs-grid");
    songsGrid.innerHTML = "";
    
    // Las ordenamos alfabéticamente para que el locutor pueda buscarlas fácilmente
    const sortedSongs = gameSongs.map((s, index) => ({ ...s, originalIndex: index }));
    sortedSongs.sort((a, b) => a.title.localeCompare(b.title));

    sortedSongs.forEach(song => {
        const card = document.createElement("div");
        card.className = "grid-song-card";
        card.id = `board-song-${song.originalIndex}`;
        
        card.innerHTML = `
            <div class="song-ball-num">${song.originalIndex + 1}</div>
            <div class="grid-song-info">
                <div class="grid-song-title">${song.title}</div>
                <div class="grid-song-artist">${song.artist}</div>
            </div>
        `;
        songsGrid.appendChild(card);
    });

    // Resetear visualización principal
    document.getElementById("board-song-title").textContent = "Haz clic en 'Extraer Canción' para iniciar";
    document.getElementById("board-song-artist").textContent = "¡Mucha suerte a todos!";
    document.getElementById("active-ball-index").textContent = "-";
    document.getElementById("history-container").innerHTML = "";

    // Cambiar vistas
    document.getElementById("setup-controls").classList.add("hidden");
    document.getElementById("game-controls").classList.remove("hidden");
    document.getElementById("board-idle-view").classList.add("hidden");
    document.getElementById("board-active-view").classList.remove("hidden");
    document.getElementById("game-status-badge").textContent = "En Juego";
    document.getElementById("game-status-badge").style.background = "var(--success)";
    
    // Habilitar controles de cartón
    document.getElementById("cards-container").innerHTML = `
        <div class="empty-state">
            <h3>Cartón preparado</h3>
            <p>Elige cuántos cartones quieres generar arriba y pulsa "Generar".</p>
        </div>
    `;

    gameSessionId = `game-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

    // Broadcast con reintentos para sincronizar invitados ya conectados o recien abiertos.
    broadcastGameStateWithRetry();

    playSound('draw');
}

function drawNextSong() {
    // Detener reproducción actual
    stopAudio();

    if (autoplayTimeout) {
        clearInterval(autoplayTimeout);
        autoplayTimeout = null;
    }

    if (currentIndex + 1 >= drawOrder.length) {
        alert("¡Todas las canciones han sonado! Fin de la partida.");
        return;
    }

    currentIndex++;
    const songIndex = drawOrder[currentIndex];
    const song = gameSongs[songIndex];

    playedSongs.push(songIndex);

    // Actualizar estadísticas
    document.getElementById("stats-played").textContent = playedSongs.length;

    // Actualizar Bola Activa y Detalle
    document.getElementById("active-ball-index").textContent = songIndex + 1;
    document.getElementById("board-song-title").textContent = "???"; // Oculto al inicio para que adivinen
    document.getElementById("board-song-artist").textContent = "¡Identifica la canción!";
    
    // Para el panel del host (más pequeño en la izquierda)
    document.getElementById("current-track-title").textContent = "???";
    document.getElementById("current-track-artist").textContent = "Haz clic en 'Revelar' cuando la adivinen";
    document.getElementById("btn-reveal").disabled = false;

    // Marcar en la rejilla general
    const gridCard = document.getElementById(`board-song-${songIndex}`);
    if (gridCard) {
        gridCard.classList.add("played");
    }

    // Playback de la canción
    playSongAudio(song);

    // Sonido de campana
    playSound('draw');

    // Registrar en el historial (se añade al principio del historial de canciones pasadas)
    // El historial muestra los nombres reales de las canciones anteriores
    updateHistory();
}

function revealTrackName() {
    if (currentIndex < 0) return;
    const songIndex = drawOrder[currentIndex];
    const song = gameSongs[songIndex];

    document.getElementById("board-song-title").textContent = song.title;
    document.getElementById("board-song-artist").textContent = song.artist;
    
    document.getElementById("current-track-title").textContent = song.title;
    document.getElementById("current-track-artist").textContent = song.artist;
    document.getElementById("btn-reveal").disabled = true;

    // Volver a renderizar historial por si acaso
    updateHistory();
}

function updateHistory() {
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = "";

    // Mostrar las últimas 6 canciones (sin contar la actual o mostrándola si ya está revelada)
    // Para darle emoción, mostramos en el historial solo las canciones completamente reveladas o anteriores
    const startIdx = Math.max(0, currentIndex - 5);
    for (let i = currentIndex; i >= startIdx; i--) {
        const songIndex = drawOrder[i];
        const song = gameSongs[songIndex];
        
        // Si es la actual y no se ha revelado aún, mostrar con incógnita
        const isCurrent = i === currentIndex;
        const isRevealed = document.getElementById("btn-reveal").disabled; // Si el botón revelar está desactivado, está revelada
        
        const card = document.createElement("div");
        card.className = "history-card";
        
        card.innerHTML = `
            <div class="ball-small">${songIndex + 1}</div>
            <div class="history-title">${(isCurrent && !isRevealed) ? "???" : song.title}</div>
            <div class="history-artist">${(isCurrent && !isRevealed) ? "Identifícala" : song.artist}</div>
        `;
        historyContainer.appendChild(card);
    }
}

function updateAudioStatus(text, type = "idle") {
    const logEl = document.getElementById("audio-status-text");
    const dotEl = document.querySelector(".status-dot");
    if (!logEl || !dotEl) return;
    
    logEl.textContent = text;
    dotEl.className = "status-dot " + type;
}

function cleanSearchTerm(term) {
    if (!term) return "";
    return term
        .replace(/\(remix\)/gi, '')
        .replace(/\(directo\)/gi, '')
        .replace(/\b(ft|ft\.|feat|feat\.)\b.*$/gi, '')
        .replace(/&/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function fetchItunesPreview(artist, title) {
    return new Promise((resolve) => {
        const callbackName = 'itunesCallback_' + Math.round(100000 * Math.random());
        const cleanArtist = cleanSearchTerm(artist);
        const cleanTitle = cleanSearchTerm(title);
        const query = encodeURIComponent(`${cleanArtist} ${cleanTitle}`);
        const url = `https://itunes.apple.com/search?term=${query}&limit=1&entity=song&callback=${callbackName}`;
        
        const timeoutId = setTimeout(() => {
            console.warn("iTunes API search timeout for:", title);
            delete window[callbackName];
            const scriptEl = document.getElementById(callbackName);
            if (scriptEl && scriptEl.parentNode) {
                scriptEl.parentNode.removeChild(scriptEl);
            }
            resolve(null);
        }, 5000);

        window[callbackName] = function(data) {
            clearTimeout(timeoutId);
            delete window[callbackName];
            
            const scriptEl = document.getElementById(callbackName);
            if (scriptEl && scriptEl.parentNode) {
                scriptEl.parentNode.removeChild(scriptEl);
            }
            
            if (data.resultCount > 0 && data.results[0].previewUrl) {
                resolve(data.results[0].previewUrl);
            } else {
                resolve(null);
            }
        };

        const script = document.createElement('script');
        script.id = callbackName;
        script.src = url;
        script.onerror = function() {
            clearTimeout(timeoutId);
            delete window[callbackName];
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
            resolve(null);
        };
        
        document.body.appendChild(script);
    });
}

async function playSongAudio(song) {
    const source = document.getElementById("music-source-select").value;
    
    playbackTimeLeft = PLAYBACK_MAX_TIME;
    document.getElementById("timer-bar").style.width = "100%";
    
    // Disco de vinilo a girar
    const vinyl = document.getElementById("vinyl-disk");
    vinyl.classList.add("playing");
    
    document.getElementById("btn-play-pause").disabled = false;
    togglePlayIcon(true);

    if (source === "preset" || source === "external") {
        updateAudioStatus("Buscando en iTunes...", "loading");
        console.log(`Buscando preview de iTunes para: ${song.artist} - ${song.title}`);
        const previewUrl = await fetchItunesPreview(song.artist, song.title);
        
        if (previewUrl) {
            updateAudioStatus("Cargando audio...", "loading");
            audioPlayerElement.src = previewUrl;
            
            // Inicializar ecualizador visual
            initVisualizer();
            
            audioPlayerElement.play()
                .then(() => {
                    startTimer();
                    updateAudioStatus("Sonando (iTunes Preview)", "success");
                })
                .catch(err => {
                    console.warn("Error reproduciendo audio de iTunes:", err);
                    updateAudioStatus("Error de reproducción", "error");
                    handleAudioError(err);
                });
        } else {
            console.warn("No se encontró preview en iTunes para:", song.title);
            updateAudioStatus("No disponible en iTunes", "error");
            handleAudioError();
        }
    } else if (source === "local" && song.url) {
        updateAudioStatus("Cargando MP3 local...", "loading");
        audioPlayerElement.src = song.url;
        
        // Inicializar ecualizador visual
        initVisualizer();
        
        audioPlayerElement.play()
            .then(() => {
                startTimer();
                updateAudioStatus("Sonando (Archivo Local)", "success");
            })
            .catch(err => {
                console.error("Error en reproducción local:", err);
                updateAudioStatus("Error de archivo local", "error");
                handleAudioError(err);
            });
    } else {
        updateAudioStatus("Modo sin audio", "idle");
        startTimer();
    }
}

function stopAudio() {
    stopTimer();
    
    const vinyl = document.getElementById("vinyl-disk");
    vinyl.classList.remove("playing");
    togglePlayIcon(false);

    if (audioPlayerElement) {
        audioPlayerElement.pause();
        audioPlayerElement.src = "";
    }
}

function togglePlayback() {
    const vinyl = document.getElementById("vinyl-disk");
    
    if (vinyl.classList.contains("playing")) {
        vinyl.classList.remove("playing");
        togglePlayIcon(false);
        stopTimer();

        if (audioPlayerElement) {
            audioPlayerElement.pause();
        }
    } else {
        vinyl.classList.add("playing");
        togglePlayIcon(true);
        startTimer();

        if (audioPlayerElement) {
            audioPlayerElement.play().catch(e => console.error(e));
        }
    }
}

function togglePlayIcon(isPlaying) {
    const playIcon = document.querySelector(".play-icon");
    const pauseIcon = document.querySelector(".pause-icon");
    if (isPlaying) {
        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("hidden");
    } else {
        playIcon.classList.remove("hidden");
        pauseIcon.classList.add("hidden");
    }
}

function handleAutoplayToggle(checkbox) {
    autoplayEnabled = checkbox.checked;
    if (!autoplayEnabled && autoplayTimeout) {
        clearInterval(autoplayTimeout);
        autoplayTimeout = null;
        updateAudioStatus("Listo", "idle");
    }
}

/* GESTIÓN DEL TEMPORIZADOR */
function startTimer() {
    clearInterval(playbackTimer);
    playbackTimer = setInterval(() => {
        playbackTimeLeft -= 0.1;
        const percentage = (playbackTimeLeft / PLAYBACK_MAX_TIME) * 100;
        document.getElementById("timer-bar").style.width = `${percentage}%`;

        if (playbackTimeLeft <= 0) {
            stopAudio();
            revealTrackName();
            
            if (autoplayEnabled) {
                let countdown = 5;
                updateAudioStatus(`Siguiente canción en ${countdown}s...`, "loading");
                autoplayTimeout = setInterval(() => {
                    countdown--;
                    if (countdown > 0) {
                        updateAudioStatus(`Siguiente canción en ${countdown}s...`, "loading");
                    } else {
                        clearInterval(autoplayTimeout);
                        autoplayTimeout = null;
                        drawNextSong();
                    }
                }, 1000);
            }
        }
    }, 100);
}

function stopTimer() {
    clearInterval(playbackTimer);
}

// Reiniciar partida
function resetGame() {
    if (confirm("¿Estás seguro de que quieres reiniciar la partida actual? Perderás el historial.")) {
        stopAudio();
        document.getElementById("setup-controls").classList.remove("hidden");
        document.getElementById("game-controls").classList.add("hidden");
        document.getElementById("board-idle-view").classList.remove("hidden");
        document.getElementById("board-active-view").classList.add("hidden");
        document.getElementById("game-status-badge").textContent = "Configuración";
        document.getElementById("game-status-badge").style.background = "rgba(255,255,255,0.08)";
        
        // Resetear rejillas y variables
        gameSongs = [];
        playedSongs = [];
        currentIndex = -1;
        generatedCards = [];
        autoplayEnabled = false;
        if (autoplayTimeout) {
            clearInterval(autoplayTimeout);
            autoplayTimeout = null;
        }
        const switchEl = document.getElementById("autoplay-switch");
        if (switchEl) {
            switchEl.checked = false;
        }
        document.getElementById("cards-container").innerHTML = `
            <div class="empty-state">
                <h3>No hay cartones generados</h3>
                <p>Inicia una partida en la pestaña del Organizador y luego genera cartones aquí.</p>
            </div>
        `;
        calculatePrizes();
        updateActiveCardsUI();
    }
}

/* ==========================================================================
   CARTONES DE JUEGO (JUGADORES)
   ========================================================================== */
function generatePlayerCards() {
    if (gameSongs.length === 0) {
        if (isGuestUser) {
            console.warn("Intento de generar cartón sin canciones cargadas del host.");
            return;
        }
        alert("Primero debes iniciar la partida en la pestaña del Organizador.");
        switchTab('organizer');
        return;
    }

    let qty = parseInt(document.getElementById("input-card-qty").value) || 1;
    if (isGuestUser) {
        qty = 1; // Un invitado en móvil solo necesita 1 cartón
    }
    const sizeSelect = document.getElementById("card-grid-size").value;
    
    let gridSize = 16; // 4x4 por defecto
    let gridClass = "grid-4x4";
    if (sizeSelect === "3x3") { gridSize = 9; gridClass = "grid-3x3"; }
    else if (sizeSelect === "5x5") { gridSize = 25; gridClass = "grid-5x5"; }

    if (gameSongs.length < gridSize) {
        alert(`No hay suficientes canciones cargadas para este tamaño de cartón. Se requieren al menos ${gridSize} canciones.`);
        return;
    }

    generatedCards = [];
    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    const printView = document.getElementById("print-view");
    printView.innerHTML = "";
    const printCardsGrid = document.createElement("div");
    printCardsGrid.className = "print-cards-grid";
    printView.appendChild(printCardsGrid);

    for (let c = 0; c < qty; c++) {
        const cardId = `CAR-${Math.floor(1000 + Math.random() * 9000)}`;
        
        // Seleccionar N canciones aleatorias y únicas para este cartón
        const cardSongs = getRandomSubset(gameSongs, gridSize);
        generatedCards.push({
            id: cardId,
            songs: cardSongs,
            gridSize: gridSize
        });

        // Crear Cartón en Pantalla
        const cardEl = document.createElement("div");
        cardEl.className = "bingo-card";
        cardEl.id = `card-${cardId}`;
        
        let cellsHTML = "";
        cardSongs.forEach((song, idx) => {
            cellsHTML += `
                <div class="card-cell" onclick="toggleCellMark(this)">
                    <div class="cell-song-title">${song.title}</div>
                    <div class="cell-song-artist">${song.artist}</div>
                </div>
            `;
        });

        cardEl.innerHTML = `
            <div class="card-top">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span class="card-id">${cardId}</span>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=${cardId}" alt="QR" style="width: 32px; height: 32px; border-radius: 4px; background: white; padding: 2px;">
                </div>
                <span class="card-logo">LOTO <span>BONGO</span></span>
            </div>
            <div class="card-grid ${gridClass}">
                ${cellsHTML}
            </div>
        `;
        container.appendChild(cardEl);

        // Crear Cartón de Impresión
        const printCardEl = document.createElement("div");
        printCardEl.className = "print-card";
        
        let printCellsHTML = "";
        cardSongs.forEach(song => {
            printCellsHTML += `
                <div class="print-card-cell">
                    <div class="print-cell-title">${song.title}</div>
                    <div class="print-cell-artist">${song.artist}</div>
                </div>
            `;
        });

        printCardEl.innerHTML = `
            <div class="print-card-top">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="print-card-id">${cardId}</span>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=${cardId}" alt="QR" style="width: 28px; height: 28px; background: white; padding: 1px;">
                </div>
                <span class="print-card-logo">LOTO BONGO</span>
            </div>
            <div class="print-card-grid ${gridClass}">
                ${printCellsHTML}
            </div>
        `;
        printCardsGrid.appendChild(printCardEl);
        
        // Si somos invitados en el móvil, notificar al host de este nuevo cartón para registrarlo en la sesión
        if (isGuestUser && !guestRegisteredCardIds.has(cardId)) {
            registerGuestCardWithRetry({
                id: cardId,
                songs: cardSongs,
                gridSize: gridSize
            });
        }
    }
    calculatePrizes();
    updateActiveCardsUI();
}

function toggleCellMark(cell) {
    cell.classList.toggle("marked");
    playSound('stamp');
}

/* ==========================================================================
   VALIDADOR DE CARTONES
   ========================================================================== */
function validateCardById() {
    const cardId = document.getElementById("input-validation-id").value.trim().toUpperCase();
    const resultContainer = document.getElementById("validation-result");
    
    if (!cardId) {
        alert("Por favor, introduce un ID de cartón.");
        return;
    }

    const card = generatedCards.find(c => c.id === cardId);
    if (!card) {
        alert(`No se ha encontrado ningún cartón activo con el ID ${cardId}. Asegúrate de haberlo generado en esta sesión.`);
        return;
    }

    resultContainer.classList.remove("hidden");
    resultContainer.innerHTML = "";

    // Contar canciones marcadas que efectivamente han sonado
    let hitsCount = 0;
    const songVerificationList = [];

    card.songs.forEach(song => {
        // Encontrar si esta canción ha sonado en el juego actual
        // Buscamos coincidencia exacta de título y artista
        const hasPlayed = playedSongs.some(idx => {
            const playedSong = gameSongs[idx];
            return playedSong.title === song.title && playedSong.artist === song.artist;
        });

        if (hasPlayed) {
            hitsCount++;
        }

        songVerificationList.push({
            title: song.title,
            artist: song.artist,
            hasPlayed: hasPlayed
        });
    });

    // Validar Línea y Bingo
    // Nota: Como los cartones son rejillas regulares (3x3, 4x4 o 5x5), calculamos por fila
    const dim = Math.sqrt(card.gridSize); // 3, 4 o 5
    let hasLine = false;

    // Verificar filas
    for (let r = 0; r < dim; r++) {
        let rowPlayedCount = 0;
        for (let c = 0; c < dim; c++) {
            const indexInCard = r * dim + c;
            if (songVerificationList[indexInCard].hasPlayed) {
                rowPlayedCount++;
            }
        }
        if (rowPlayedCount === dim) {
            hasLine = true;
        }
    }

    const hasBingo = hitsCount === card.gridSize;
    
    let statusClass = "no-win";
    let statusText = "Sin Premio Todavía";
    
    if (hasBingo) {
        statusClass = "win";
        statusText = "🏆 ¡BINGO CONFIRMADO! 🏆";
        playSound('fanfare');
    } else if (hasLine) {
        statusClass = "win";
        statusText = "⭐ ¡LÍNEA CONFIRMADA! ⭐";
        playSound('fanfare');
    }

    // Dibujar reporte visual del cartón validado
    let gridClass = `grid-${dim}x${dim}`;
    let cellsHTML = "";

    songVerificationList.forEach(song => {
        cellsHTML += `
            <div class="card-cell ${song.hasPlayed ? 'marked' : ''}" style="pointer-events: none;">
                <div class="cell-song-title">${song.title}</div>
                <div class="cell-song-artist">${song.artist}</div>
            </div>
        `;
    });

    resultContainer.innerHTML = `
        <div class="validation-status ${statusClass}">
            ${statusText}
        </div>
        <div style="margin-bottom: 15px; text-align: center; color: var(--text-muted);">
            Canciones cantadas en este cartón: <strong>${hitsCount} de ${card.gridSize}</strong>
        </div>
        <div class="bingo-card" style="margin: 0 auto; pointer-events: none;">
            <div class="card-top">
                <span class="card-id">${card.id} (Validado)</span>
                <span class="card-logo">LOTO <span>BONGO</span></span>
            </div>
            <div class="card-grid ${gridClass}">
                ${cellsHTML}
            </div>
        </div>
    `;
}

/* ==========================================================================
   AUDIO VISUALIZER LOGIC (Web Audio API)
   ========================================================================== */
function initVisualizer() {
    if (audioAnalyser) return;
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        audioPlayerElement.crossOrigin = "anonymous";
        
        audioSourceNode = audioCtx.createMediaElementSource(audioPlayerElement);
        audioAnalyser = audioCtx.createAnalyser();
        audioAnalyser.fftSize = 128; // 64 frequency bins
        
        audioSourceNode.connect(audioAnalyser);
        audioAnalyser.connect(audioCtx.destination);
        
        startVisualizerDrawing();
    } catch (e) {
        console.warn("Audio Visualizer initialization bypassed or failed:", e);
    }
}

function startVisualizerDrawing() {
    const canvas = document.getElementById("visualizer-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const bufferLength = audioAnalyser ? audioAnalyser.frequencyBinCount : 64;
    const dataArray = new Uint8Array(bufferLength);
    
    function draw() {
        visualizerAnimationId = requestAnimationFrame(draw);
        
        const width = canvas.width;
        const height = canvas.height;
        ctx.clearRect(0, 0, width, height);
        
        if (audioAnalyser) {
            audioAnalyser.getByteFrequencyData(dataArray);
        }
        
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = 105; // Placed perfectly around the 200px vinyl disk
        
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
            sum += dataArray[i];
        }
        const average = sum / bufferLength;
        const pulse = (average / 255) * 15;
        
        // Neon Outer Circle Glow
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + pulse, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(0, 245, 212, ${0.15 + (average / 255) * 0.35})`;
        ctx.lineWidth = 6 + pulse;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#00f5d4";
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
        
        // Radial Visualizer Bars
        const barCount = 40;
        for (let i = 0; i < barCount; i++) {
            const angle = (i / barCount) * 2 * Math.PI;
            const dataIndex = Math.floor((i / barCount) * bufferLength);
            const value = dataArray[dataIndex] || 0;
            const barLength = (value / 255) * 35;
            
            const startX = centerX + Math.cos(angle) * (radius + 2);
            const startY = centerY + Math.sin(angle) * (radius + 2);
            const endX = centerX + Math.cos(angle) * (radius + 2 + barLength);
            const endY = centerY + Math.sin(angle) * (radius + 2 + barLength);
            
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            
            const hue = 280 - (value / 255) * 100; // Violet to Cyan transition
            ctx.strokeStyle = `hsla(${hue}, 100%, 65%, ${0.5 + (value / 255) * 0.5})`;
            ctx.lineWidth = 3;
            ctx.lineCap = "round";
            ctx.stroke();
        }
    }
    
    if (visualizerAnimationId) {
        cancelAnimationFrame(visualizerAnimationId);
    }
    draw();
}

/* ==========================================================================
   PEERJS P2P & FLOATING EMOJIS LOGIC
   ========================================================================== */
// Configuración común de PeerJS con servidores STUN y TURN públicos para garantizar conexión móvil incluso tras firewalls/NATs
const peerConfig = {
    config: {
        iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' },
            { urls: 'stun:stun2.l.google.com:19302' },
            { urls: 'stun:openrelay.metered.ca:80' },
            {
                urls: 'turn:openrelay.metered.ca:80?transport=udp',
                username: 'openrelay',
                credential: 'openrelay'
            },
            {
                urls: 'turn:openrelay.metered.ca:443?transport=tcp',
                username: 'openrelay',
                credential: 'openrelay'
            }
        ]
    },
    debug: 1
};

function initHostPeer() {
    roomId = 'lotobongo-' + Math.floor(1000 + Math.random() * 9000);
    peer = new Peer(roomId, peerConfig);

    peer.on('open', (id) => {
        console.log('Host PeerJS id:', id);
        const shareUrl = `${window.location.origin}${window.location.pathname}?room=${id}`;
        const inputUrl = document.getElementById("share-room-url");
        if (inputUrl) inputUrl.value = shareUrl;
        
        const qrImg = document.getElementById("share-qr-image");
        if (qrImg) {
            qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareUrl)}`;
        }
    });

    peer.on('connection', (connection) => {
        console.log('Invitado intentando conectar:', connection.peer);

        connection.on('data', (data) => {
            handleHostConnectionData(connection, data);
        });

        connection.on('close', () => {
            console.log('Conexion cerrada por el invitado:', connection.peer);
            hostConnections = hostConnections.filter(c => c !== connection);
        });
        
        connection.on('error', (err) => {
            console.error('Error en la conexion del invitado:', connection.peer, err);
        });

        connection.on('open', () => {
            console.log('Conexion P2P abierta con exito:', connection.peer);
            
            if (!hostConnections.includes(connection)) {
                hostConnections.push(connection);
            }

            sendGameStateToGuest(connection);
        });
    });

    peer.on('error', (err) => {
        console.error('PeerJS Host Error:', err);
        if (err.type === 'unavailable-id') {
            console.log('El ID ya está en uso, reintentando con otro...');
            initHostPeer();
        }
    });
}

function getCurrentGameState() {
    return {
        type: 'game-state',
        gameSessionId: gameSessionId,
        hasStarted: gameSongs.length > 0,
        songs: gameSongs,
        playedSongs: playedSongs,
        gridSize: document.getElementById("card-grid-size").value
    };
}

function sendGameStateToGuest(connection) {
    if (!connection || !connection.open) return;
    connection.send(getCurrentGameState());
}

function broadcastGameStateWithRetry() {
    let attempts = 0;
    const maxAttempts = 5;
    const sendBurst = () => {
        broadcastToGuests(getCurrentGameState());
        attempts += 1;
        if (attempts < maxAttempts) {
            setTimeout(sendBurst, 1000);
        }
    };
    sendBurst();
}

function handleHostConnectionData(connection, data) {
    console.log('Datos recibidos de', connection.peer, ':', data);
    if (!data) return;

    if (data.type === 'guest-ready') {
        if (!hostConnections.includes(connection) && connection.open) {
            hostConnections.push(connection);
        }
        sendGameStateToGuest(connection);
        return;
    }

    if (data.type === 'emoji') {
        showFloatingEmojiOnScreen(data.emoji);
        return;
    }

    if (data.type === 'register-card' && data.card) {
        console.log('Registrando carton recibido:', data.card);
        if (!generatedCards.some(c => c.id === data.card.id)) {
            generatedCards.push(data.card);
            calculatePrizes();
            updateActiveCardsUI();
        }
        if (connection.open) {
            connection.send({
                type: 'card-registered',
                cardId: data.card.id,
                gameSessionId: data.gameSessionId || gameSessionId
            });
        }
    }
}

function updateActiveCardsUI() {
    const countEl = document.getElementById("active-cards-count");
    const pillsEl = document.getElementById("active-cards-pills");
    if (!pillsEl) return;
    
    if (countEl) countEl.textContent = generatedCards.length;
    
    if (generatedCards.length === 0) {
        pillsEl.innerHTML = `<span style="color: var(--text-muted); font-size: 0.9rem;">Ningún cartón registrado todavía.</span>`;
        return;
    }
    
    pillsEl.innerHTML = "";
    generatedCards.forEach(card => {
        const pill = document.createElement("span");
        pill.style.cssText = "background: rgba(157, 78, 221, 0.2); border: 1px solid rgba(157, 78, 221, 0.4); padding: 5px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; color: var(--accent-cyan); cursor: pointer; transition: all 0.2s ease;";
        pill.textContent = card.id;
        
        pill.onmouseover = () => { 
            pill.style.background = "rgba(0, 245, 212, 0.25)"; 
            pill.style.borderColor = "var(--accent-cyan)"; 
        };
        pill.onmouseout = () => { 
            pill.style.background = "rgba(157, 78, 221, 0.2)"; 
            pill.style.borderColor = "rgba(157, 78, 221, 0.4)"; 
        };
        
        pill.onclick = () => {
            const inputVal = document.getElementById("input-validation-id");
            if (inputVal) {
                inputVal.value = card.id;
                validateCardById();
            }
        };
        pillsEl.appendChild(pill);
    });
}

function connectToRoom(hostRoomId) {
    const emptyDesc = document.querySelector("#cards-container .empty-state p");
    if (emptyDesc) emptyDesc.textContent = "Conectando con el organizador...";
    
    peer = new Peer(undefined, peerConfig);

    peer.on('open', (id) => {
        console.log('Mi ID de invitado:', id);
        if (emptyDesc) emptyDesc.textContent = "Conexion de red lista. Buscando al organizador...";
        
        conn = peer.connect(hostRoomId);

        conn.on('data', (data) => {
            handleGuestConnectionData(data, emptyDesc);
        });

        conn.on('close', () => {
            console.log('Conexion cerrada');
            stopGuestReadyLoop();
            stopGuestCardRegisterLoop();
            if (emptyDesc) emptyDesc.textContent = "Conexion perdida con el organizador. Intenta refrescar.";
        });
        
        conn.on('error', (err) => {
            console.error('Error de conexion P2P:', err);
            stopGuestReadyLoop();
            stopGuestCardRegisterLoop();
            if (emptyDesc) emptyDesc.innerHTML = `<span style="color: var(--danger);">Error de conexion: ${err.message || err}</span>`;
        });
        
        conn.on('open', () => {
            console.log('Conexion establecida con el organizador');
            if (emptyDesc) emptyDesc.textContent = "Conectado. Esperando que el organizador comience la partida...";
            startGuestReadyLoop();
        });
    });

    peer.on('error', (err) => {
        console.error('PeerJS Guest Error:', err);
        if (emptyDesc) {
            if (err.type === 'peer-unavailable') {
                emptyDesc.innerHTML = `<span style="color: var(--danger);">La sala del organizador (${hostRoomId}) no existe o ha caducado. Asegúrate de que el ordenador tiene la partida abierta.</span>`;
            } else {
                emptyDesc.innerHTML = `<span style="color: var(--danger);">Error de red: ${err.type || err}</span>`;
            }
        }
    });
}

function startGuestReadyLoop() {
    stopGuestReadyLoop();
    const sendReady = () => {
        if (conn && conn.open) {
            conn.send({
                type: 'guest-ready',
                receivedGameSessionId: guestLastSessionId
            });
        }
    };
    sendReady();
    guestReadyInterval = setInterval(sendReady, 1000);
}

function stopGuestReadyLoop() {
    if (guestReadyInterval) {
        clearInterval(guestReadyInterval);
        guestReadyInterval = null;
    }
}

function handleGuestConnectionData(data, emptyDesc) {
    console.log('Recibido de host:', data);
    if (!data) return;

    if (data.type === 'game-state' || data.type === 'init-game') {
        handleGuestGameState(data, emptyDesc);
        return;
    }

    if (data.type === 'card-registered') {
        console.log('Carton registrado por el organizador:', data.cardId);
        if (guestPendingCard && guestPendingCard.id === data.cardId) {
            guestRegisteredCardIds.add(data.cardId);
            stopGuestCardRegisterLoop();
        }
    }
}

function registerGuestCardWithRetry(card) {
    guestPendingCard = card;
    guestRegisteredCardIds.add(card.id);

    const sendRegistration = () => {
        if (conn && conn.open && guestPendingCard) {
            conn.send({
                type: 'register-card',
                gameSessionId: gameSessionId,
                card: guestPendingCard
            });
        }
    };

    stopGuestCardRegisterLoop();
    sendRegistration();
    guestCardRegisterInterval = setInterval(sendRegistration, 1000);
}

function stopGuestCardRegisterLoop() {
    if (guestCardRegisterInterval) {
        clearInterval(guestCardRegisterInterval);
        guestCardRegisterInterval = null;
    }
    guestPendingCard = null;
}

function handleGuestGameState(data, emptyDesc) {
    const songs = data.songs || [];
    const sessionId = data.gameSessionId || `legacy-${songs.length}`;

    if (!data.hasStarted || songs.length === 0) {
        if (emptyDesc) emptyDesc.textContent = "Conectado. Esperando que el organizador comience la partida...";
        return;
    }

    gameSongs = songs;
    playedSongs = data.playedSongs || [];
    gameSessionId = sessionId;
    
    const sizeSelect = document.getElementById("card-grid-size");
    if (sizeSelect && data.gridSize) {
        sizeSelect.value = data.gridSize;
    }

    if (guestLastSessionId !== sessionId) {
        guestLastSessionId = sessionId;
        guestRegisteredCardIds = new Set();
        stopGuestCardRegisterLoop();
        stopGuestReadyLoop();
        if (emptyDesc) emptyDesc.textContent = "Partida recibida. Generando tu carton...";
        generatePlayerCards();
    }
}

function broadcastToGuests(data) {
    hostConnections.forEach(connection => {
        if (connection && connection.open) {
            connection.send(data);
        }
    });
}

function sendEmojiReaction(emoji) {
    if (conn && conn.open) {
        conn.send({ type: 'emoji', emoji: emoji });
    }
    showFloatingEmojiOnScreen(emoji);
}

function showFloatingEmojiOnScreen(emoji) {
    const emojiEl = document.createElement("div");
    emojiEl.className = "floating-emoji";
    emojiEl.textContent = emoji;
    
    const randomX = Math.floor(Math.random() * 80) + 10;
    emojiEl.style.left = `${randomX}%`;
    
    const driftX = (Math.random() - 0.5) * 120;
    emojiEl.style.setProperty('--drift-x', `${driftX}px`);
    
    document.body.appendChild(emojiEl);
    
    setTimeout(() => {
        if (emojiEl.parentNode) {
            emojiEl.parentNode.removeChild(emojiEl);
        }
    }, 3500);
}

/* ==========================================================================
   SHARE MODAL LOGIC
   ========================================================================== */
function openShareModal() {
    const modal = document.getElementById("share-modal");
    if (modal) modal.classList.remove("hidden");
}

function closeShareModal() {
    const modal = document.getElementById("share-modal");
    if (modal) modal.classList.add("hidden");
}

/* ==========================================================================
   QR SCANNER LOGIC (VALIDADOR)
   ========================================================================== */
let html5QrcodeScanner = null;

function toggleCameraScanner() {
    const qrReaderDiv = document.getElementById("qr-reader");
    const btnToggle = document.getElementById("btn-toggle-camera");
    
    if (!qrReaderDiv) return;
    
    if (qrReaderDiv.classList.contains("hidden")) {
        qrReaderDiv.classList.remove("hidden");
        btnToggle.textContent = "❌ Apagar Cámara / Cerrar Escáner";
        
        html5QrcodeScanner = new Html5QrcodeScanner(
            "qr-reader", 
            { fps: 10, qrbox: { width: 250, height: 250 } },
            false
        );
        
        html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    } else {
        stopCameraScanner();
    }
}

function stopCameraScanner() {
    const qrReaderDiv = document.getElementById("qr-reader");
    const btnToggle = document.getElementById("btn-toggle-camera");
    
    if (html5QrcodeScanner) {
        html5QrcodeScanner.clear().then(() => {
            html5QrcodeScanner = null;
            if (qrReaderDiv) qrReaderDiv.classList.add("hidden");
            if (btnToggle) btnToggle.textContent = "📷 Encender Cámara para Escanear QR";
        }).catch(err => {
            console.error("Error apagar escáner:", err);
            if (qrReaderDiv) qrReaderDiv.classList.add("hidden");
            if (btnToggle) btnToggle.textContent = "📷 Encender Cámara para Escanear QR";
        });
    } else {
        if (qrReaderDiv) qrReaderDiv.classList.add("hidden");
        if (btnToggle) btnToggle.textContent = "📷 Encender Cámara para Escanear QR";
    }
}

function onScanSuccess(decodedText, decodedResult) {
    stopCameraScanner();
    
    const inputVal = document.getElementById("input-validation-id");
    if (inputVal) {
        inputVal.value = decodedText;
        validateCardById();
    }
}

function onScanFailure(error) {
    // Normal failure to detect QR frame, ignored.
}

/* ==========================================================================
   MÉTODOS AUXILIARES
   ========================================================================== */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomSubset(arr, n) {
    const shuffled = [...arr];
    shuffleArray(shuffled);
    return shuffled.slice(0, n);
}

function calculatePrizes() {
    const costInput = document.getElementById("prize-card-cost");
    const lineInput = document.getElementById("prize-line-pct");
    const bingoInput = document.getElementById("prize-bingo-pct");
    
    if (!costInput || !lineInput || !bingoInput) return;
    
    const cardCost = parseFloat(costInput.value) || 0;
    const linePct = parseFloat(lineInput.value) || 0;
    const bingoPct = parseFloat(bingoInput.value) || 0;
    
    const totalCards = generatedCards.length;
    const totalCollected = totalCards * cardCost;
    
    const linePrize = (totalCollected * linePct) / 100;
    const bingoPrize = (totalCollected * bingoPct) / 100;
    
    document.getElementById("display-total-cards").textContent = totalCards;
    document.getElementById("display-total-collected").textContent = totalCollected.toFixed(2) + " €";
    document.getElementById("display-line-prize").textContent = linePrize.toFixed(2) + " €";
    document.getElementById("display-bingo-prize").textContent = bingoPrize.toFixed(2) + " €";
}
