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
        { title: "El Ritmo del Garaje", artist: "Loquillo y Trogloditas", ytId: "yU1m219T2Cg" },
        { title: "La Chica de Ayer", artist: "Nacha Pop", ytId: "" },
        { title: "Venezia", artist: "Hombres G", ytId: "" },
        { title: "Una Foto en Blanco y Negro", artist: "El Canto del Loco", ytId: "" },
        { title: "Rosas", artist: "La Oreja de Van Gogh", ytId: "" },
        { title: "Tenia Tanto Que Darte", artist: "Nena Daconte", ytId: "" },
        { title: "Sirenas", artist: "Taburete", ytId: "" },
        { title: "La Revolucion Sexual", artist: "La Casa Azul", ytId: "" },
        { title: "Papeles Mojados", artist: "Chambao", ytId: "" },
        { title: "Ojala", artist: "Beret", ytId: "" },
        { title: "La Rumba del Piano", artist: "Estopa", ytId: "" }
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
        { title: "Girls Just Want To Have Fun", artist: "Cyndi Lauper", ytId: "PIb6AZdTr-A" },
        { title: "Shape of You", artist: "Ed Sheeran", ytId: "" },
        { title: "Happy", artist: "Pharrell Williams", ytId: "" },
        { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", ytId: "" },
        { title: "Hey Ya!", artist: "Outkast", ytId: "" },
        { title: "Seven Nation Army", artist: "The White Stripes", ytId: "" },
        { title: "Viva la Vida", artist: "Coldplay", ytId: "" },
        { title: "Somebody That I Used To Know", artist: "Gotye", ytId: "" },
        { title: "All Star", artist: "Smash Mouth", ytId: "" },
        { title: "I Gotta Feeling", artist: "The Black Eyed Peas", ytId: "" },
        { title: "Hips Don't Lie", artist: "Shakira", ytId: "" }
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
        { title: "Salió El Sol", artist: "Don Omar", ytId: "K1y5qT1Z55k" },
        { title: "El Perdón", artist: "Nicky Jam & Enrique Iglesias", ytId: "" },
        { title: "Travesuras", artist: "Nicky Jam", ytId: "" },
        { title: "6 AM", artist: "J Balvin & Farruko", ytId: "" },
        { title: "Ay Vamos", artist: "J Balvin", ytId: "" },
        { title: "Dutty Love", artist: "Don Omar & Natti Natasha", ytId: "" },
        { title: "Hasta Abajo", artist: "Don Omar", ytId: "" },
        { title: "Noche y De Día", artist: "Enrique Iglesias, Yandel & Juan Magan", ytId: "" },
        { title: "La Mordidita", artist: "Ricky Martin & Yotuel", ytId: "" },
        { title: "Borro Cassette", artist: "Maluma", ytId: "" },
        { title: "Taboo", artist: "Don Omar", ytId: "" }
    ],
    "pop-fiesta": [
        { title: "Comiéndote a Besos", artist: "Rozalén", ytId: "" },
        { title: "Soldadito Marinero", artist: "Fito & Fitipaldis", ytId: "" },
        { title: "Peter Pan", artist: "El Canto del Loco", ytId: "" },
        { title: "Puedes Contar Conmigo", artist: "La Oreja de Van Gogh", ytId: "" },
        { title: "20 de Enero", artist: "La Oreja de Van Gogh", ytId: "" },
        { title: "Pa' Fuera Telarañas", artist: "Bebe", ytId: "" },
        { title: "Besos", artist: "El Canto del Loco", ytId: "" },
        { title: "La Vereda de la Puerta de Atrás", artist: "Extremoduro", ytId: "" },
        { title: "Me Quedo", artist: "Aitana & Lola Índigo", ytId: "" },
        { title: "Mujer Bruja", artist: "Lola Índigo & Mala Rodríguez", ytId: "" },
        { title: "Ni Tú Ni Nadie", artist: "Alaska y Dinarama", ytId: "" },
        { title: "Quiero Ser", artist: "Amaia Montero", ytId: "" },
        { title: "Por la Boca Vive el Pez", artist: "Fito & Fitipaldis", ytId: "" },
        { title: "Un Violinista en Tu Tejado", artist: "Melendi", ytId: "" },
        { title: "La Raja de Tu Falda", artist: "Estopa", ytId: "" },
        { title: "Vivir Mi Vida", artist: "Marc Anthony", ytId: "" },
        { title: "Tacones Rojos", artist: "Sebastián Yatra", ytId: "" },
        { title: "Mon Amour (Remix)", artist: "zzoilo & Aitana", ytId: "" },
        { title: "La Bicicleta", artist: "Carlos Vives & Shakira", ytId: "" },
        { title: "Rayos de Sol", artist: "Jose de Rico & Henry Mendez", ytId: "" },
        { title: "Sofía", artist: "Álvaro Soler", ytId: "" },
        { title: "El Mismo Sol", artist: "Álvaro Soler", ytId: "" },
        { title: "Yo Contigo, Tú Conmigo", artist: "Morat & Álvaro Soler", ytId: "" },
        { title: "Cómo Te Atreves", artist: "Morat", ytId: "" },
        { title: "No Pide Tanto, Idiota", artist: "Maldita Nerea", ytId: "" },
        { title: "El Secreto de las Tortugas", artist: "Maldita Nerea", ytId: "" },
        { title: "La Playa", artist: "La Oreja de Van Gogh", ytId: "" },
        { title: "Cuéntame al Oído", artist: "La Oreja de Van Gogh", ytId: "" },
        { title: "Marta, Sebas, Guille y los Demás", artist: "Amaral", ytId: "" },
        { title: "El 28", artist: "La Oreja de Van Gogh", ytId: "" }
    ],
    "verbenas-bodas": [
        { title: "Fiesta", artist: "Raffaella Carrà", ytId: "" },
        { title: "Hay Que Venir al Sur", artist: "Raffaella Carrà", ytId: "" },
        { title: "Escándalo", artist: "Raphael", ytId: "" },
        { title: "Vivir Así Es Morir de Amor", artist: "Camilo Sesto", ytId: "" },
        { title: "Yo Soy Aquel", artist: "Raphael", ytId: "" },
        { title: "La Gozadera", artist: "Gente de Zona ft. Marc Anthony", ytId: "" },
        { title: "Paquito el Chocolatero", artist: "Gustavo Pascual Falcó", ytId: "" },
        { title: "Bomba", artist: "King África", ytId: "" },
        { title: "La Mayonesa", artist: "Chocolate Latino", ytId: "" },
        { title: "Follow the Leader", artist: "SBS", ytId: "" },
        { title: "El Tiburón", artist: "Proyecto Uno", ytId: "" },
        { title: "El Venao", artist: "Los Cantantes", ytId: "" },
        { title: "La Barbacoa", artist: "Georgie Dann", ytId: "" },
        { title: "El Chiringuito", artist: "Georgie Dann", ytId: "" },
        { title: "Eva María", artist: "Fórmula V", ytId: "" },
        { title: "Cuéntame", artist: "Fórmula V", ytId: "" },
        { title: "Sarandonga", artist: "Lolita", ytId: "" },
        { title: "Procuro Olvidarte", artist: "Los Panchos", ytId: "" },
        { title: "Y.M.C.A.", artist: "Village People", ytId: "" },
        { title: "I Will Survive", artist: "Gloria Gaynor", ytId: "" },
        { title: "Resistiré", artist: "Dúo Dinámico", ytId: "" },
        { title: "Libre", artist: "Nino Bravo", ytId: "" },
        { title: "Un Beso y una Flor", artist: "Nino Bravo", ytId: "" },
        { title: "Mi Gran Noche", artist: "Raphael", ytId: "" },
        { title: "Amante Bandido", artist: "Miguel Bosé", ytId: "" },
        { title: "Bailar Pegados", artist: "Sergio Dalma", ytId: "" },
        { title: "Corazón Contento", artist: "Marisol", ytId: "" },
        { title: "La Yenka", artist: "Johnny & Charley", ytId: "" },
        { title: "La Bamba", artist: "Los Lobos", ytId: "" },
        { title: "El Tractor Amarillo", artist: "Zapato Veloz", ytId: "" }
    ],
    "reggaeton-actual": [
        { title: "Tití Me Preguntó", artist: "Bad Bunny", ytId: "" },
        { title: "Me Porto Bonito", artist: "Bad Bunny & Chencho Corleone", ytId: "" },
        { title: "Provenza", artist: "Karol G", ytId: "" },
        { title: "Bichota", artist: "Karol G", ytId: "" },
        { title: "Qlona", artist: "Karol G & Peso Pluma", ytId: "" },
        { title: "Normal", artist: "Feid", ytId: "" },
        { title: "Classy 101", artist: "Feid & Young Miko", ytId: "" },
        { title: "Playa del Inglés", artist: "Quevedo & Myke Towers", ytId: "" },
        { title: "Columbia", artist: "Quevedo", ytId: "" },
        { title: "Desesperados", artist: "Rauw Alejandro & Chencho Corleone", ytId: "" },
        { title: "Todo de Ti", artist: "Rauw Alejandro", ytId: "" },
        { title: "La Jeepeta (Remix)", artist: "Nio García, Anuel AA, Myke Towers, Brray & Juanka", ytId: "" },
        { title: "La Curiosidad", artist: "Jay Wheeler & Myke Towers", ytId: "" },
        { title: "Una Noche en Medellín", artist: "Cris Mj", ytId: "" },
        { title: "LALA", artist: "Myke Towers", ytId: "" },
        { title: "Hey Mor", artist: "Ozuna & Feid", ytId: "" },
        { title: "Ojitos Lindos", artist: "Bad Bunny & Bomba Estéreo", ytId: "" },
        { title: "El Merengue", artist: "Marshmello & Manuel Turizo", ytId: "" },
        { title: "Mi Ex Tenía Razón", artist: "Karol G", ytId: "" },
        { title: "Acróstico", artist: "Shakira", ytId: "" },
        { title: "Moscow Mule", artist: "Bad Bunny", ytId: "" },
        { title: "Where She Goes", artist: "Bad Bunny", ytId: "" },
        { title: "Yandel 150", artist: "Yandel & Feid", ytId: "" },
        { title: "Ferxxo 100", artist: "Feid", ytId: "" },
        { title: "XQ Te Pones Así", artist: "Feid & Yandel", ytId: "" },
        { title: "Punto G", artist: "Quevedo", ytId: "" },
        { title: "Feliz Cumpleaños Ferxxo", artist: "Feid", ytId: "" },
        { title: "Si Antes Te Hubiera Conocido", artist: "Karol G", ytId: "" },
        { title: "Ohnana", artist: "Kapo", ytId: "" },
        { title: "Santa", artist: "Rvssian, Rauw Alejandro & Ayra Starr", ytId: "" }
    ],
    "eurodance-90s": [
        { title: "Freed From Desire", artist: "Gala", ytId: "" },
        { title: "The Rhythm of the Night", artist: "Corona", ytId: "" },
        { title: "What Is Love", artist: "Haddaway", ytId: "" },
        { title: "No Limit", artist: "2 Unlimited", ytId: "" },
        { title: "Rhythm Is a Dancer", artist: "Snap!", ytId: "" },
        { title: "Blue (Da Ba Dee)", artist: "Eiffel 65", ytId: "" },
        { title: "Scatman", artist: "Scatman John", ytId: "" },
        { title: "Saturday Night", artist: "Whigfield", ytId: "" },
        { title: "Be My Lover", artist: "La Bouche", ytId: "" },
        { title: "Sweet Dreams", artist: "La Bouche", ytId: "" },
        { title: "Mr. Vain", artist: "Culture Beat", ytId: "" },
        { title: "Pump Up the Jam", artist: "Technotronic", ytId: "" },
        { title: "Around the World", artist: "Daft Punk", ytId: "" },
        { title: "Better Off Alone", artist: "Alice Deejay", ytId: "" },
        { title: "L'Amour Toujours", artist: "Gigi D'Agostino", ytId: "" },
        { title: "Así Me Gusta a Mí", artist: "Chimo Bayo", ytId: "" },
        { title: "Historias de Amor", artist: "OBK", ytId: "" },
        { title: "Flying Free", artist: "Pont Aeri", ytId: "" },
        { title: "This Is Your Night", artist: "Amber", ytId: "" },
        { title: "Another Night", artist: "Real McCoy", ytId: "" },
        { title: "Show Me Love", artist: "Robin S", ytId: "" },
        { title: "Sing Hallelujah!", artist: "Dr. Alban", ytId: "" },
        { title: "It's My Life", artist: "Dr. Alban", ytId: "" },
        { title: "The Power", artist: "Snap!", ytId: "" },
        { title: "U Can't Touch This", artist: "MC Hammer", ytId: "" },
        { title: "Children", artist: "Robert Miles", ytId: "" },
        { title: "Sandstorm", artist: "Darude", ytId: "" },
        { title: "Insomnia", artist: "Faithless", ytId: "" },
        { title: "Encore Une Fois", artist: "Sash!", ytId: "" },
        { title: "Ecuador", artist: "Sash!", ytId: "" }
    ],
    "rock-espanol": [
        { title: "So Payaso", artist: "Extremoduro", ytId: "" },
        { title: "Salir", artist: "Extremoduro", ytId: "" },
        { title: "La Casa Por el Tejado", artist: "Fito & Fitipaldis", ytId: "" },
        { title: "Whisky Barato", artist: "Fito & Fitipaldis", ytId: "" },
        { title: "Maneras de Vivir", artist: "Leño", ytId: "" },
        { title: "Feo, Fuerte y Formal", artist: "Loquillo", ytId: "" },
        { title: "Pájaros de Barro", artist: "Manolo García", ytId: "" },
        { title: "Insurrección", artist: "El Último de la Fila", ytId: "" },
        { title: "No Dudaría", artist: "Antonio Flores", ytId: "" },
        { title: "La Senda del Tiempo", artist: "Celtas Cortos", ytId: "" },
        { title: "Cuéntame un Cuento", artist: "Celtas Cortos", ytId: "" },
        { title: "Agradecido", artist: "Rosendo", ytId: "" },
        { title: "Bienvenidos", artist: "Miguel Ríos", ytId: "" },
        { title: "Cadillac Solitario", artist: "Loquillo y Trogloditas", ytId: "" },
        { title: "Cien Gaviotas", artist: "Duncan Dhu", ytId: "" },
        { title: "Déjame", artist: "Los Secretos", ytId: "" },
        { title: "El Límite", artist: "La Frontera", ytId: "" },
        { title: "El Roce de Tu Piel", artist: "Platero y Tú", ytId: "" },
        { title: "Como Pollo Sin Cabeza", artist: "Marea", ytId: "" },
        { title: "Por Verte Sonreír", artist: "La Fuga", ytId: "" },
        { title: "A Fuego", artist: "Extremoduro", ytId: "" },
        { title: "No Hay Tregua", artist: "Barricada", ytId: "" },
        { title: "Dolores Se Llamaba Lola", artist: "Los Suaves", ytId: "" },
        { title: "Maldito Duende", artist: "Héroes del Silencio", ytId: "" },
        { title: "Entre Dos Tierras", artist: "Héroes del Silencio", ytId: "" },
        { title: "La Chispa Adecuada", artist: "Héroes del Silencio", ytId: "" },
        { title: "Escuela de Calor", artist: "Radio Futura", ytId: "" },
        { title: "Enamorado de la Moda Juvenil", artist: "Radio Futura", ytId: "" },
        { title: "Santa Lucía", artist: "Miguel Ríos", ytId: "" },
        { title: "El Rompeolas", artist: "Loquillo", ytId: "" }
    ],
    "indie-espanol": [
        { title: "Copenhague", artist: "Vetusta Morla", ytId: "" },
        { title: "Valiente", artist: "Vetusta Morla", ytId: "" },
        { title: "Club de Fans de John Boy", artist: "Love of Lesbian", ytId: "" },
        { title: "Allí Donde Solíamos Gritar", artist: "Love of Lesbian", ytId: "" },
        { title: "Copera", artist: "Izal", ytId: "" },
        { title: "La Mujer de Verde", artist: "Izal", ytId: "" },
        { title: "Emborracharme", artist: "Lori Meyers", ytId: "" },
        { title: "Mi Realidad", artist: "Lori Meyers", ytId: "" },
        { title: "Un Buen Día", artist: "Los Planetas", ytId: "" },
        { title: "Carreteras Infinitas", artist: "Sidonie", ytId: "" },
        { title: "Por Ti", artist: "Sidonie", ytId: "" },
        { title: "Mira Cómo Vuelo", artist: "Miss Caffeina", ytId: "" },
        { title: "Merlí", artist: "Miss Caffeina", ytId: "" },
        { title: "Cualquier Otra Parte", artist: "Dorian", ytId: "" },
        { title: "La Tormenta de Arena", artist: "Dorian", ytId: "" },
        { title: "Años 80", artist: "Los Piratas", ytId: "" },
        { title: "Turno de Noche", artist: "Carlos Sadness", ytId: "" },
        { title: "Te Debo un Baile", artist: "Nueva Vulcano", ytId: "" },
        { title: "Bien Por Ti", artist: "Viva Suecia", ytId: "" },
        { title: "Lo Que Te Mereces", artist: "Viva Suecia", ytId: "" },
        { title: "La Deriva", artist: "Vetusta Morla", ytId: "" },
        { title: "23 de Junio", artist: "Vetusta Morla", ytId: "" },
        { title: "Incendios de Nieve", artist: "Love of Lesbian", ytId: "" },
        { title: "Oniria e Insomnia", artist: "Love of Lesbian", ytId: "" },
        { title: "Pequeña Gran Revolución", artist: "Izal", ytId: "" },
        { title: "Copacabana", artist: "Izal", ytId: "" },
        { title: "Ayer", artist: "La Bien Querida", ytId: "" },
        { title: "Toro", artist: "El Columpio Asesino", ytId: "" },
        { title: "La Costa Azul", artist: "Sidonie", ytId: "" },
        { title: "La Gravedad", artist: "Viva Suecia", ytId: "" }
    ],
    "disney-familiar": [
        { title: "Libre Soy", artist: "Gisela", ytId: "" },
        { title: "No Se Habla de Bruno", artist: "Elenco de Encanto", ytId: "" },
        { title: "Recuérdame", artist: "Carlos Rivera", ytId: "" },
        { title: "Un Mundo Ideal", artist: "Aladdín", ytId: "" },
        { title: "Hakuna Matata", artist: "El Rey León", ytId: "" },
        { title: "Voy a Ser el Rey León", artist: "El Rey León", ytId: "" },
        { title: "Colores en el Viento", artist: "Pocahontas", ytId: "" },
        { title: "Bajo el Mar", artist: "La Sirenita", ytId: "" },
        { title: "Parte de Él", artist: "La Sirenita", ytId: "" },
        { title: "Qué Hay Más Allá", artist: "Vaiana", ytId: "" },
        { title: "De Nada", artist: "Dwayne Johnson", ytId: "" },
        { title: "Suéltalo", artist: "Frozen", ytId: "" },
        { title: "Mucho Más Allá", artist: "Frozen 2", ytId: "" },
        { title: "Hay un Amigo en Mí", artist: "Toy Story", ytId: "" },
        { title: "Busca Lo Más Vital", artist: "El Libro de la Selva", ytId: "" },
        { title: "Quiero Ser Como Tú", artist: "El Libro de la Selva", ytId: "" },
        { title: "Bella y Bestia Son", artist: "La Bella y la Bestia", ytId: "" },
        { title: "Breaking Free", artist: "High School Musical", ytId: "" },
        { title: "We're All in This Together", artist: "High School Musical", ytId: "" },
        { title: "Baby Shark", artist: "Pinkfong", ytId: "" },
        { title: "Into the Unknown", artist: "Idina Menzel", ytId: "" },
        { title: "Let It Go", artist: "Idina Menzel", ytId: "" },
        { title: "A Whole New World", artist: "Peabo Bryson & Regina Belle", ytId: "" },
        { title: "Circle of Life", artist: "Elton John", ytId: "" },
        { title: "Can You Feel the Love Tonight", artist: "Elton John", ytId: "" },
        { title: "You've Got a Friend in Me", artist: "Randy Newman", ytId: "" },
        { title: "Try Everything", artist: "Shakira", ytId: "" },
        { title: "Surface Pressure", artist: "Jessica Darrow", ytId: "" },
        { title: "Under the Sea", artist: "Samuel E. Wright", ytId: "" },
        { title: "How Far I'll Go", artist: "Auli'i Cravalho", ytId: "" }
    ],
    "karaoke-meme": [
        { title: "Aserejé", artist: "Las Ketchup", ytId: "" },
        { title: "Dragostea Din Tei", artist: "O-Zone", ytId: "" },
        { title: "Gangnam Style", artist: "PSY", ytId: "" },
        { title: "Ai Se Eu Te Pego", artist: "Michel Teló", ytId: "" },
        { title: "Opá, Yo Viazé un Corrá", artist: "El Koala", ytId: "" },
        { title: "Amo a Laura", artist: "Los Happiness", ytId: "" },
        { title: "El Baile del Gorila", artist: "Melody", ytId: "" },
        { title: "Antes Muerta Que Sencilla", artist: "María Isabel", ytId: "" },
        { title: "La Macarena", artist: "Los Del Río", ytId: "" },
        { title: "Barbie Girl", artist: "Aqua", ytId: "" },
        { title: "Cotton Eye Joe", artist: "Rednex", ytId: "" },
        { title: "The Ketchup Song", artist: "Las Ketchup", ytId: "" },
        { title: "Saturday Night", artist: "Whigfield", ytId: "" },
        { title: "Mambo No. 5", artist: "Lou Bega", ytId: "" },
        { title: "Who Let the Dogs Out", artist: "Baha Men", ytId: "" },
        { title: "Mundian To Bach Ke", artist: "Panjabi MC", ytId: "" },
        { title: "I'm Too Sexy", artist: "Right Said Fred", ytId: "" },
        { title: "Never Gonna Give You Up", artist: "Rick Astley", ytId: "" },
        { title: "Mi Carro", artist: "Manolo Escobar", ytId: "" },
        { title: "Borriquito", artist: "Peret", ytId: "" },
        { title: "La Bomba", artist: "King África", ytId: "" },
        { title: "El Gato Volador", artist: "El Chombo", ytId: "" },
        { title: "Chihuahua", artist: "DJ Bobo", ytId: "" },
        { title: "The Final Countdown", artist: "Europe", ytId: "" },
        { title: "It's Raining Men", artist: "The Weather Girls", ytId: "" },
        { title: "Livin' La Vida Loca", artist: "Ricky Martin", ytId: "" },
        { title: "La Copa de la Vida", artist: "Ricky Martin", ytId: "" },
        { title: "Boom Boom Boom Boom!!", artist: "Vengaboys", ytId: "" },
        { title: "We Like To Party!", artist: "Vengaboys", ytId: "" },
        { title: "Blue Monday", artist: "New Order", ytId: "" }
    ],
    "eurovision-ganadoras": [
        { title: "Waterloo", artist: "ABBA", ytId: "" },
        { title: "Hallelujah", artist: "Gali Atari & Milk and Honey", ytId: "" },
        { title: "What's Another Year", artist: "Johnny Logan", ytId: "" },
        { title: "Hold Me Now", artist: "Johnny Logan", ytId: "" },
        { title: "Ne Partez Pas Sans Moi", artist: "Céline Dion", ytId: "" },
        { title: "Insieme: 1992", artist: "Toto Cutugno", ytId: "" },
        { title: "Diva", artist: "Dana International", ytId: "" },
        { title: "Take Me to Your Heaven", artist: "Charlotte Nilsson", ytId: "" },
        { title: "Fly on the Wings of Love", artist: "Olsen Brothers", ytId: "" },
        { title: "Everybody", artist: "Tanel Padar, Dave Benton & 2XL", ytId: "" },
        { title: "Everyway That I Can", artist: "Sertab Erener", ytId: "" },
        { title: "Wild Dances", artist: "Ruslana", ytId: "" },
        { title: "My Number One", artist: "Helena Paparizou", ytId: "" },
        { title: "Hard Rock Hallelujah", artist: "Lordi", ytId: "" },
        { title: "Fairytale", artist: "Alexander Rybak", ytId: "" },
        { title: "Euphoria", artist: "Loreen", ytId: "" },
        { title: "Rise Like a Phoenix", artist: "Conchita Wurst", ytId: "" },
        { title: "Heroes", artist: "Måns Zelmerlöw", ytId: "" },
        { title: "Toy", artist: "Netta", ytId: "" },
        { title: "Arcade", artist: "Duncan Laurence", ytId: "" },
        { title: "Zitti e Buoni", artist: "Måneskin", ytId: "" },
        { title: "Stefania", artist: "Kalush Orchestra", ytId: "" },
        { title: "Tattoo", artist: "Loreen", ytId: "" },
        { title: "The Code", artist: "Nemo", ytId: "" },
        { title: "Puppet on a String", artist: "Sandie Shaw", ytId: "" },
        { title: "La La La", artist: "Massiel", ytId: "" },
        { title: "Vivo Cantando", artist: "Salomé", ytId: "" },
        { title: "Save Your Kisses for Me", artist: "Brotherhood of Man", ytId: "" },
        { title: "Making Your Mind Up", artist: "Bucks Fizz", ytId: "" },
        { title: "Ein Bisschen Frieden", artist: "Nicole", ytId: "" },
        { title: "Diggi-Loo Diggi-Ley", artist: "Herreys", ytId: "" },
        { title: "Nocturne", artist: "Secret Garden", ytId: "" },
        { title: "Love Shine a Light", artist: "Katrina and the Waves", ytId: "" }
    ],
    "benidorm-fest": [
        { title: "SloMo", artist: "Chanel", ytId: "" },
        { title: "Ay Mamá", artist: "Rigoberta Bandini", ytId: "" },
        { title: "Terra", artist: "Tanxugueiras", ytId: "" },
        { title: "Secreto de Agua", artist: "Blanca Paloma", ytId: "" },
        { title: "Calle de la Llorería", artist: "Rayden", ytId: "" },
        { title: "Raffaella", artist: "Varry Brava", ytId: "" },
        { title: "Eco", artist: "Xeinn", ytId: "" },
        { title: "Postureo", artist: "Azúcar Moreno", ytId: "" },
        { title: "Sigues en Mi Mente", artist: "Marta Sango", ytId: "" },
        { title: "Culpa", artist: "Javiera Mena", ytId: "" },
        { title: "Quién lo Diría", artist: "Gonzalo Hermida", ytId: "" },
        { title: "Mejores", artist: "Unique", ytId: "" },
        { title: "Make You Say", artist: "Sara Deop", ytId: "" },
        { title: "Quiero Arder", artist: "Agoney", ytId: "" },
        { title: "Desde Que Tú Estás", artist: "Alfred García", ytId: "" },
        { title: "Yo Quisiera", artist: "Alice Wonder", ytId: "" },
        { title: "Flamenco", artist: "Aritz Aren", ytId: "" },
        { title: "Eaea", artist: "Blanca Paloma", ytId: "" },
        { title: "Uff!", artist: "E'Femme", ytId: "" },
        { title: "La Lola", artist: "Famous", ytId: "" },
        { title: "Mi Familia", artist: "Fusa Nocta", ytId: "" },
        { title: "Inviernos en Marte", artist: "José Otero", ytId: "" },
        { title: "Quiero y Duelo", artist: "Karmento", ytId: "" },
        { title: "Arcadia", artist: "Megara", ytId: "" },
        { title: "No Nos Moverán", artist: "Meler", ytId: "" },
        { title: "Tracción", artist: "Rakky Ripper", ytId: "" },
        { title: "Aire", artist: "Sharonne", ytId: "" },
        { title: "Que Esclati Tot", artist: "Siderland", ytId: "" },
        { title: "Tuki", artist: "Sofía Martín", ytId: "" },
        { title: "Sayonara", artist: "Twin Melody", ytId: "" },
        { title: "Nochentera", artist: "Vicco", ytId: "" },
        { title: "Zorra", artist: "Nebulossa", ytId: "" },
        { title: "Remitente", artist: "María Peláe", ytId: "" },
        { title: "Here to Stay", artist: "Sofia Coll", ytId: "" },
        { title: "Bla Bla Bla", artist: "Miss Caffeina", ytId: "" },
        { title: "Sé Quién Soy", artist: "Angy Fernández", ytId: "" },
        { title: "Dos Extraños", artist: "St. Pedro", ytId: "" },
        { title: "Caliente", artist: "Jorge González", ytId: "" },
        { title: "Prisionero", artist: "Quique Niza", ytId: "" },
        { title: "Astronauta", artist: "Lérica", ytId: "" },
        { title: "Me Vas a Ver", artist: "Mantra", ytId: "" },
        { title: "Brillos Platino", artist: "Almácor", ytId: "" },
        { title: "El Temps", artist: "Roger Padrós", ytId: "" },
        { title: "Beso en la Mañana", artist: "Dellacruz", ytId: "" },
        { title: "Amor de Verano", artist: "Marlena", ytId: "" },
        { title: "Te Echo de -", artist: "Noan", ytId: "" },
        { title: "No Se Me Olvida", artist: "Yoly Saa", ytId: "" },
        { title: "Bésame", artist: "Carla Frigo", ytId: "" },
        { title: "La Casa", artist: "Celine Van Heel", ytId: "" },
        { title: "Mala Femenista", artist: "Chica Sobresalto", ytId: "" },
        { title: "UH NANA", artist: "Daniela Blasco", ytId: "" },
        { title: "AMOR BARATO", artist: "David Afonso", ytId: "" },
        { title: "LA PENA", artist: "DeTeresa", ytId: "" },
        { title: "NO LO VES", artist: "Henry Semler", ytId: "" },
        { title: "V.I.P.", artist: "J Kbello", ytId: "" },
        { title: "Me Gustas Tú", artist: "K!NGDOM", ytId: "" },
        { title: "LOCA XTI", artist: "Kuve", ytId: "" },
        { title: "Hartita de Llorar", artist: "Lachispa", ytId: "" },
        { title: "Te Escribo en el Cielo", artist: "Lucas Bun", ytId: "" },
        { title: "Raggio di Sole", artist: "Mawot", ytId: "" },
        { title: "I'M A QUEEN", artist: "Mel Ömana", ytId: "" },
        { title: "ESA DIVA", artist: "Melody", ytId: "" },
        { title: "REINAS", artist: "Sonia y Selena", ytId: "" },
        { title: "Turista", artist: "ASHA", ytId: "" },
        { title: "Dopamina", artist: "Atyat", ytId: "" },
        { title: "Bailándote", artist: "Dani J", ytId: "" },
        { title: "Rakata", artist: "Dora & Marlon Collins", ytId: "" },
        { title: "SOBRAN GILIPO**AS", artist: "Funambulista", ytId: "" },
        { title: "Velita", artist: "Greg Taro", ytId: "" },
        { title: "¿Qué vas a hacer?", artist: "Izan Llunas", ytId: "" },
        { title: "Los Ojos No Mienten", artist: "Kenneth", ytId: "" },
        { title: "El Amor Te Da Miedo", artist: "KITAI", ytId: "" },
        { title: "No Volveré A Llorar", artist: "KU Minerva", ytId: "" },
        { title: "Bomba de Amor", artist: "Luna Ki", ytId: "" },
        { title: "Las Damas y el Vagabundo", artist: "María León ft. Julia Medina", ytId: "" },
        { title: "Tócame", artist: "MAYO", ytId: "" },
        { title: "Despierto Amándote", artist: "Miranda! & bailamamá", ytId: "" },
        { title: "Mi Mitad", artist: "Mikel Herzog Jr.", ytId: "" },
        { title: "Mataora", artist: "Rosalinda Galán", ytId: "" },
        { title: "Tú No Me Quieres", artist: "The Quinquis", ytId: "" },
        { title: "T AMARÉ", artist: "Tony Grox & LUCYCALYS", ytId: "" }
    ],
    "latinos-clasicos": [
        { title: "Vivir Mi Vida", artist: "Marc Anthony", ytId: "" },
        { title: "La Bicicleta", artist: "Carlos Vives & Shakira", ytId: "" },
        { title: "Propuesta Indecente", artist: "Romeo Santos", ytId: "" },
        { title: "Darte un Beso", artist: "Prince Royce", ytId: "" },
        { title: "Bachata Rosa", artist: "Juan Luis Guerra", ytId: "" },
        { title: "La Carretera", artist: "Julio Iglesias", ytId: "" },
        { title: "Quimbara", artist: "Celia Cruz", ytId: "" },
        { title: "Oye Cómo Va", artist: "Santana", ytId: "" },
        { title: "María", artist: "Ricky Martin", ytId: "" },
        { title: "Livin' La Vida Loca", artist: "Ricky Martin", ytId: "" },
        { title: "Suavemente", artist: "Elvis Crespo", ytId: "" },
        { title: "La Camisa Negra", artist: "Juanes", ytId: "" },
        { title: "A Puro Dolor", artist: "Son By Four", ytId: "" },
        { title: "Color Esperanza", artist: "Diego Torres", ytId: "" },
        { title: "Cali Pachanguero", artist: "Grupo Niche", ytId: "" },
        { title: "Periódico de Ayer", artist: "Héctor Lavoe", ytId: "" },
        { title: "El Cantante", artist: "Héctor Lavoe", ytId: "" },
        { title: "Ven Devórame Otra Vez", artist: "Lalo Rodríguez", ytId: "" },
        { title: "Déjame Entrar", artist: "Carlos Vives", ytId: "" },
        { title: "Robarte un Beso", artist: "Carlos Vives & Sebastián Yatra", ytId: "" },
        { title: "NASA", artist: "Camilo & Shakira", ytId: "" },
        { title: "Tutu", artist: "Camilo & Pedro Capó", ytId: "" },
        { title: "Ay Vamos", artist: "J Balvin", ytId: "" },
        { title: "No Se Deje", artist: "Grupo Firme", ytId: "" },
        { title: "Me Niego", artist: "Reik ft. Ozuna & Wisin", ytId: "" },
        { title: "Travesuras", artist: "Nicky Jam", ytId: "" },
        { title: "Te Regalo", artist: "Luis Fonsi", ytId: "" },
        { title: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee", ytId: "" },
        { title: "Felices los 4", artist: "Maluma", ytId: "" },
        { title: "Baila Conmigo", artist: "Selena Gomez & Rauw Alejandro", ytId: "" }
    ],
    "anos-80": [
        { title: "Take On Me", artist: "a-ha", ytId: "djV11Xbc914" },
        { title: "Every Breath You Take", artist: "The Police", ytId: "" },
        { title: "Billie Jean", artist: "Michael Jackson", ytId: "Zi_XLOBDo_Y" },
        { title: "Like a Virgin", artist: "Madonna", ytId: "" },
        { title: "Sweet Dreams", artist: "Eurythmics", ytId: "" },
        { title: "Don't You (Forget About Me)", artist: "Simple Minds", ytId: "" },
        { title: "Under Pressure", artist: "Queen & David Bowie", ytId: "" },
        { title: "99 Luftballons", artist: "Nena", ytId: "" },
        { title: "Tainted Love", artist: "Soft Cell", ytId: "" },
        { title: "Girls Just Want To Have Fun", artist: "Cyndi Lauper", ytId: "" },
        { title: "Living on a Prayer", artist: "Bon Jovi", ytId: "" },
        { title: "Wake Me Up Before You Go-Go", artist: "Wham!", ytId: "" },
        { title: "Footloose", artist: "Kenny Loggins", ytId: "" },
        { title: "Purple Rain", artist: "Prince", ytId: "" },
        { title: "Jump", artist: "Van Halen", ytId: "" },
        { title: "I Wanna Dance with Somebody", artist: "Whitney Houston", ytId: "" },
        { title: "Never Gonna Give You Up", artist: "Rick Astley", ytId: "" },
        { title: "Axel F", artist: "Harold Faltermeyer", ytId: "" },
        { title: "The Final Countdown", artist: "Europe", ytId: "" },
        { title: "Don't Stop Me Now", artist: "Queen", ytId: "" },
        { title: "Blue Monday", artist: "New Order", ytId: "" },
        { title: "Love Will Tear Us Apart", artist: "Joy Division", ytId: "" },
        { title: "Personal Jesus", artist: "Depeche Mode", ytId: "" },
        { title: "Just Like Heaven", artist: "The Cure", ytId: "" },
        { title: "With or Without You", artist: "U2", ytId: "" },
        { title: "Welcome to the Jungle", artist: "Guns N' Roses", ytId: "" },
        { title: "Paranoid", artist: "Black Sabbath", ytId: "" },
        { title: "Back in Black", artist: "AC/DC", ytId: "" },
        { title: "Sweet Child O' Mine", artist: "Guns N' Roses", ytId: "1w7OgIMMRc4" },
        { title: "Africa", artist: "Toto", ytId: "" }
    ],
    "bachata-salsa": [
        { title: "Propuesta Indecente", artist: "Romeo Santos", ytId: "" },
        { title: "Darte un Beso", artist: "Prince Royce", ytId: "" },
        { title: "Bachata Rosa", artist: "Juan Luis Guerra", ytId: "" },
        { title: "Eres Mía", artist: "Romeo Santos", ytId: "" },
        { title: "Deja Vu", artist: "Prince Royce & Shakira", ytId: "" },
        { title: "La Carretera", artist: "Julio Iglesias", ytId: "" },
        { title: "Quimbara", artist: "Celia Cruz", ytId: "" },
        { title: "Oye Cómo Va", artist: "Santana", ytId: "" },
        { title: "Cali Pachanguero", artist: "Grupo Niche", ytId: "" },
        { title: "Periódico de Ayer", artist: "Héctor Lavoe", ytId: "" },
        { title: "El Cantante", artist: "Héctor Lavoe", ytId: "" },
        { title: "Ven Devórame Otra Vez", artist: "Lalo Rodríguez", ytId: "" },
        { title: "A Puro Dolor", artist: "Son By Four", ytId: "" },
        { title: "Mi Gente", artist: "Héctor Lavoe", ytId: "" },
        { title: "La Vida Es Un Carnaval", artist: "Celia Cruz", ytId: "" },
        { title: "Suavemente", artist: "Elvis Crespo", ytId: "" },
        { title: "Conga", artist: "Miami Sound Machine", ytId: "" },
        { title: "La Bicicleta", artist: "Carlos Vives & Shakira", ytId: "" },
        { title: "Vivir Mi Vida", artist: "Marc Anthony", ytId: "" },
        { title: "Yo Viviré", artist: "Celia Cruz", ytId: "" },
        { title: "Yamulemau", artist: "Joe Arroyo", ytId: "" },
        { title: "Rebelión", artist: "Joe Arroyo", ytId: "" },
        { title: "Si No Te Hubieras Ido", artist: "Marco Antonio Solís", ytId: "" },
        { title: "Nadie Como Tú", artist: "La Makina", ytId: "" },
        { title: "Tu Amor Me Hace Bien", artist: "Oscar D'León", ytId: "" },
        { title: "Llorarás", artist: "Oscar D'León", ytId: "" },
        { title: "Detalles", artist: "Roberto Carlos", ytId: "" },
        { title: "Soy Todo", artist: "Los Adolescentes", ytId: "" },
        { title: "Nuestro Sueño", artist: "Los Adolescentes", ytId: "" },
        { title: "Baila Morena", artist: "Héctor & Tito", ytId: "" }
    ],
    "flamenco-copla": [
        { title: "La Llorona", artist: "Chavela Vargas", ytId: "" },
        { title: "Ojos Verdes", artist: "Camarón de la Isla", ytId: "" },
        { title: "Volando Voy", artist: "Camarón de la Isla", ytId: "" },
        { title: "Como el Agua", artist: "Camarón de la Isla", ytId: "" },
        { title: "Volver", artist: "Camarón de la Isla", ytId: "" },
        { title: "Bulería", artist: "Fosforito", ytId: "" },
        { title: "Señora", artist: "Rosal", ytId: "" },
        { title: "Una Noche de Amor", artist: "Rocío Jurado", ytId: "" },
        { title: "Como la Luna", artist: "Rocío Jurado", ytId: "" },
        { title: "Ese Lunar", artist: "Niña de la Peña", ytId: "" },
        { title: "Tatuaje", artist: "La Argentinita", ytId: "" },
        { title: "Romance de la Reina Mercedes", artist: "Pastora Imperio", ytId: "" },
        { title: "Tirios y Troyanos", artist: "Antonio Mairena", ytId: "" },
        { title: "La Zarzamora", artist: "Fosforito", ytId: "" },
        { title: "Candil", artist: "Pepe de la Matrona", ytId: "" },
        { title: "Y nos dieron las diez", artist: "Pepe de la Matrona", ytId: "" },
        { title: "Ojos Verdes", artist: "Antonio Chacón", ytId: "" },
        { title: "La Niña de Fuego", artist: "Camarón de la Isla", ytId: "" },
        { title: "Santamaria", artist: "Camarón de la Isla", ytId: "" },
        { title: "Tiene las Estrellas", artist: "Vicente Soto", ytId: "" },
        { title: "Por Tangos de la Buhaira", artist: "Perrate", ytId: "" },
        { title: "Yerma", artist: "Enrique Morente", ytId: "" },
        { title: "Omega", artist: "Enrique Morente", ytId: "" },
        { title: "La Leyenda del Hada y el Mago", artist: "El Camarón de la Isla", ytId: "" },
        { title: "Tu Mirá", artist: "Rosalía", ytId: "" },
        { title: "De Plata", artist: "Rosalía", ytId: "" },
        { title: "Bagdad", artist: "Rosalía", ytId: "" },
        { title: "Malamente", artist: "Rosalía", ytId: "" },
        { title: "La Bichatería", artist: "C. Tangana", ytId: "" },
        { title: "Demasiadas Mujeres", artist: "C. Tangana", ytId: "" }
    ],
    "mega-fiesta": [
        { title: "Tusa", artist: "Karol G & Nicki Minaj", ytId: "" },
        { title: "Mi Gente", artist: "J Balvin", ytId: "" },
        { title: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee", ytId: "" },
        { title: "Bailando", artist: "Enrique Iglesias", ytId: "" },
        { title: "Waka Waka", artist: "Shakira", ytId: "" },
        { title: "La Bicicleta", artist: "Carlos Vives & Shakira", ytId: "" },
        { title: "Vivir Mi Vida", artist: "Marc Anthony", ytId: "" },
        { title: "Danza Kuduro", artist: "Don Omar", ytId: "" },
        { title: "Gasolina", artist: "Daddy Yankee", ytId: "" },
        { title: "Con Calma", artist: "Daddy Yankee", ytId: "" },
        { title: "Felices los 4", artist: "Maluma", ytId: "" },
        { title: "Hawái", artist: "Maluma", ytId: "" },
        { title: "Bichota", artist: "Karol G", ytId: "" },
        { title: "Provenza", artist: "Karol G", ytId: "" },
        { title: "Despechá", artist: "Rosalía", ytId: "" },
        { title: "Macarena", artist: "Los Del Río", ytId: "" },
        { title: "Livin' La Vida Loca", artist: "Ricky Martin", ytId: "" },
        { title: "La Copa de la Vida", artist: "Ricky Martin", ytId: "" },
        { title: "Suavemente", artist: "Elvis Crespo", ytId: "" },
        { title: "Oye Cómo Va", artist: "Santana", ytId: "" },
        { title: "Conga", artist: "Miami Sound Machine", ytId: "" },
        { title: "La Gozadera", artist: "Gente de Zona ft. Marc Anthony", ytId: "" },
        { title: "Baila Morena", artist: "Héctor & Tito", ytId: "" },
        { title: "Pobre Diabla", artist: "Don Omar", ytId: "" },
        { title: "Salió El Sol", artist: "Don Omar", ytId: "" },
        { title: "Dile", artist: "Don Omar", ytId: "" },
        { title: "El Perdón", artist: "Nicky Jam & Enrique Iglesias", ytId: "" },
        { title: "Chantaje", artist: "Shakira ft. Maluma", ytId: "" },
        { title: "Clandestino", artist: "Shakira & Maluma", ytId: "" },
        { title: "La Tortura", artist: "Shakira ft. Alejandro Sanz", ytId: "" }
    ],
    "disco-clasico": [
        { title: "Billie Jean", artist: "Michael Jackson", ytId: "Zi_XLOBDo_Y" },
        { title: "Thriller", artist: "Michael Jackson", ytId: "sOnqjkJTMaA" },
        { title: "Beat It", artist: "Michael Jackson", ytId: "" },
        { title: "Smooth Criminal", artist: "Michael Jackson", ytId: "" },
        { title: "Don't Stop 'Til You Get Enough", artist: "Michael Jackson", ytId: "" },
        { title: "Rock with You", artist: "Michael Jackson", ytId: "" },
        { title: "Stayin' Alive", artist: "Bee Gees", ytId: "I_izvAbhExY" },
        { title: "Night Fever", artist: "Bee Gees", ytId: "" },
        { title: "How Deep Is Your Love", artist: "Bee Gees", ytId: "" },
        { title: "More Than a Woman", artist: "Bee Gees", ytId: "" },
        { title: "Rivers of Babylon", artist: "Boney M.", ytId: "" },
        { title: "Rasputin", artist: "Boney M.", ytId: "" },
        { title: "Daddy Cool", artist: "Boney M.", ytId: "" },
        { title: "Sunny", artist: "Boney M.", ytId: "" },
        { title: "Mary's Boy Child", artist: "Boney M.", ytId: "" },
        { title: "YMCA", artist: "Village People", ytId: "" },
        { title: "Macho Man", artist: "Village People", ytId: "" },
        { title: "In the Navy", artist: "Village People", ytId: "" },
        { title: "Le Freak", artist: "Chic", ytId: "" },
        { title: "Good Times", artist: "Chic", ytId: "" },
        { title: "I Will Survive", artist: "Gloria Gaynor", ytId: "" },
        { title: "I Feel Love", artist: "Donna Summer", ytId: "" },
        { title: "Hot Stuff", artist: "Donna Summer", ytId: "" },
        { title: "Last Dance", artist: "Donna Summer", ytId: "" },
        { title: "September", artist: "Earth, Wind & Fire", ytId: "" },
        { title: "Boogie Wonderland", artist: "Earth, Wind & Fire", ytId: "" },
        { title: "That's the Way (I Like It)", artist: "KC and the Sunshine Band", ytId: "" },
        { title: "Get Down Tonight", artist: "KC and the Sunshine Band", ytId: "" },
        { title: "Funky Town", artist: "Lipps Inc.", ytId: "" },
        { title: "Car Wash", artist: "Rose Royce", ytId: "" }
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
const AUTOPLAY_NEXT_DELAY_MS = 250;
let autoplayEnabled = false;
let songGeneration = 0; // Contador para evitar callbacks de canciones anteriores
let autoplayTimeout = null;

// PeerJS P2P y Lector QR
let peer = null;
let conn = null;
let hostConnections = [];
let roomId = null;
let roomToken = null;
let isGuestUser = false;
let gameSessionId = null;
let guestReadyInterval = null;
let guestLastSessionId = null;
let guestRegisteredCardIds = new Set();
let guestPendingCard = null;
let guestCardRegisterInterval = null;
let hostApiSyncInterval = null;
let hostApiCardsInterval = null;
let guestApiPollInterval = null;
let guestCardGridSize = null;
let guestLastStateTimestamp = 0; // Timestamp del último estado aplicado (evita overwrites con datos antiguos)

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

    // Desbloqueo de audio para iOS/iPadOS
    // Safari requiere que la primera reproducción venga de un gesto del usuario.
    // iPad Safari es más restrictivo — necesitamos AudioContext + Audio element
    let audioUnlocked = false;
    function unlockAudio() {
        if (audioUnlocked) return;
        audioUnlocked = true;
        try {
            // Método 1: AudioContext (funciona mejor en iPad)
            if (audioCtx && audioCtx.state === "suspended") {
                audioCtx.resume().then(() => {
                    console.log("AudioContext desbloqueado");
                }).catch(() => {});
            }

            // Método 2: Audio element con volumen bajo (no cero)
            const silent = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=");
            silent.volume = 0.01;
            silent.play().then(() => {
                console.log("Audio element desbloqueado");
                // Subir volumen tras play exitoso
                silent.volume = 1;
            }).catch(() => {});

            // Método 3: Crear buffer en AudioContext y reproducir (más fiable en iPad)
            if (audioCtx) {
                const buffer = audioCtx.createBuffer(1, 1, 22050);
                const source = audioCtx.createBufferSource();
                source.buffer = buffer;
                source.connect(audioCtx.destination);
                source.start(0);
                console.log("AudioContext buffer desbloqueado");
            }
        } catch (e) {
            console.warn("Error en unlockAudio:", e);
        }
        // Limpiar listeners tras el primer toque
        document.removeEventListener("touchstart", unlockAudio);
        document.removeEventListener("click", unlockAudio);
    }
    document.addEventListener("touchstart", unlockAudio, { once: true });
    document.addEventListener("click", unlockAudio, { once: true });

    // Detección de sala P2P para invitados
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('room')) {
        isGuestUser = true;
        document.body.classList.add("guest-mode");
        const targetRoom = urlParams.get('room');
        roomToken = urlParams.get('token') || "";
        
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
    } else if (source === "playlist-text") {
        document.getElementById("source-playlist-config").classList.remove("hidden");
    } else if (source === "external") {
        document.getElementById("source-external-config").classList.remove("hidden");
    }
}

function cleanPlaylistField(value) {
    return String(value || "")
        .replace(/^["']|["']$/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function looksLikePlaylistHeader(line) {
    const tabNormalized = line.toLowerCase().trim();
    const normalized = line.toLowerCase().replace(/\s+/g, " ").trim();
    if (tabNormalized === "artist\ttitle" || tabNormalized === "title\tartist") {
        return true;
    }
    return [
        "artist - title",
        "artista - canción",
        "artista - cancion",
        "title, artist",
        "artist, title",
        "canción, artista",
        "cancion, artista",
        "artista, canción",
        "artista, cancion"
    ].includes(normalized);
}

function getPlaylistHeaderOrder(line) {
    const tabNormalized = line.toLowerCase().trim();
    const normalized = line.toLowerCase().replace(/\s+/g, " ").trim();
    if (tabNormalized === "title\tartist" || ["title, artist", "canción, artista", "cancion, artista"].includes(normalized)) {
        return "title-first";
    }
    if (looksLikePlaylistHeader(line)) {
        return "artist-first";
    }
    return "artist-first";
}

function parseSongLine(line, order = "artist-first") {
    let normalizedLine = line
        .replace(/^\s*\d+[\).\-\s]+/, "")
        .trim();

    if (!normalizedLine || /^https?:\/\//i.test(normalizedLine)) {
        return null;
    }

    const tabParts = normalizedLine.split("\t").map(cleanPlaylistField).filter(Boolean);
    if (tabParts.length >= 2) {
        return order === "title-first"
            ? { title: tabParts[0], artist: tabParts[1] }
            : { artist: tabParts[0], title: tabParts[1] };
    }

    normalizedLine = normalizedLine.replace(/\s+/g, " ");
    const separators = [" - ", " – ", " — ", " | "];
    const separator = separators.find(item => normalizedLine.includes(item));
    if (separator) {
        const parts = normalizedLine.split(separator).map(cleanPlaylistField).filter(Boolean);
        if (parts.length >= 2) {
            return { artist: parts[0], title: parts.slice(1).join(separator.trim()) };
        }
    }

    const csvParts = normalizedLine.split(",").map(cleanPlaylistField).filter(Boolean);
    if (csvParts.length >= 2) {
        return order === "title-first"
            ? { title: csvParts[0], artist: csvParts[1] }
            : { artist: csvParts[0], title: csvParts[1] };
    }

    return { artist: "Desconocido", title: cleanPlaylistField(normalizedLine) };
}

function parsePlaylistText(text) {
    const seen = new Set();
    let columnOrder = "artist-first";

    return String(text || "")
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => {
            if (!line) return false;
            if (looksLikePlaylistHeader(line)) {
                columnOrder = getPlaylistHeaderOrder(line);
                return false;
            }
            return true;
        })
        .map(line => parseSongLine(line, columnOrder))
        .filter(Boolean)
        .filter(song => {
            const title = cleanPlaylistField(song.title);
            const artist = cleanPlaylistField(song.artist) || "Desconocido";
            if (!title) return false;
            song.title = title;
            song.artist = artist;

            const key = `${song.artist.toLowerCase()}::${song.title.toLowerCase()}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
}

function normalizeSongIdentity(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function ensureSongIds(songs) {
    return songs.map((song, index) => ({
        ...song,
        id: song.id || `song-${index}`,
        songIndex: Number.isInteger(song.songIndex) ? song.songIndex : index,
        titleKey: song.titleKey || normalizeSongIdentity(song.title),
        artistKey: song.artistKey || normalizeSongIdentity(song.artist)
    }));
}

function getSongIdentityKeys(song) {
    if (!song) return [];
    const keys = [];
    if (song.id) keys.push(`id:${song.id}`);
    keys.push(`text:${normalizeSongIdentity(song.artist)}::${normalizeSongIdentity(song.title)}`);
    return keys.filter(Boolean);
}

function escapeHtml(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
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
    const validAudioFiles = Array.from(files).filter(file => file.type.startsWith('audio/'));
    
    // Evitar duplicados por nombre de archivo
    const existingNames = new Set(localFiles.map(f => f.file.name));
    
    validAudioFiles.forEach(file => {
        if (existingNames.has(file.name)) return;
        existingNames.add(file.name);
        
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
    } else if (source === "playlist-text") {
        const text = document.getElementById("playlist-import-textarea").value;
        gameSongs = parsePlaylistText(text);

        if (gameSongs.length < 10) {
            alert("Pega al menos 10 canciones válidas de Spotify, Apple Music o iTunes para poder jugar.");
            return;
        }
    }

    if (gameSongs.length === 0) {
        alert("No se han cargado canciones válidas.");
        return;
    }

    gameSongs = ensureSongIds(gameSongs);

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
                <div class="grid-song-title">${escapeHtml(song.title)}</div>
                <div class="grid-song-artist">${escapeHtml(song.artist)}</div>
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

    // Reiniciar sincronizacion con la API (puede haber sido detenida por resetGame)
    // Tambien publica el estado inicial de la sala
    startHostApiSync();

    // Broadcast con reintentos para sincronizar invitados ya conectados o recien abiertos.
    broadcastGameStateWithRetry();

    playSound('draw');
}

function drawNextSong() {
    // Detener reproducción actual
    stopAudio();

    if (autoplayTimeout) {
        clearTimeout(autoplayTimeout);
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
            <div class="history-title">${(isCurrent && !isRevealed) ? "???" : escapeHtml(song.title)}</div>
            <div class="history-artist">${(isCurrent && !isRevealed) ? "Identifícala" : escapeHtml(song.artist)}</div>
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
        .replace(/\(feat[^)]*\)/gi, '')
        .replace(/\(ft[^)]*\)/gi, '')
        .replace(/\b(ft|ft\.|feat|feat\.)\b.*$/gi, '')
        .replace(/&/g, ' ')
        .replace(/:/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function uniqSearchQueries(queries) {
    const seen = new Set();
    return queries
        .map(query => query.replace(/\s+/g, " ").trim())
        .filter(query => {
            const key = query.toLowerCase();
            if (!query || seen.has(key)) return false;
            seen.add(key);
            return true;
        });
}

function fetchItunesJsonp(query) {
    return new Promise((resolve) => {
        const callbackName = 'itunesCallback_' + Math.round(100000 * Math.random());
        const encodedQuery = encodeURIComponent(query);
        const url = `https://itunes.apple.com/search?term=${encodedQuery}&country=ES&limit=5&entity=song&callback=${callbackName}`;
        
        const timeoutId = setTimeout(() => {
            console.warn("iTunes API search timeout for:", query);
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
            
            const result = (data.results || []).find(item => item.previewUrl);
            if (result) {
                resolve(result.previewUrl);
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

async function fetchItunesPreview(artist, title) {
    const cleanArtist = cleanSearchTerm(artist);
    const cleanTitle = cleanSearchTerm(title);
    const looseTitle = cleanSearchTerm(String(title || "").replace(/\(.*?\)/g, ""));
    const firstArtist = cleanSearchTerm(String(artist || "").split(/,|&| y | and /i)[0]);
    const queries = uniqSearchQueries([
        `${cleanArtist} ${cleanTitle}`,
        `${firstArtist} ${cleanTitle}`,
        `${cleanTitle} ${cleanArtist}`,
        cleanTitle,
        looseTitle
    ]);

    for (const query of queries) {
        const previewUrl = await fetchItunesJsonp(query);
        if (previewUrl) {
            return previewUrl;
        }
    }

    return null;
}

async function playSongAudio(song) {
    const source = document.getElementById("music-source-select").value;
    const currentGeneration = ++songGeneration;
    
    playbackTimeLeft = PLAYBACK_MAX_TIME;
    document.getElementById("timer-bar").style.width = "100%";
    
    // Disco de vinilo a girar
    const vinyl = document.getElementById("vinyl-disk");
    vinyl.classList.add("playing");
    
    document.getElementById("btn-play-pause").disabled = false;
    togglePlayIcon(true);

    // Función para reproducir con retry en iOS
    // iPad Safari bloquea reproducción cross-origin; fetch → blob → ObjectURL es más fiable
    let currentBlobUrl = null;
    function attemptPlay(url, statusLabel, onFail) {
        console.log("[Audio] attemptPlay:", url);
        initVisualizer();

        // Limpiar blob URL anterior
        if (currentBlobUrl) {
            URL.revokeObjectURL(currentBlobUrl);
            currentBlobUrl = null;
        }

        function doPlay(playUrl) {
            if (currentGeneration !== songGeneration) return;
            console.log("[Audio] doPlay - url:", playUrl);
            audioPlayerElement.src = playUrl;
            audioPlayerElement.load();
            audioPlayerElement.play()
                .then(() => {
                    console.log("[Audio] play OK");
                    if (currentGeneration !== songGeneration) return;
                    startTimer();
                    updateAudioStatus(statusLabel, "success");
                })
                .catch(err => {
                    console.error("[Audio] play error:", err.name, err.message);
                    if (currentGeneration !== songGeneration) return;
                    if (err.name === "NotAllowedError") {
                        updateAudioStatus("Toca para activar audio", "loading");
                        const retryHandler = () => {
                            console.log("[Audio] retry tras tap");
                            audioPlayerElement.play().then(() => {
                                console.log("[Audio] retry OK");
                                if (currentGeneration !== songGeneration) return;
                                startTimer();
                                updateAudioStatus(statusLabel, "success");
                            }).catch(() => onFail());
                            document.removeEventListener("click", retryHandler);
                            document.removeEventListener("touchstart", retryHandler);
                        };
                        document.addEventListener("click", retryHandler, { once: true });
                        document.addEventListener("touchstart", retryHandler, { once: true });
                    } else {
                        onFail();
                    }
                });
        }

        // Estrategia 1: fetch como blob (más fiable en iPad)
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error("fetch failed");
                return res.blob();
            })
            .then(blob => {
                if (currentGeneration !== songGeneration) return;
                currentBlobUrl = URL.createObjectURL(blob);
                console.log("[Audio] blob URL created");
                doPlay(currentBlobUrl);
            })
            .catch(fetchErr => {
                console.warn("[Audio] fetch blob failed, trying direct URL:", fetchErr);
                if (currentGeneration !== songGeneration) return;
                // Fallback: URL directa
                doPlay(url);
            });
    }

    if (source !== "local") {
        updateAudioStatus("Buscando en iTunes...", "loading");
        console.log(`Buscando preview de iTunes para: ${song.artist} - ${song.title}`);
        const previewUrl = await fetchItunesPreview(song.artist, song.title);
        
        // Si la generación cambió, esta canción ya no es válida
        if (currentGeneration !== songGeneration) return;
        
        if (previewUrl) {
            updateAudioStatus("Cargando audio...", "loading");
            attemptPlay(previewUrl, "Sonando (iTunes Preview)", () => {
                updateAudioStatus("Error de reproducción", "error");
                handleAudioError();
            });
        } else {
            console.warn("No se encontró preview en iTunes para:", song.title);
            updateAudioStatus("No disponible en iTunes", "error");
            handleAudioError();
        }
    } else if (source === "local" && song.url) {
        updateAudioStatus("Cargando MP3 local...", "loading");
        attemptPlay(song.url, "Sonando (Archivo Local)", () => {
            console.error("Error en reproducción local");
            updateAudioStatus("Error de archivo local", "error");
            handleAudioError();
        });
    } else {
        updateAudioStatus("Modo sin audio", "idle");
        startTimer();
    }
}

function stopAudio() {
    stopTimer();
    
    // Detener ecualizador visual
    if (visualizerAnimationId) {
        cancelAnimationFrame(visualizerAnimationId);
        visualizerAnimationId = null;
    }
    
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
    const isPaused = audioPlayerElement ? audioPlayerElement.paused : true;
    
    if (!isPaused) {
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

        // Reanudar AudioContext en iOS si está suspendido
        if (audioCtx && audioCtx.state === "suspended") {
            audioCtx.resume();
        }

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
        clearTimeout(autoplayTimeout);
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
                updateAudioStatus("Siguiente canción...", "loading");
                autoplayTimeout = setTimeout(() => {
                    autoplayTimeout = null;
                    drawNextSong();
                }, AUTOPLAY_NEXT_DELAY_MS);
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
        
        // NO cerrar conexiones P2P: los invitados siguen conectados
        // y receberan automaticamente la nueva partida cuando se inicie.
        
        // Detener intervalos de sincronizacion con la API
        stopHostApiSync();
        
        document.getElementById("setup-controls").classList.remove("hidden");
        document.getElementById("game-controls").classList.add("hidden");
        document.getElementById("board-idle-view").classList.remove("hidden");
        document.getElementById("board-active-view").classList.add("hidden");
        document.getElementById("game-status-badge").textContent = "Configuración";
        document.getElementById("game-status-badge").style.background = "rgba(255,255,255,0.08)";
        
        // Resetear rejillas y variables
        gameSongs = [];
        drawOrder = [];
        playedSongs = [];
        currentIndex = -1;
        generatedCards = [];
        gameSessionId = null;
        autoplayEnabled = false;
        if (autoplayTimeout) {
            clearTimeout(autoplayTimeout);
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
    const sizeSelect = isGuestUser && guestCardGridSize
        ? guestCardGridSize
        : document.getElementById("card-grid-size").value;
    
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
        if (isGuestUser) {
            cardEl.classList.add("mobile-bingo-card");
        }
        cardEl.id = `card-${cardId}`;
        
        let cellsHTML = "";
        cardSongs.forEach((song, idx) => {
            cellsHTML += `
                <div class="card-cell" onclick="toggleCellMark(this)">
                    <div class="cell-song-title">${escapeHtml(song.title)}</div>
                    <div class="cell-song-artist">${escapeHtml(song.artist)}</div>
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
                    <div class="print-cell-title">${escapeHtml(song.title)}</div>
                    <div class="print-cell-artist">${escapeHtml(song.artist)}</div>
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

    // Contar canciones del cartón que efectivamente han sonado
    let hitsCount = 0;
    const songVerificationList = [];
    const playedSongKeys = new Set(
        playedSongs
            .flatMap(idx => getSongIdentityKeys(gameSongs[idx]))
    );

    card.songs.forEach(song => {
        const hasPlayed = getSongIdentityKeys(song).some(key => playedSongKeys.has(key));

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
    // Una línea puede ser: fila, columna o diagonal
    const dim = Math.sqrt(card.gridSize); // 3, 4 o 5
    let hasLine = false;

    // Verificar filas
    for (let r = 0; r < dim; r++) {
        let rowPlayedCount = 0;
        for (let c = 0; c < dim; c++) {
            if (songVerificationList[r * dim + c].hasPlayed) {
                rowPlayedCount++;
            }
        }
        if (rowPlayedCount === dim) { hasLine = true; break; }
    }

    // Verificar columnas
    if (!hasLine) {
        for (let c = 0; c < dim; c++) {
            let colPlayedCount = 0;
            for (let r = 0; r < dim; r++) {
                if (songVerificationList[r * dim + c].hasPlayed) {
                    colPlayedCount++;
                }
            }
            if (colPlayedCount === dim) { hasLine = true; break; }
        }
    }

    // Verificar diagonales (solo para cuadrículas cuadradas)
    if (!hasLine) {
        let diag1Count = 0;
        let diag2Count = 0;
        for (let i = 0; i < dim; i++) {
            if (songVerificationList[i * dim + i].hasPlayed) diag1Count++;
            if (songVerificationList[i * dim + (dim - 1 - i)].hasPlayed) diag2Count++;
        }
        if (diag1Count === dim || diag2Count === dim) { hasLine = true; }
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
                <div class="cell-song-title">${escapeHtml(song.title)}</div>
                <div class="cell-song-artist">${escapeHtml(song.artist)}</div>
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

let hostPeerRetries = 0;
const MAX_HOST_PEER_RETRIES = 5;

function initHostPeer() {
    if (hostPeerRetries >= MAX_HOST_PEER_RETRIES) {
        console.error('No se pudo crear la sala P2P tras ' + MAX_HOST_PEER_RETRIES + ' intentos.');
        alert('Error: No se pudo crear la sala de juego. Comprueba tu conexión a internet y recarga la página.');
        return;
    }
    hostPeerRetries++;
    roomId = 'lotobongo-' + Math.floor(1000 + Math.random() * 9000);
    roomToken = generateRoomToken();
    peer = new Peer(roomId, peerConfig);

    peer.on('open', (id) => {
        hostPeerRetries = 0;
        console.log('Host PeerJS id:', id);
        const shareUrl = `${window.location.origin}${window.location.pathname}?room=${id}&token=${encodeURIComponent(roomToken)}`;
        const inputUrl = document.getElementById("share-room-url");
        if (inputUrl) inputUrl.value = shareUrl;
        
        const qrImg = document.getElementById("share-qr-image");
        if (qrImg) {
            qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareUrl)}`;
        }

        startHostApiSync();
    });

    peer.on('connection', (connection) => {
        console.log('Invitado intentando conectar:', connection.peer);

        connection.on('data', (data) => {
            handleHostConnectionData(connection, data);
        });

        connection.on('close', () => {
            console.log('Conexion cerrada por el invitado:', connection.peer);
            hostConnections = hostConnections.filter(c => c.peer !== connection.peer);
        });
        
        connection.on('error', (err) => {
            console.error('Error en la conexion del invitado:', connection.peer, err);
        });

        connection.on('open', () => {
            console.log('Conexion P2P abierta con exito:', connection.peer);
            
            // Deduplicar: si ya existe una conexion con este peer, cerrar la vieja
            const existingIndex = hostConnections.findIndex(c => c.peer === connection.peer);
            if (existingIndex !== -1) {
                const oldConn = hostConnections[existingIndex];
                try { oldConn.close(); } catch (e) { /* ignore */ }
                hostConnections.splice(existingIndex, 1);
            }
            
            hostConnections.push(connection);
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

function generateRoomToken() {
    const bytes = new Uint8Array(16);
    if (window.crypto && window.crypto.getRandomValues) {
        window.crypto.getRandomValues(bytes);
    } else {
        for (let i = 0; i < bytes.length; i++) {
            bytes[i] = Math.floor(Math.random() * 256);
        }
    }
    return Array.from(bytes, byte => byte.toString(16).padStart(2, "0")).join("");
}

function getRoomApiUrl(targetRoomId = roomId) {
    const tokenParam = roomToken ? `&token=${encodeURIComponent(roomToken)}` : "";
    return `/api/room?room=${encodeURIComponent(targetRoomId)}${tokenParam}`;
}

async function postRoomApi(targetRoomId, payload) {
    const response = await fetch(getRoomApiUrl(targetRoomId), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error(`Room API ${response.status}`);
    }

    return response.json();
}

async function fetchRoomApi(targetRoomId) {
    const response = await fetch(getRoomApiUrl(targetRoomId), {
        cache: "no-store"
    });

    if (!response.ok) {
        throw new Error(`Room API ${response.status}`);
    }

    return response.json();
}

async function updateSyncStatusBadge(targetRoomId = roomId) {
    if (!targetRoomId) return;
    const badge = document.getElementById("sync-status-badge");
    if (!badge) return;

    try {
        const response = await fetch(`${getRoomApiUrl(targetRoomId)}&diagnostic=1`, { cache: "no-store" });
        const data = await response.json();
        if (data.durable) {
            badge.textContent = "Sync: durable";
            badge.style.color = "var(--success)";
        } else {
            badge.textContent = "Sync: memoria";
            badge.style.color = "var(--danger)";
        }
    } catch (error) {
        badge.textContent = "Sync: sin conexion";
        badge.style.color = "var(--danger)";
    }
}

function startHostApiSync() {
    stopHostApiSync();
    updateSyncStatusBadge();
    publishRoomStateToApi();
    syncHostCardsFromApi();
    hostApiSyncInterval = setInterval(publishRoomStateToApi, 1500);
    hostApiCardsInterval = setInterval(syncHostCardsFromApi, 1500);
}

function stopHostApiSync() {
    if (hostApiSyncInterval) {
        clearInterval(hostApiSyncInterval);
        hostApiSyncInterval = null;
    }
    if (hostApiCardsInterval) {
        clearInterval(hostApiCardsInterval);
        hostApiCardsInterval = null;
    }
}

async function publishRoomStateToApi() {
    if (!roomId) return;
    try {
        await postRoomApi(roomId, {
            action: "state",
            state: getCurrentGameState()
        });
    } catch (error) {
        console.warn("No se pudo publicar estado por API:", error);
    }
}

async function syncHostCardsFromApi() {
    if (!roomId) return;
    try {
        const room = await fetchRoomApi(roomId);
        const cards = room.cards || [];
        if (room.durable === false) {
            console.warn("Room API sin storage durable. En Vercel, configura KV/Upstash para sincronizar cartones entre dispositivos.");
        }
        let changed = false;
        cards.forEach((card) => {
            // Solo aceptar cartones de la partida actual
            if (card && card.gameSessionId === gameSessionId && !generatedCards.some(existing => existing.id === card.id)) {
                generatedCards.push(card);
                changed = true;
            }
        });
        if (changed) {
            calculatePrizes();
            updateActiveCardsUI();
        }
    } catch (error) {
        // La sala puede no existir todavia justo al cargar el host.
    }
}

function getCurrentGameState() {
    return {
        type: 'game-state',
        gameSessionId: gameSessionId,
        stateTimestamp: Date.now(),
        hasStarted: gameSongs.length > 0,
        songs: gameSongs,
        playedSongs: playedSongs,
        gridSize: document.getElementById("card-grid-size").value,
        mobileGridSize: document.getElementById("mobile-card-grid-size").value,
        cards: generatedCards
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
    if (data.token !== roomToken) {
        console.warn('Mensaje P2P rechazado por token invalido:', connection.peer);
        return;
    }

    if (data.type === 'guest-ready') {
        const existingIndex = hostConnections.findIndex(c => c.peer === connection.peer);
        if (existingIndex === -1 && connection.open) {
            hostConnections.push(connection);
        }
        sendGameStateToGuest(connection);
        return;
    }

    if (data.type === 'register-card' && data.card) {
        console.log('Registrando carton recibido:', data.card);
        // Solo aceptar cartones de la partida actual
        if (data.gameSessionId === gameSessionId && !generatedCards.some(c => c.id === data.card.id)) {
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
    const statsCardsEl = document.getElementById("stats-cards");
    const pillsEl = document.getElementById("active-cards-pills");
    
    if (countEl) countEl.textContent = generatedCards.length;
    if (statsCardsEl) statsCardsEl.textContent = generatedCards.length;
    if (!pillsEl) return;
    
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
    roomId = hostRoomId;
    const emptyDesc = document.querySelector("#cards-container .empty-state p");
    if (!roomToken) {
        if (emptyDesc) emptyDesc.innerHTML = `<span style="color: var(--danger);">Enlace incompleto: falta el token de acceso de la sala.</span>`;
        return;
    }
    if (emptyDesc) emptyDesc.textContent = "Conectando con el organizador...";
    startGuestApiPolling(hostRoomId, emptyDesc);
    
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
            if (emptyDesc) emptyDesc.innerHTML = `<span style="color: var(--danger);">Error de conexion: ${escapeHtml(err.message || err)}</span>`;
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
                emptyDesc.innerHTML = `<span style="color: var(--danger);">WebRTC no conecto. Usando sincronizacion por servidor...</span>`;
                startGuestApiPolling(hostRoomId, emptyDesc);
            }
        }
    });
}

function startGuestApiPolling(hostRoomId, emptyDesc) {
    stopGuestApiPolling();
    const poll = async () => {
        try {
            const room = await fetchRoomApi(hostRoomId);
            if (room && room.state) {
                handleGuestGameState(room.state, emptyDesc);
            } else if (emptyDesc) {
                emptyDesc.textContent = "Conectado por servidor. Esperando que el organizador comience la partida...";
            }
        } catch (error) {
            if (emptyDesc && !gameSongs.length) {
                emptyDesc.textContent = "Buscando sala por servidor...";
            }
        }
    };
    poll();
    guestApiPollInterval = setInterval(poll, 1500);
}

function stopGuestApiPolling() {
    if (guestApiPollInterval) {
        clearInterval(guestApiPollInterval);
        guestApiPollInterval = null;
    }
}

function startGuestReadyLoop() {
    stopGuestReadyLoop();
    const sendReady = () => {
        if (conn && conn.open) {
            conn.send({
                type: 'guest-ready',
                token: roomToken,
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
    stopGuestCardRegisterLoop();
    guestPendingCard = card;
    guestRegisteredCardIds.add(card.id);

    const sendRegistration = () => {
        if (conn && conn.open && guestPendingCard) {
            conn.send({
                type: 'register-card',
                token: roomToken,
                gameSessionId: gameSessionId,
                card: guestPendingCard
            });
        }
        registerGuestCardViaApi(guestPendingCard);
    };

    sendRegistration();
    guestCardRegisterInterval = setInterval(sendRegistration, 1000);
}

async function registerGuestCardViaApi(card) {
    if (!card || !roomId) return;
    try {
        const cardWithSession = { ...card, gameSessionId: gameSessionId };
        await postRoomApi(roomId, {
            action: "register-card",
            gameSessionId: gameSessionId,
            card: cardWithSession
        });
        if (guestPendingCard && guestPendingCard.id === card.id) {
            stopGuestCardRegisterLoop();
        }
    } catch (error) {
        console.warn("No se pudo registrar carton por API:", error);
    }
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
    const incomingTimestamp = data.stateTimestamp || 0;

    if (!data.hasStarted || songs.length === 0) {
        if (emptyDesc) emptyDesc.textContent = "Conectado. Esperando que el organizador comience la partida...";
        return;
    }

    // Ignorar estados más antiguos que el último aplicado (race condition P2P vs API polling)
    if (incomingTimestamp < guestLastStateTimestamp && sessionId === gameSessionId) {
        return;
    }
    guestLastStateTimestamp = incomingTimestamp;

    gameSongs = ensureSongIds(songs);
    playedSongs = data.playedSongs || [];
    gameSessionId = sessionId;
    
    const sizeSelect = document.getElementById("card-grid-size");
    guestCardGridSize = data.mobileGridSize || data.gridSize || "3x3";
    if (sizeSelect && guestCardGridSize) {
        sizeSelect.value = guestCardGridSize;
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
    // Emoji reactions were removed from the mobile guest UI to keep cards readable.
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
    const shuffled = arr.map(item => ({ ...item }));
    shuffleArray(shuffled);
    return shuffled.slice(0, n);
}

function calculatePrizes() {
    const costInput = document.getElementById("prize-card-cost");
    const lineInput = document.getElementById("prize-line-pct");
    const bingoInput = document.getElementById("prize-bingo-pct");
    
    if (!costInput || !lineInput || !bingoInput) return;
    
    const cardCost = parseFloat(costInput.value) || 0;
    let linePct = parseFloat(lineInput.value) || 0;
    let bingoPct = parseFloat(bingoInput.value) || 0;
    
    // Validar que la suma no supere 100%
    if (linePct + bingoPct > 100) {
        bingoPct = Math.max(0, 100 - linePct);
        bingoInput.value = bingoPct;
    }
    
    const totalCards = generatedCards.length;
    const totalCollected = totalCards * cardCost;
    
    const linePrize = (totalCollected * linePct) / 100;
    const bingoPrize = (totalCollected * bingoPct) / 100;
    
    document.getElementById("display-total-cards").textContent = totalCards;
    document.getElementById("display-total-collected").textContent = totalCollected.toFixed(2) + " €";
    document.getElementById("display-line-prize").textContent = linePrize.toFixed(2) + " €";
    document.getElementById("display-bingo-prize").textContent = bingoPrize.toFixed(2) + " €";
}
