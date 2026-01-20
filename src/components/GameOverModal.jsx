import { motion } from 'framer-motion'

const colorClasses = {
  yellow: 'bg-solved-yellow',
  green: 'bg-solved-green',
  blue: 'bg-solved-blue',
  purple: 'bg-solved-purple',
}

function GameOverModal({ status, onPlayAgain, onDismiss, solvedCategories }) {
  const isWin = status === 'won'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onDismiss}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.5, opacity: 0, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div 
          className="text-7xl sm:text-8xl mb-4"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: isWin ? [0, 10, -10, 0] : [0, -5, 5, 0]
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          {isWin ? '🎉' : '😢'}
        </motion.div>

        <div className="text-4xl mb-6">
          {isWin ? '⭐ 🌟 ⭐' : '💪 🔄 💪'}
        </div>

        <div className="mb-6 space-y-2">
          {solvedCategories.map((cat) => (
            <div
              key={cat.categoryName}
              className={`rounded-xl py-2 px-3 text-2xl ${colorClasses[cat.color] || ''}`}
            >
              {cat.categoryEmoji} {cat.items.join(' ')}
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <motion.button
            onClick={onPlayAgain}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="
              w-full py-4 rounded-2xl
              bg-gradient-to-r from-green-400 to-blue-500
              text-white text-3xl
              font-bold
              shadow-lg
              flex items-center justify-center gap-2
            "
          >
            🔄 <span className="text-2xl">Play Again!</span> 🎮
          </motion.button>
          <motion.button
            onClick={onDismiss}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="
              w-full py-3 rounded-2xl
              bg-white text-gray-700 text-2xl
              font-bold
              border-3 border-gray-300
              shadow-md
              flex items-center justify-center gap-2
            "
          >
            👀 <span className="text-xl">View Board</span> 🧩
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default GameOverModal
