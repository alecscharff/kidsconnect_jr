import { motion } from 'framer-motion'

const colorClasses = {
  yellow: 'bg-solved-yellow',
  green: 'bg-solved-green',
  blue: 'bg-solved-blue',
  purple: 'bg-solved-purple',
}

function SolvedCategory({ category }) {
  const bgColor = colorClasses[category.color] || 'bg-gray-400'

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scaleY: 0 }}
      animate={{ opacity: 1, y: 0, scaleY: 1 }}
      exit={{ opacity: 0, y: -20, scaleY: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`
        ${bgColor}
        rounded-2xl p-3 mb-2
        text-center
        shadow-lg
      `}
    >
      <div className="text-3xl sm:text-4xl mb-1">
        {category.categoryEmoji}
      </div>
      <div className="text-2xl sm:text-3xl flex justify-center gap-2">
        {category.items.map((emoji, idx) => (
          <span key={idx}>{emoji}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default SolvedCategory
