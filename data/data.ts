export const navlinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Games",
    url: "/games",
  },
  {
    label: "History",
    url: "/history",
  },
  {
    label: "Gallery",
    url: "/gallery",
  },
];

export const gamedata = [
  {
    title: "Ampe",
    description: "A lively jumping game...",
    images: ["/gameimg.png", "/gameimg.png", "/gameimg.png"],
  },
  {
    title: "Oware",
    description: "A strategic board game...",
    images: ["/gameimg.png", "/gameimg.png", "/gameimg.png"],
  },
];

export const games = [
  {
    title: "Anhwɛwoakyire",
    description:
      "A moonlight circle game where players squat in a circle while one player runs around with a folded cloth. The name literally means 'do not look back'. Players must be alert to feel when the cloth is placed behind them, as looking back is against the rules.",
    mainImage: "/main_anhwewoakyire.png",
    images: [
      "/anhwewoakyire-1.jpg",
      "/anhwewoakyire-2.jpg",
      "/anhwewoakyire-3.jpg",
    ],
    howToPlay: [
      "Players form a circle and squat down, with one player standing",
      "The standing player runs around with a folded cloth while others clap and sing",
      "The runner places the cloth behind any squatting player",
      "The chosen player must notice the cloth and chase the runner",
      "If they fail to notice, they receive a penalty and must say 'adwo brɛwoo' (it's alright)",
    ],
    players: "4 or more players",
    region: "Akan, Ghana",
    setting: "Moonlight",
    ageGroup: "All ages",
  },
  {
    title: "Aso (Teele)",
    description:
      "A dynamic jumping game where players take turns being thrown into the air by their friends. The name 'Teele' literally means 'throw and catch', creating an exciting display of trust and coordination.",
    mainImage: "/main_aso.jpg",
    images: ["/aso-1.jpg", "/aso-2.jpg", "/aso-3.jpg"],
    howToPlay: [
      "Players form a circle in the dancing arena",
      "One player runs to any point in the circle",
      "The player flings themselves into their friends' arms",
      "Others help them jump upward and forward",
      "Players take turns being thrown and caught",
    ],
    players: "3 or more players",
    difficulty: "Medium",
    region: "Akan, Ghana",
    setting: "Outdoor",
    ageGroup: "Youth",
    type: "Dancing game",
    tags: ["jumping", "dancing", "group activity"],
  },
  // {
  //   title: "Pempenaa",
  //   description: "A seated leg-folding game played at moonlight or during school breaks. Players must respond to the leader's calls and fold their legs according to the song's rhythm.",
  //   mainImage: "/pempenaa-main.png",
  //   images: [
  //     "/pempenaa-1.png",
  //     "/pempenaa-2.png",
  //     "/pempenaa-3.png"
  //   ],
  //   howToPlay: [
  //     "Players sit in a file with legs stretched forward",
  //     "Leader sweeps over legs saying 'Pempenaa' (others respond 'nanaa')",
  //     "Leader points to legs while singing the game song",
  //     "The leg pointed at when song ends must be folded",
  //     "Last player with unfolded legs gets tickled while others sing 'Yerekɔ tu mmire'"
  //   ],
  //   players: "3 or more players",
  //   difficulty: "Easy",
  //   region: "Akan, Ghana",
  //   setting: "Moonlight/School",
  //   song: "Pempenaa nanaaaa, Siii siii siiii...",
  //   type: "Seated game",
  //   tags: ["singing game", "children's game", "moonlight game"]
  // },
  // {
  //   title: "Mpeewa",
  //   description: "A rhythmic hand-slapping game that combines singing, clapping, and stepping. Originally played by females but now enjoyed by all genders, it tests coordination and rhythm.",
  //   mainImage: "/mpeewa-main.png",
  //   images: [
  //     "/mpeewa-1.png",
  //     "/mpeewa-2.png",
  //     "/mpeewa-3.png"
  //   ],
  //   howToPlay: [
  //     "Players stand in a circle",
  //     "Clap a hemiola rhythm (3:2 ratio)",
  //     "Step right on the last beat of duple rhythm",
  //     "Maintain rhythm while singing 'Robert' song",
  //     "Players who miss the rhythm are eliminated"
  //   ],
  //   players: "2 or more players",
  //   difficulty: "Hard",
  //   region: "Akan, Ghana",
  //   setting: "Evening/School",
  //   song: "Robert Rob it! Rob it! Robert Mensah goalkeeper number one...",
  //   type: "Rhythm game",
  //   tags: ["singing", "clapping", "coordination"]
  // },
  {
    title: "Bankye ma Akrakuro",
    description:
      "Also known as Sansankrɔma, this stone-passing game requires players to coordinate their movements with the rhythm of the song while passing and grabbing stones.",
    mainImage: "/main_bankye-1.jpg",
    images: ["/bankye-1.jpg", "/bankye-2.jpg", "/bankye-3.jpg"],
    howToPlay: [
      "Players squat in a circular formation with stones",
      "Leader starts the song as cantor",
      "Pass stones anti-clockwise while singing",
      "Maintain 'pass-grab' rhythm with the song",
      "Players who miss the rhythm are eliminated",
    ],
    players: "4 or more players",
    difficulty: "Medium",
    region: "Akan, Ghana",
    setting: "Moonlight/School",
    materials: ["Small stones"],
    song: "Bankye ma akrakuro, Meye den na m'anya bi madi...",
    type: "Circle game",
    tags: ["stone game", "singing", "coordination"],
  },
  {
    title: "Ampe",
    description:
      "A high-energy jumping game where players face each other, jump, clap, and use strategic foot movements to score points. Terms like 'Ohyiwa' and 'Opare' determine winning moves.",
    mainImage: "/ampe-main.jpg",
    images: ["/ampe-1.jpg", "/ampe-2.jpg", "/ampe-3.jpg"],
    howToPlay: [
      "Two players face each other",
      "Jump and clap simultaneously",
      "Use strategic foot movements (left or right)",
      "Score with 'Ohyiwa' (opposite feet) or 'Opare' (same feet)",
      "Winner continues playing against others in line",
    ],
    players: "2 players at a time",
    difficulty: "Medium",
    region: "Akan, Ghana",
    setting: "Daytime",
    type: "Jump rope game",
    tags: ["jumping", "coordination", "competition"],
  },
  // {
  //   title: "Karikokoo",
  //   description:
  //     "Originally a strength-testing game used to select cocoa bean loaders, this back-to-back lifting game tests endurance and strength between two competitors.",
  //   mainImage: "/karikokoo-main.png",
  //   images: ["/karikokoo-1.png", "/karikokoo-2.png", "/karikokoo-3.png"],
  //   howToPlay: [
  //     "Two players stand back-to-back",
  //     "Lock arms together",
  //     "Take turns lifting each other",
  //     "Continue until one person gets tired",
  //     "Last person able to lift wins",
  //   ],
  //   players: "2 players",
  //   difficulty: "Hard",
  //   region: "Akan, Ghana",
  //   setting: "Cocoa-growing areas",
  //   song: "KariKokoo... Kari Waawaa",
  //   type: "Strength game",
  //   tags: ["strength test", "competition", "traditional sport"],
  // },
];


