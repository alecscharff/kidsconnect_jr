// KidsConnect Jr - Phonics-progression puzzle data
// phonicsLevel: 0=emojis, 1=short vowel CVC, 2=digraphs, 3=blends, 4=-ing, 5=oo sounds, 6=sneaky e
// Each category has 3 items (3x3 grid)
// At each game level, 2 categories come from that level + 1 from a lower level

export const LEVEL_INFO = [
  {
    level: 0,
    emoji: '🎨',
    name: 'Emojis Only',
    description: 'Just pictures — no reading needed!',
    color: 'from-pink-400 to-rose-500',
  },
  {
    level: 1,
    emoji: '🐱',
    name: 'Short Vowels',
    description: 'cat, dog, sun… short a, e, i, o, u',
    color: 'from-orange-400 to-amber-500',
  },
  {
    level: 2,
    emoji: '🐟',
    name: 'Digraphs',
    description: 'sh, th, ch, wh words',
    color: 'from-yellow-400 to-lime-500',
  },
  {
    level: 3,
    emoji: '🐸',
    name: 'Blends',
    description: 'sl, gr, fr, st, cr… words',
    color: 'from-green-400 to-teal-500',
  },
  {
    level: 4,
    emoji: '💍',
    name: '-ING Words',
    description: 'ring, sing, king, wing…',
    color: 'from-teal-400 to-cyan-500',
  },
  {
    level: 5,
    emoji: '🌕',
    name: 'OO Sounds',
    description: 'book and moon words',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    level: 6,
    emoji: '✨',
    name: 'Sneaky E',
    description: 'cake, bike, bone… silent e!',
    color: 'from-violet-400 to-purple-500',
  },
]

export const PUZZLES = [
  // ─── LEVEL 0: Emojis Only ───────────────────────────────────────────────────
  {
    categoryEmoji: '🍎',
    categoryName: 'Fruits',
    phonicsLevel: 0,
    items: ['🍎', '🍌', '🍇'],
  },
  {
    categoryEmoji: '🐶',
    categoryName: 'Pets',
    phonicsLevel: 0,
    items: ['🐶', '🐱', '🐰'],
  },
  {
    categoryEmoji: '⭐',
    categoryName: 'In the Sky',
    phonicsLevel: 0,
    items: ['☀️', '🌙', '⭐'],
  },
  {
    categoryEmoji: '🚗',
    categoryName: 'Road Vehicles',
    phonicsLevel: 0,
    items: ['🚗', '🚌', '🚲'],
  },
  {
    categoryEmoji: '🌸',
    categoryName: 'Garden Flowers',
    phonicsLevel: 0,
    items: ['🌸', '🌺', '🌻'],
  },
  {
    categoryEmoji: '⚽',
    categoryName: 'Sports Balls',
    phonicsLevel: 0,
    items: ['⚽', '🏀', '🎾'],
  },
  {
    categoryEmoji: '🐟',
    categoryName: 'Ocean Friends',
    phonicsLevel: 0,
    items: ['🐟', '🐙', '🦀'],
  },
  {
    categoryEmoji: '🦁',
    categoryName: 'Zoo Animals',
    phonicsLevel: 0,
    items: ['🦁', '🐘', '🦒'],
  },
  {
    categoryEmoji: '🍕',
    categoryName: 'Favorite Foods',
    phonicsLevel: 0,
    items: ['🍕', '🍔', '🌭'],
  },
  {
    categoryEmoji: '🦋',
    categoryName: 'Colorful Bugs',
    phonicsLevel: 0,
    items: ['🐛', '🐝', '🦋'],
  },
  {
    categoryEmoji: '🍦',
    categoryName: 'Sweet Treats',
    phonicsLevel: 0,
    items: ['🍦', '🍪', '🎂'],
  },
  {
    categoryEmoji: '🐦',
    categoryName: 'Birds',
    phonicsLevel: 0,
    items: ['🐧', '🦜', '🦅'],
  },
  {
    categoryEmoji: '😊',
    categoryName: 'Happy Faces',
    phonicsLevel: 0,
    items: ['😊', '😄', '🥰'],
  },
  {
    categoryEmoji: '👕',
    categoryName: 'Getting Dressed',
    phonicsLevel: 0,
    items: ['👕', '👖', '🧢'],
  },
  {
    categoryEmoji: '🎄',
    categoryName: 'Holiday Fun',
    phonicsLevel: 0,
    items: ['🎄', '🎁', '⛄'],
  },

  // ─── LEVEL 1: Short Vowel CVC Words ─────────────────────────────────────────
  // Rhyme families — kids know rhymes before they can read!
  {
    categoryEmoji: '🐱',
    categoryName: 'Rhymes with CAT',
    phonicsLevel: 1,
    items: ['BAT', 'HAT', 'MAT'],
  },
  {
    categoryEmoji: '🐷',
    categoryName: 'Rhymes with PIG',
    phonicsLevel: 1,
    items: ['BIG', 'DIG', 'WIG'],
  },
  {
    categoryEmoji: '🐸',
    categoryName: 'Rhymes with HOP',
    phonicsLevel: 1,
    items: ['MOP', 'TOP', 'POP'],
  },
  {
    categoryEmoji: '🐛',
    categoryName: 'Rhymes with BUG',
    phonicsLevel: 1,
    items: ['HUG', 'MUG', 'RUG'],
  },
  {
    categoryEmoji: '🐔',
    categoryName: 'Rhymes with HEN',
    phonicsLevel: 1,
    items: ['PEN', 'TEN', 'MEN'],
  },
  // Semantic categories — concrete themes with emoji anchors
  {
    categoryEmoji: '🍳',
    categoryName: 'Kitchen Tools',
    phonicsLevel: 1,
    items: ['POT', 'PAN', '🥄'],
  },
  {
    categoryEmoji: '🥚',
    categoryName: 'Breakfast!',
    phonicsLevel: 1,
    items: ['EGG', '🧇', '🥞'],
  },
  {
    categoryEmoji: '🛁',
    categoryName: 'Bath Time',
    phonicsLevel: 1,
    items: ['TUB', '🧼', '🚿'],
  },
  {
    categoryEmoji: '🐾',
    categoryName: 'Furry Pets',
    phonicsLevel: 1,
    items: ['PUP', '🐱', '🐰'],
  },
  {
    categoryEmoji: '🦊',
    categoryName: 'Wild Animals',
    phonicsLevel: 1,
    items: ['FOX', '🦝', '🐺'],
  },
  {
    categoryEmoji: '🎒',
    categoryName: 'Things to Carry',
    phonicsLevel: 1,
    items: ['BOX', 'BAG', '🎒'],
  },
  {
    categoryEmoji: '🔥',
    categoryName: 'Hot Stuff!',
    phonicsLevel: 1,
    items: ['HOT', '🔥', '☀️'],
  },
  {
    categoryEmoji: '✈️',
    categoryName: 'Up in the Air',
    phonicsLevel: 1,
    items: ['JET', '🚁', '🎈'],
  },

  // ─── LEVEL 2: Digraphs (sh, th, ch, wh) ─────────────────────────────────────
  {
    categoryEmoji: '🏖️',
    categoryName: 'At the Beach',
    phonicsLevel: 2,
    items: ['FISH', 'SHIP', '🌊'],
  },
  {
    categoryEmoji: '🧼',
    categoryName: 'Getting Clean',
    phonicsLevel: 2,
    items: ['BATH', 'WASH', '🚿'],
  },
  {
    categoryEmoji: '✏️',
    categoryName: 'At School',
    phonicsLevel: 2,
    items: ['MATH', 'CHALK', '📐'],
  },
  {
    categoryEmoji: '🐄',
    categoryName: 'At the Barn',
    phonicsLevel: 2,
    items: ['SHED', 'CHICK', '🐄'],
  },
  {
    categoryEmoji: '😊',
    categoryName: 'On Your Body',
    phonicsLevel: 2,
    items: ['CHIN', 'SHIN', '🦷'],
  },
  {
    categoryEmoji: '🍟',
    categoryName: 'Snack Attack',
    phonicsLevel: 2,
    items: ['CHIP', 'MUNCH', '🍿'],
  },

  // ─── LEVEL 3: Consonant Blends ───────────────────────────────────────────────
  {
    categoryEmoji: '🐸',
    categoryName: 'Pond Friends',
    phonicsLevel: 3,
    items: ['FROG', 'CRAB', '🐢'],
  },
  {
    categoryEmoji: '🛝',
    categoryName: 'Playground Fun',
    phonicsLevel: 3,
    items: ['SLED', 'SKIP', '🛝'],
  },
  {
    categoryEmoji: '🥁',
    categoryName: 'Music Makers',
    phonicsLevel: 3,
    items: ['DRUM', 'CLAP', '🎸'],
  },
  {
    categoryEmoji: '🍇',
    categoryName: 'Yummy Fruits',
    phonicsLevel: 3,
    items: ['PLUM', 'GRAPE', '🫐'],
  },
  {
    categoryEmoji: '❄️',
    categoryName: 'Winter Time',
    phonicsLevel: 3,
    items: ['SNOW', 'FROST', '⛄'],
  },
  {
    categoryEmoji: '🌽',
    categoryName: 'On the Farm',
    phonicsLevel: 3,
    items: ['TROT', 'CROP', '🌽'],
  },

  // ─── LEVEL 4: -ING Word Family ───────────────────────────────────────────────
  {
    categoryEmoji: '💍',
    categoryName: 'Rhymes with RING',
    phonicsLevel: 4,
    items: ['RING', 'SING', 'KING'],
  },
  {
    categoryEmoji: '🤸',
    categoryName: 'At the Park',
    phonicsLevel: 4,
    items: ['SWING', 'FLING', '🤸'],
  },
  {
    categoryEmoji: '🐝',
    categoryName: 'Bee Things',
    phonicsLevel: 4,
    items: ['STING', '🐝', '🍯'],
  },
  {
    categoryEmoji: '🌸',
    categoryName: 'Spring Time',
    phonicsLevel: 4,
    items: ['SPRING', 'BRING', '🌸'],
  },

  // ─── LEVEL 5: OO Sounds ──────────────────────────────────────────────────────
  {
    categoryEmoji: '🌙',
    categoryName: 'Night Sky',
    phonicsLevel: 5,
    items: ['MOON', 'ZOOM', '🚀'],
  },
  {
    categoryEmoji: '🍳',
    categoryName: 'In the Kitchen',
    phonicsLevel: 5,
    items: ['COOK', 'FOOD', '🍳'],
  },
  {
    categoryEmoji: '📖',
    categoryName: 'At the Library',
    phonicsLevel: 5,
    items: ['BOOK', 'LOOK', '📖'],
  },
  {
    categoryEmoji: '🌳',
    categoryName: 'In the Garden',
    phonicsLevel: 5,
    items: ['ROOT', 'WOOD', '🌳'],
  },
  {
    categoryEmoji: '🧣',
    categoryName: 'Cold Weather',
    phonicsLevel: 5,
    items: ['BOOT', 'HOOD', '🧣'],
  },

  // ─── LEVEL 6: Sneaky E / Silent E ────────────────────────────────────────────
  {
    categoryEmoji: '🎂',
    categoryName: 'Rhymes with CAKE',
    phonicsLevel: 6,
    items: ['CAKE', 'LAKE', '🎂'],
  },
  {
    categoryEmoji: '🥾',
    categoryName: 'Outdoor Fun',
    phonicsLevel: 6,
    items: ['BIKE', 'HIKE', '🥾'],
  },
  {
    categoryEmoji: '🍦',
    categoryName: 'Rhymes with BONE',
    phonicsLevel: 6,
    items: ['BONE', 'CONE', '🍦'],
  },
  {
    categoryEmoji: '🐭',
    categoryName: 'Rhymes with RICE',
    phonicsLevel: 6,
    items: ['RICE', 'MICE', '🍚'],
  },
  {
    categoryEmoji: '🎵',
    categoryName: 'Music Words',
    phonicsLevel: 6,
    items: ['TUNE', 'NOTE', '🎵'],
  },
]

export const DIFFICULTY_COLORS = {
  1: 'yellow',
  2: 'green',
  3: 'blue',
}
