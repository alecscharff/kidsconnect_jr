import { AnimatePresence } from 'framer-motion'
import GameBoard from './components/GameBoard'
import GameControls from './components/GameControls'
import MistakesTracker from './components/MistakesTracker'
import Toast from './components/Toast'
import GameOverModal from './components/GameOverModal'
import SolvedCategory from './components/SolvedCategory'
import { useGameState } from './hooks/useGameState'

function App() {
  const {
    tiles,
    selectedTiles,
    solvedCategories,
    mistakes,
    gameStatus,
    toast,
    showModal,
    selectTile,
    deselectAll,
    shuffle,
    submitGuess,
    resetGame,
    dismissToast,
    dismissModal,
    openModal,
  } = useGameState()

  const gameOver = gameStatus === 'won' || gameStatus === 'lost'

  return (
    <div className="min-h-screen flex flex-col no-select">
      {/* Header with emoji title */}
      <header className="py-4 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white drop-shadow-lg">
          🧩 KidsConnect Jr 🧩
        </h1>
        <p className="text-white/80 text-lg mt-1">
          🔍 Find 4 that match! 🔍
        </p>
      </header>

      {/* Main Game Area */}
      <main className="flex-1 flex flex-col items-center px-3 py-2 max-w-[500px] mx-auto w-full">
        {/* Mistakes Tracker - emoji hearts */}
        <MistakesTracker mistakes={mistakes} maxMistakes={4} />

        {/* Solved Categories */}
        <div className="w-full mb-2">
          <AnimatePresence>
            {solvedCategories.map((category) => (
              <SolvedCategory key={category.categoryName} category={category} />
            ))}
          </AnimatePresence>
        </div>

        {/* Game Board */}
        <GameBoard
          tiles={tiles}
          selectedTiles={selectedTiles}
          onTileClick={selectTile}
          gameStatus={gameStatus}
        />

        {/* Game Controls - emoji buttons */}
        {!gameOver ? (
          <GameControls
            onShuffle={shuffle}
            onDeselectAll={deselectAll}
            onSubmit={submitGuess}
            canSubmit={selectedTiles.length === 4}
            canDeselect={selectedTiles.length > 0}
            gameStatus={gameStatus}
          />
        ) : !showModal && (
          <div className="w-full mt-4 flex justify-center gap-3">
            <button
              onClick={openModal}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl font-bold shadow-lg"
            >
              📊 Results
            </button>
            <button
              onClick={resetGame}
              className="px-5 py-3 rounded-2xl bg-white text-gray-700 text-xl font-bold border-2 border-gray-300 shadow-md"
            >
              🔄 Play Again
            </button>
          </div>
        )}
      </main>

      {/* Toast */}
      <AnimatePresence>
        {toast && <Toast message={toast} onDismiss={dismissToast} />}
      </AnimatePresence>

      {/* Game Over Modal */}
      <AnimatePresence>
        {showModal && (
          <GameOverModal
            status={gameStatus}
            onPlayAgain={resetGame}
            onDismiss={dismissModal}
            solvedCategories={solvedCategories}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
