import { motion, AnimatePresence } from 'framer-motion'
import Tile from './Tile'

function GameBoard({ tiles, selectedTiles, onTileClick, gameStatus }) {
  const isDisabled = gameStatus !== 'playing'

  return (
    <motion.div
      className="w-full grid grid-cols-3 gap-3 sm:gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="popLayout">
        {tiles.map((tile) => (
          <Tile
            key={tile.id}
            tile={tile}
            isSelected={selectedTiles.includes(tile.id)}
            onClick={onTileClick}
            disabled={isDisabled}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default GameBoard
