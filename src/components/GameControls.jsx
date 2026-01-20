import { motion } from 'framer-motion'

function GameControls({
  onShuffle,
  onDeselectAll,
  onSubmit,
  canSubmit,
  canDeselect,
  gameStatus,
}) {
  const isDisabled = gameStatus !== 'playing'

  const buttonBase = `
    w-16 h-16 sm:w-20 sm:h-20 rounded-full
    text-3xl sm:text-4xl
    flex items-center justify-center
    shadow-lg
    transition-all duration-150
  `

  const getButtonClasses = (extraDisabled = false) => {
    if (isDisabled || extraDisabled) {
      return `${buttonBase} opacity-50 cursor-not-allowed bg-white/50`
    }
    return `${buttonBase} bg-white hover:scale-110 hover:shadow-xl active:scale-95`
  }

  return (
    <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 w-full">
      <motion.button
        onClick={onShuffle}
        disabled={isDisabled}
        whileTap={{ scale: 0.9, rotate: 180 }}
        className={getButtonClasses()}
        title="Shuffle"
      >
        🔀
      </motion.button>

      <motion.button
        onClick={onDeselectAll}
        disabled={isDisabled || !canDeselect}
        whileTap={{ scale: 0.9 }}
        className={getButtonClasses(!canDeselect)}
        title="Clear"
      >
        ❌
      </motion.button>

      <motion.button
        onClick={onSubmit}
        disabled={isDisabled || !canSubmit}
        whileTap={{ scale: 0.9 }}
        animate={canSubmit ? { scale: [1, 1.1, 1] } : {}}
        transition={{ repeat: canSubmit ? Infinity : 0, duration: 1 }}
        className={canSubmit && !isDisabled
          ? `${buttonBase} bg-green-400 hover:scale-110 hover:shadow-xl active:scale-95`
          : `${buttonBase} opacity-50 cursor-not-allowed bg-white/50`
        }
        title="Check"
      >
        ✅
      </motion.button>
    </div>
  )
}

export default GameControls
