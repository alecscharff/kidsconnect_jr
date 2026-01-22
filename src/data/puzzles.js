// Emoji-based puzzles for kids who can't read yet
// Some categories mix 3-letter decodable words with emojis to help early readers
// Each category has a visual icon and 4 items (text or emoji)

export const PUZZLES = [
  // DIFFICULTY 1 - Yellow (Easiest) - Very obvious groupings
  {
    categoryEmoji: '🐾',
    categoryName: 'Furry Friends',
    difficulty: 1,
    items: ['CAT', 'RAT', '🐕', '🐷'], // cat, rat as words + dog, pig as emoji
  },
  {
    categoryEmoji: '🍎',
    categoryName: 'Fruits',
    difficulty: 1,
    items: ['🍎', '🍌', '🍇', '🍊'],
  },
  {
    categoryEmoji: '🔴',
    categoryName: 'Colored Dots',
    difficulty: 1,
    items: ['🔴', '🟠', '🟡', '🟢'],
  },
  {
    categoryEmoji: '😊',
    categoryName: 'Happy Faces',
    difficulty: 1,
    items: ['😊', '😄', '🥰', '😁'],
  },
  {
    categoryEmoji: '🌸',
    categoryName: 'Flowers',
    difficulty: 1,
    items: ['🌸', '🌺', '🌻', '🌷'],
  },
  {
    categoryEmoji: '🐔',
    categoryName: 'Farm Birds',
    difficulty: 1,
    items: ['HEN', '🦆', '🐓', '🦃'],
  },
  {
    categoryEmoji: '❤️',
    categoryName: 'Red Things',
    difficulty: 1,
    items: ['🍎', '❤️', '🌹', '🍓'],
  },
  {
    categoryEmoji: '⭐',
    categoryName: 'In the Sky',
    difficulty: 1,
    items: ['SUN', '🌙', '⭐', '⛅'],
  },

  // DIFFICULTY 2 - Green (Medium)
  {
    categoryEmoji: '☕',
    categoryName: 'Drink Holders',
    difficulty: 2,
    items: ['CUP', 'MUG', '🫖', '🥤'],
  },
  {
    categoryEmoji: '✈️',
    categoryName: 'Flying Things',
    difficulty: 2,
    items: ['JET', '🚁', '🪁', '🎈'],
  },
  {
    categoryEmoji: '🐛',
    categoryName: 'Bugs',
    difficulty: 2,
    items: ['BUG', 'ANT', '🐝', '🐞'],
  },
  {
    categoryEmoji: '🏀',
    categoryName: 'Sports Balls',
    difficulty: 2,
    items: ['🏀', '⚽', '🏈', '⚾'],
  },
  {
    categoryEmoji: '🍕',
    categoryName: 'Yummy Food',
    difficulty: 2,
    items: ['HAM', '🍕', '🍔', '🌭'],
  },
  {
    categoryEmoji: '🎵',
    categoryName: 'Music',
    difficulty: 2,
    items: ['🎵', '🎸', '🥁', '🎹'],
  },
  {
    categoryEmoji: '🌊',
    categoryName: 'Ocean Life',
    difficulty: 2,
    items: ['🐟', '🐚', '🦀', '🐙'],
  },
  {
    categoryEmoji: '📦',
    categoryName: 'Containers',
    difficulty: 2,
    items: ['BOX', 'BAG', '🎒', '🧺'],
  },

  // DIFFICULTY 3 - Blue (Hard)
  {
    categoryEmoji: '🚌',
    categoryName: 'Road Vehicles',
    difficulty: 3,
    items: ['BUS', 'CAB', 'VAN', '🚗'],
  },
  {
    categoryEmoji: '🛁',
    categoryName: 'Bath Time',
    difficulty: 3,
    items: ['TUB', '🧼', '🚿', '🧴'],
  },
  {
    categoryEmoji: '🦊',
    categoryName: 'Forest Animals',
    difficulty: 3,
    items: ['FOX', '🐺', '🦝', '🦨'],
  },
  {
    categoryEmoji: '🍦',
    categoryName: 'Sweet Treats',
    difficulty: 3,
    items: ['GUM', '🍪', '🧁', '🍬'],
  },
  {
    categoryEmoji: '🐸',
    categoryName: 'Hoppers',
    difficulty: 3,
    items: ['🐸', '🦘', '🐰', '🦗'],
  },
  {
    categoryEmoji: '👕',
    categoryName: 'Clothes',
    difficulty: 3,
    items: ['👕', '👖', '🧢', '👟'],
  },
  {
    categoryEmoji: '🦁',
    categoryName: 'Zoo Animals',
    difficulty: 3,
    items: ['🦁', '🐘', '🦒', '🦓'],
  },
  {
    categoryEmoji: '🔨',
    categoryName: 'Tools',
    difficulty: 3,
    items: ['🔨', '🪚', '🔧', '🪛'],
  },

  // DIFFICULTY 4 - Purple (Tricky) - Less obvious connections
  {
    categoryEmoji: '🐣',
    categoryName: 'Baby Animals',
    difficulty: 4,
    items: ['CUB', 'PUP', '🐣', '🐱'],
  },
  {
    categoryEmoji: '🦇',
    categoryName: 'Night Animals',
    difficulty: 4,
    items: ['BAT', '🦉', '🐺', '🦔'],
  },
  {
    categoryEmoji: '🎃',
    categoryName: 'Halloween',
    difficulty: 4,
    items: ['🎃', '👻', '🦇', '🕷️'],
  },
  {
    categoryEmoji: '🎄',
    categoryName: 'Christmas',
    difficulty: 4,
    items: ['🎄', '🎅', '⛄', '🎁'],
  },
  {
    categoryEmoji: '🥚',
    categoryName: 'Breakfast',
    difficulty: 4,
    items: ['EGG', 'JAM', '🧇', '🥞'],
  },
  {
    categoryEmoji: '🔥',
    categoryName: 'Hot Things',
    difficulty: 4,
    items: ['HOT', 'SUN', '🔥', '🌶️'],
  },
  {
    categoryEmoji: '🏃',
    categoryName: 'Moving Fast',
    difficulty: 4,
    items: ['RUN', 'JOG', '🚀', '🐆'],
  },
  {
    categoryEmoji: '🤗',
    categoryName: 'Loving',
    difficulty: 4,
    items: ['HUG', '💕', '😘', '🥰'],
  },
]

export const DIFFICULTY_COLORS = {
  1: 'yellow',
  2: 'green',
  3: 'blue',
  4: 'purple',
}
