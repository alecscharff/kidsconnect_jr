import { motion } from 'framer-motion'

function Tile({ tile, isSelected, onClick, disabled }) {
  const baseClasses = `
    aspect-square w-full rounded-2xl
    text-4xl sm:text-5xl md:text-6xl
    flex items-center justify-center
    transition-all duration-150
    select-none cursor-pointer
    shadow-lg
  `
  
  const disabledClasses = disabled ? 'cursor-not-allowed opacity-50' : ''
  const selectedClasses = isSelected
    ? 'bg-tile-selected scale-95 shadow-inner'
    : 'bg-white hover:scale-105 hover:shadow-xl active:scale-95'

  return (
    <motion.button
      onClick={() => !disabled && onClick(tile.id)}
      disabled={disabled}
      className={`${baseClasses} ${disabledClasses} ${selectedClasses}`}
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
