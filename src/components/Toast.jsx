import { motion } from 'framer-motion'

function Toast({ message, onDismiss }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        onClick={onDismiss}
        className="
          bg-white text-6xl
          px-6 py-4 rounded-2xl
          shadow-2xl cursor-pointer
          hover:scale-105 transition-transform
        "
      >
        {message}
      </div>
    </motion.div>
  )
}

export default Toast
