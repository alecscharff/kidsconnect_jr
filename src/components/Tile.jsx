import { motion } from 'framer-motion'

// Check if a string is an emoji (not plain text)
function isEmoji(str) {
  // Emojis are typically longer than 3 chars when encoded, or contain special unicode
  // Simple check: if it's 3 uppercase letters, it's a word
  return !/^[A-Z]{2,4}$/.test(str)
}

function Tile({ tile, isSelected, onClick, disabled }) {
  const isText = !isEmoji(tile.emoji)

  const baseClasses = `
    aspect-square w-full rounded-2xl
    flex items-center justify-center
    transition-all duration-150
    select-none cursor-pointer
    shadow-lg
  `

  // Text tiles get smaller font, emojis stay large
  const sizeClasses = isText
    ? 'text-2xl sm:text-3xl md:text-4xl font-bold'
    : 'text-4xl sm:text-5xl md:text-6xl'

  const disabledClasses = disabled ? 'cursor-not-allowed opacity-50' : ''
  const selectedClasses = isSelected
    ? 'bg-tile-selected scale-95 shadow-inner'
    : 'bg-white hover:scale-105 hover:shadow-xl active:scale-95'

  // Text tiles get colored text when selected
  const textColorClass = isText
    ? (isSelected ? 'text-white' : 'text-gray-800')
    : ''

  return (
    <motion.button
      onClick={() => !disabled && onClick(tile.id)}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses} ${disabledClasses} ${selectedClasses} ${textColorClass}`}
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <span>{tile.emoji}</span>
    </motion.button>
  )
}

export default Tile
