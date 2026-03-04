// KidsConnect Jr - Phonics-progression puzzle data
// phonicsLevel: 0=emojis, 1=short vowel CVC, 2=digraphs, 3=blends, 4=-ing, 5=oo sounds, 6=sneaky e
// Each category has 4 items (emojis and/or words)
// At each game level, 3 categories come from that level + 1 from a lower level

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
    items: ['🍎', '🍌', '🍇', '🍊'],
  },
  {
    categoryEmoji: '🔴',
    categoryName: 'Colored Dots',
    phonicsLevel: 0,
    items: ['🔴', '🟠', '🟡', '🟢'],
  },
  {
    categoryEmoji: '😊',
    categoryName: 'Happy Faces',
    phonicsLevel: 0,
    items: ['😊', '😄', '🥰', '😁'],
  },
  {
    categoryEmoji: '🌸',
    categoryName: 'Flowers',
    phonicsLevel: 0,
    items: ['🌸', '🌺', '🌻', '🌷'],
  },
  {
    categoryEmoji: '🏀',
    categoryName: 'Sports Balls',
    phonicsLevel: 0,
    items: ['🏀', '⚽', '🏈', '⚾'],
  },
  {
    categoryEmoji: '🎵',
    categoryName: 'Music',
    phonicsLevel: 0,
    items: ['🎵', '🎸', '🥁', '🎹'],
  },
  {
    categoryEmoji: '🌊',
    categoryName: 'Ocean Life',
    phonicsLevel: 0,
    items: ['🐟', '🐚', '🦀', '🐙'],
  },
  {
    categoryEmoji: '🐸',
    categoryName: 'Hoppers',
    phonicsLevel: 0,
    items: ['🐸', '🦘', '🐰', '🦗'],
  },
  {
    categoryEmoji: '👕',
    categoryName: 'Clothes',
    phonicsLevel: 0,
    items: ['👕', '👖', '🧢', '👟'],
  },
  {
    categoryEmoji: '🦁',
    categoryName: 'Zoo Animals',
    phonicsLevel: 0,
    items: ['🦁', '🐘', '🦒', '🦓'],
  },
  {
    categoryEmoji: '🔨',
    categoryName: 'Tools',
    phonicsLevel: 0,
    items: ['🔨', '🪚', '🔧', '🪛'],
  },
  {
    categoryEmoji: '🎃',
    categoryName: 'Halloween',
    phonicsLevel: 0,
    items: ['🎃', '👻', '🦇', '🕷️'],
  },
  {
    categoryEmoji: '🎄',
    categoryName: 'Christmas',
    phonicsLevel: 0,
    items: ['🎄', '🎅', '⛄', '🎁'],
  },
  {
    categoryEmoji: '🚗',
    categoryName: 'Road Vehicles',
    phonicsLevel: 0,
    items: ['🚗', '🚌', '🚕', '🚎'],
  },

  // ─── LEVEL 1: Short Vowel CVC Words ─────────────────────────────────────────
  {
    categoryEmoji: '🐾',
    categoryName: 'Furry Friends',
    phonicsLevel: 1,
    items: ['CAT', 'RAT', '🐕', '🐷'],
  },
  {
    categoryEmoji: '🐔',
    categoryName: 'Farm Birds',
    phonicsLevel: 1,
    items: ['HEN', '🦆', '🐓', '🦃'],
  },
  {
    categoryEmoji: '⭐',
    categoryName: 'In the Sky',
    phonicsLevel: 1,
    items: ['SUN', '🌙', '⭐', '⛅'],
  },
  {
    categoryEmoji: '☕',
    categoryName: 'Drink Holders',
    phonicsLevel: 1,
    items: ['CUP', 'MUG', '🫖', '🥤'],
  },
  {
    categoryEmoji: '✈️',
    categoryName: 'Flying Things',
    phonicsLevel: 1,
    items: ['JET', '🚁', '🪁', '🎈'],
  },
  {
    categoryEmoji: '🐛',
    categoryName: 'Bugs',
    phonicsLevel: 1,
    items: ['BUG', 'ANT', '🐝', '🐞'],
  },
  {
    categoryEmoji: '🍕',
    categoryName: 'Yummy Food',
    phonicsLevel: 1,
    items: ['HAM', '🍕', '🌭', '🍔'],
  },
  {
    categoryEmoji: '📦',
    categoryName: 'Containers',
    phonicsLevel: 1,
    items: ['BOX', 'BAG', '🎒', '🧺'],
  },
  {
    categoryEmoji: '🛁',
    categoryName: 'Bath Time',
    phonicsLevel: 1,
    items: ['TUB', '🧼', '🚿', '🧴'],
  },
  {
    categoryEmoji: '🦊',
    categoryName: 'Forest Animals',
    phonicsLevel: 1,
    items: ['FOX', '🐺', '🦝', '🦨'],
  },
  {
    categoryEmoji: '🍦',
    categoryName: 'Sweet Treats',
    phonicsLevel: 1,
    items: ['GUM', '🍪', '🧁', '🍬'],
  },
  {
    categoryEmoji: '🐣',
    categoryName: 'Baby Animals',
    phonicsLevel: 1,
    items: ['CUB', 'PUP', '🐣', '🐱'],
  },
  {
    categoryEmoji: '🦇',
    categoryName: 'Night Animals',
    phonicsLevel: 1,
    items: ['BAT', '🦉', '🦔', '🌙'],
  },
  {
    categoryEmoji: '🥚',
    categoryName: 'Breakfast',
    phonicsLevel: 1,
    items: ['EGG', '🧇', '🥞', '🥓'],
  },
  {
    categoryEmoji: '🔥',
    categoryName: 'Hot Things',
    phonicsLevel: 1,
    items: ['HOT', '🔥', '☀️', '🌶️'],
  },
  {
    categoryEmoji: '🏃',
    categoryName: 'Moving Fast',
    phonicsLevel: 1,
    items: ['RUN', 'JOG', '🚀', '🐆'],
  },
  {
    categoryEmoji: '🤗',
    categoryName: 'Loving',
    phonicsLevel: 1,
    items: ['HUG', '💕', '😘', '🥰'],
  },
  {
    categoryEmoji: '🚌',
    categoryName: 'On the Road',
    phonicsLevel: 1,
    items: ['BUS', 'VAN', '🚗', '🚕'],
  },
  {
    categoryEmoji: '🏠',
    categoryName: 'In the Kitchen',
    phonicsLevel: 1,
    items: ['POT', 'PAN', '🍳', '🥄'],
  },
  {
    categoryEmoji: '🌿',
    categoryName: 'In the Garden',
    phonicsLevel: 1,
    items: ['DIG', 'MUD', '🌱', '🪱'],
  },

  // ─── LEVEL 2: Digraphs (sh, th, ch, wh) ─────────────────────────────────────
  {
    categoryEmoji: '🍳',
    categoryName: 'Cooking Words',
    phonicsLevel: 2,
    items: ['DISH', 'CHOP', '🍳', '🥄'],
  },
  {
    categoryEmoji: '🦷',
    categoryName: 'Body Parts',
    phonicsLevel: 2,
    items: ['CHIN', 'SHIN', '🦷', '👁️'],
  },
  {
    categoryEmoji: '⛵',
    categoryName: 'At the Sea',
    phonicsLevel: 2,
    items: ['FISH', 'SHIP', '🦀', '⛵'],
  },
  {
    categoryEmoji: '💬',
    categoryName: 'Digraph Actions',
    phonicsLevel: 2,
    items: ['CHAT', 'RUSH', '💬', '🏃'],
  },
  {
    categoryEmoji: '🐄',
    categoryName: 'Farm Things',
    phonicsLevel: 2,
    items: ['SHED', 'CHICK', '🐄', '🌾'],
  },
  {
    categoryEmoji: '📚',
    categoryName: 'School Time',
    phonicsLevel: 2,
    items: ['MATH', 'CHALK', '📐', '✏️'],
  },

  // ─── LEVEL 3: Consonant Blends (sl, gr, fr, st, cr, etc.) ───────────────────
  {
    categoryEmoji: '🐸',
    categoryName: 'Pond Friends',
    phonicsLevel: 3,
    items: ['FROG', 'CRAB', '🐢', '🌿'],
  },
  {
    categoryEmoji: '🛝',
    categoryName: 'Playground Fun',
    phonicsLevel: 3,
    items: ['SLED', 'SKIP', '🛝', '🎠'],
  },
  {
    categoryEmoji: '💪',
    categoryName: 'Blend Actions',
    phonicsLevel: 3,
    items: ['GRAB', 'CLAP', '👏', '💥'],
  },
  {
    categoryEmoji: '🫐',
    categoryName: 'Snack Time',
    phonicsLevel: 3,
    items: ['PLUM', 'BRAN', '🫐', '🥜'],
  },
  {
    categoryEmoji: '❄️',
    categoryName: 'Winter Fun',
    phonicsLevel: 3,
    items: ['SNOW', 'FROST', '❄️', '⛄'],
  },
  {
    categoryEmoji: '🌾',
    categoryName: 'On the Farm',
    phonicsLevel: 3,
    items: ['TROT', 'CROP', '🐄', '🌽'],
  },

  // ─── LEVEL 4: -ING Word Family ───────────────────────────────────────────────
  {
    categoryEmoji: '🔔',
    categoryName: 'Rhymes with Ring',
    phonicsLevel: 4,
    items: ['RING', 'SING', '💍', '🎤'],
  },
  {
    categoryEmoji: '👑',
    categoryName: 'Royal -ING Words',
    phonicsLevel: 4,
    items: ['KING', 'WING', '👑', '🦅'],
  },
  {
    categoryEmoji: '🤸',
    categoryName: 'Action -ING',
    phonicsLevel: 4,
    items: ['SWING', 'FLING', '🤸', '🪁'],
  },
  {
    categoryEmoji: '🐝',
    categoryName: 'More -ING Words',
    phonicsLevel: 4,
    items: ['STING', 'BRING', '🐝', '🎁'],
  },

  // ─── LEVEL 5: OO Sounds (short oo as in book, long oo as in moon) ────────────
  {
    categoryEmoji: '🌙',
    categoryName: 'Night Sky',
    phonicsLevel: 5,
    items: ['MOON', 'ZOOM', '🌙', '🚀'],
  },
  {
    categoryEmoji: '🍳',
    categoryName: 'Kitchen OO Words',
    phonicsLevel: 5,
    items: ['COOK', 'FOOD', '🍳', '🥣'],
  },
  {
    categoryEmoji: '📖',
    categoryName: 'At the Library',
    phonicsLevel: 5,
    items: ['BOOK', 'LOOK', '📖', '🔖'],
  },
  {
    categoryEmoji: '🌱',
    categoryName: 'Garden Things',
    phonicsLevel: 5,
    items: ['ROOT', 'WOOD', '🌱', '🌳'],
  },
  {
    categoryEmoji: '🧤',
    categoryName: 'Cold Weather Gear',
    phonicsLevel: 5,
    items: ['BOOT', 'HOOD', '🧤', '🧣'],
  },

  // ─── LEVEL 6: Sneaky E / Silent E (CVCe long vowels) ─────────────────────────
  {
    categoryEmoji: '🎂',
    categoryName: 'Rhymes with Cake',
    phonicsLevel: 6,
    items: ['CAKE', 'LAKE', '🎂', '🏊'],
  },
  {
    categoryEmoji: '🚵',
    categoryName: 'Outdoor Fun',
    phonicsLevel: 6,
    items: ['BIKE', 'HIKE', '🚲', '🥾'],
  },
  {
    categoryEmoji: '🦴',
    categoryName: 'Rhymes with Bone',
    phonicsLevel: 6,
    items: ['BONE', 'CONE', '🦴', '🍦'],
  },
  {
    categoryEmoji: '🎲',
    categoryName: 'Rhymes with Rice',
    phonicsLevel: 6,
    items: ['RICE', 'MICE', '🍚', '🐭'],
  },
  {
    categoryEmoji: '🎶',
    categoryName: 'Music Words',
    phonicsLevel: 6,
    items: ['TUNE', 'NOTE', '🎵', '🎹'],
  },
]

export const DIFFICULTY_COLORS = {
  1: 'yellow',
  2: 'green',
  3: 'blue',
  4: 'purple',
}
