import { motion } from 'framer-motion'

// Returns true if the string is an emoji/symbol rather than a plain word
function isEmoji(str) {
  return !/^[A-Z]{2,6}$/.test(str)
}

// Pick font size based on word length so longer words still fit the tile
function textSizeClass(word) {
  if (word.length <= 3) return 'text-3xl sm:text-4xl'
  if (word.length <= 4) return 'text-2xl sm:text-3xl'
  return 'text-lg sm:text-xl'
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

  const sizeClasses = isText
    ? `${textSizeClass(tile.emoji)} font-bold`
    : 'text-5xl sm:text-6xl'

  const disabledClasses = disabled ? 'cursor-not-allowed opacity-50' : ''
  const selectedClasses = isSelected
    ? 'bg-tile-selected scale-95 shadow-inner'
    : 'bg-white hover:scale-105 hover:shadow-xl active:scale-95'

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
