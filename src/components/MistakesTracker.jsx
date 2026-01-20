import { motion, AnimatePresence } from 'framer-motion'

function MistakesTracker({ mistakes, maxMistakes }) {
  const remaining = maxMistakes - mistakes

  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <AnimatePresence mode="popLayout">
        {Array.from({ length: remaining }).map((_, i) => (
          <motion.span
            key={`heart-${i}`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="text-3xl sm:text-4xl"
          >
            ❤️
          </motion.span>
        ))}
      </AnimatePresence>
      {remaining === 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-3xl sm:text-4xl"
        >
          💔
        </motion.span>
      )}
    </div>
  )
}

export default MistakesTracker
