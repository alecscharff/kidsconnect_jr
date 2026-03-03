import { motion } from 'framer-motion'
import { LEVEL_INFO } from '../data/puzzles'

function LevelSelect({ onSelectLevel }) {
  return (
    <div className="min-h-screen flex flex-col no-select">
      {/* Header */}
      <header className="py-5 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white drop-shadow-lg">
          🧩 KidsConnect Jr 🧩
        </h1>
        <p className="text-white/80 text-xl mt-2 font-semibold">
          Choose Your Level!
        </p>
      </header>

      {/* Level Buttons */}
      <main className="flex-1 flex flex-col items-center px-4 pb-8 max-w-md mx-auto w-full gap-3">
        {LEVEL_INFO.map((info, idx) => (
          <motion.button
            key={info.level}
            onClick={() => onSelectLevel(info.level)}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.07, type: 'spring', stiffness: 260, damping: 20 }}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
            className={`
              w-full rounded-2xl px-4 py-3
              bg-gradient-to-r ${info.color}
              text-white shadow-lg
              flex items-center gap-4
              text-left
            `}
          >
            {/* Level emoji icon */}
            <span className="text-4xl flex-shrink-0 w-12 text-center">
              {info.emoji}
            </span>

            {/* Text block */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-bold opacity-75 uppercase tracking-wider">
                  Level {info.level}
                </span>
                <span className="text-xl font-bold leading-tight">
                  {info.name}
                </span>
              </div>
              <div className="text-sm opacity-90 mt-0.5">
                {info.description}
              </div>
            </div>

            {/* Arrow */}
            <span className="text-2xl flex-shrink-0 opacity-80">▶</span>
          </motion.button>
        ))}
      </main>
    </div>
  )
}

export default LevelSelect
