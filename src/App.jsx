import { AnimatePresence } from 'framer-motion'
import GameBoard from './components/GameBoard'
import GameControls from './components/GameControls'
import MistakesTracker from './components/MistakesTracker'
import Toast from './components/Toast'
import GameOverModal from './components/GameOverModal'
import SolvedCategory from './components/SolvedCategory'
import LevelSelect from './components/LevelSelect'
import { useGameState } from './hooks/useGameState'
import { LEVEL_INFO } from './data/puzzles'

function App() {
  const {
    currentLevel,
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
    startLevel,
    resetGame,
    goToLevelSelect,
    dismissToast,
    dismissModal,
    openModal,
  } = useGameState()

  // Show level select when no level is chosen
  if (currentLevel === null) {
    return <LevelSelect onSelectLevel={startLevel} />
  }

  const levelInfo = LEVEL_INFO[currentLevel]
  const gameOver = gameStatus === 'won' || gameStatus === 'lost'

  return (
    <div className="min-h-screen flex flex-col no-select">
      {/* Header */}
      <header className="py-3 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-display font-extrabold text-white drop-shadow-lg">
          🧩 KidsConnect Jr 🧩
        </h1>
        {/* Level indicator + back button */}
        <div className="flex items-center justify-center gap-3 mt-1">
          <button
            onClick={goToLevelSelect}
            className="text-white/70 hover:text-white text-sm font-semibold px-2 py-1 rounded-lg hover:bg-white/20 transition-colors"
          >
            ← Levels
          </button>
          <span className="text-white/90 text-base font-semibold">
            {levelInfo.emoji} Level {currentLevel}: {levelInfo.name}
          </span>
        </div>
      </header>

      {/* Main Game Area */}
      <main className="flex-1 flex flex-col items-center px-3 py-2 max-w-[500px] mx-auto w-full">
        {/* Mistakes Tracker */}
        <MistakesTracker mistakes={mistakes} maxMistakes={3} />

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

        {/* Game Controls */}
        {!gameOver ? (
          <GameControls
            onShuffle={shuffle}
            onDeselectAll={deselectAll}
            onSubmit={submitGuess}
            canSubmit={selectedTiles.length === 3}
            canDeselect={selectedTiles.length > 0}
            gameStatus={gameStatus}
          />
        ) : !showModal && (
          <div className="w-full mt-4 flex justify-center gap-3 flex-wrap">
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
              🔄 Again
            </button>
            <button
              onClick={goToLevelSelect}
              className="px-5 py-3 rounded-2xl bg-white text-gray-700 text-xl font-bold border-2 border-gray-300 shadow-md"
            >
              🗺️ Levels
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
            onChangeLevel={goToLevelSelect}
            onDismiss={dismissModal}
            solvedCategories={solvedCategories}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
