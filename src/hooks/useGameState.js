import { useState, useCallback, useEffect } from 'react'
import { PUZZLES, DIFFICULTY_COLORS } from '../data/puzzles'

const MAX_MISTAKES = 4

// Shuffle array using Fisher-Yates
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Select 4 puzzles for a given phonics level:
//   level 0 → 4 from level 0
//   level 1+ → 3 from target level + 1 from a lower level
function selectPuzzlesForLevel(level) {
  const levelPuzzles = PUZZLES.filter(p => p.phonicsLevel === level)
  const lowerPuzzles = PUZZLES.filter(p => p.phonicsLevel < level)

  let selected
  if (level === 0 || lowerPuzzles.length === 0) {
    selected = shuffleArray(levelPuzzles).slice(0, 4)
  } else {
    const fromLevel = shuffleArray(levelPuzzles).slice(0, 3)
    const fromLower = shuffleArray(lowerPuzzles).slice(0, 1)
    selected = [...fromLevel, ...fromLower]
  }

  // Assign visual difficulty colors (yellow/green/blue/purple) by random position
  return shuffleArray(selected).map((p, i) => ({
    ...p,
    color: DIFFICULTY_COLORS[i + 1],
  }))
}

// Create tiles from categories
function createTiles(categories) {
  const tiles = []
  categories.forEach(cat => {
    cat.items.forEach(item => {
      tiles.push({
        id: `${cat.categoryName}-${item}`,
        emoji: item,
        categoryName: cat.categoryName,
        categoryEmoji: cat.categoryEmoji,
        phonicsLevel: cat.phonicsLevel,
        color: cat.color,
      })
    })
  })
  return tiles
}

export function useGameState() {
  const [currentLevel, setCurrentLevel] = useState(null) // null = show level select
  const [gameCategories, setGameCategories] = useState([])
  const [tiles, setTiles] = useState([])
  const [selectedTiles, setSelectedTiles] = useState([])
  const [solvedCategories, setSolvedCategories] = useState([])
  const [mistakes, setMistakes] = useState(0)
  const [gameStatus, setGameStatus] = useState('playing')
  const [toast, setToast] = useState(null)
  const [previousGuesses, setPreviousGuesses] = useState([])
  const [showModal, setShowModal] = useState(false)

  // Start a new game at the given level
  const startLevel = useCallback((level) => {
    const selected = selectPuzzlesForLevel(level)
    setCurrentLevel(level)
    setGameCategories(selected)
    setTiles(shuffleArray(createTiles(selected)))
    setSelectedTiles([])
    setSolvedCategories([])
    setMistakes(0)
    setPreviousGuesses([])
    setShowModal(false)
    setGameStatus('playing')
    setToast(null)
  }, [])

  // Replay the same level
  const resetGame = useCallback(() => {
    if (currentLevel !== null) startLevel(currentLevel)
  }, [currentLevel, startLevel])

  // Return to level select screen
  const goToLevelSelect = useCallback(() => {
    setCurrentLevel(null)
    setShowModal(false)
    setToast(null)
  }, [])

  // Select/deselect a tile
  const selectTile = useCallback((tileId) => {
    if (gameStatus !== 'playing') return
    setSelectedTiles(prev => {
      if (prev.includes(tileId)) return prev.filter(id => id !== tileId)
      if (prev.length >= 4) return prev
      return [...prev, tileId]
    })
  }, [gameStatus])

  // Deselect all
  const deselectAll = useCallback(() => {
    setSelectedTiles([])
  }, [])

  // Shuffle tiles
  const shuffle = useCallback(() => {
    setTiles(prev => shuffleArray([...prev]))
  }, [])

  // Submit guess
  const submitGuess = useCallback(() => {
    if (selectedTiles.length !== 4 || gameStatus !== 'playing') return

    const selectedObjects = tiles.filter(t => selectedTiles.includes(t.id))

    // Check for duplicate guess
    const guessKey = [...selectedTiles].sort().join(',')
    if (previousGuesses.includes(guessKey)) {
      setToast('🔄')
      return
    }
    setPreviousGuesses(prev => [...prev, guessKey])

    // Count categories
    const categoryCount = {}
    selectedObjects.forEach(tile => {
      categoryCount[tile.categoryName] = (categoryCount[tile.categoryName] || 0) + 1
    })

    const categories = Object.keys(categoryCount)
    const maxCount = Math.max(...Object.values(categoryCount))

    if (categories.length === 1 && maxCount === 4) {
      // Correct!
      const solved = gameCategories.find(c => c.categoryName === categories[0])
      setTiles(prev => prev.filter(t => !selectedTiles.includes(t.id)))
      setSolvedCategories(prev => {
        const newSolved = [...prev, solved]
        if (newSolved.length === 4) {
          setTimeout(() => {
            setGameStatus('won')
            setShowModal(true)
          }, 500)
        }
        return newSolved
      })
      setSelectedTiles([])
    } else {
      // Wrong
      const newMistakes = mistakes + 1
      setMistakes(newMistakes)
      if (maxCount === 3) setToast('☝️')
      setSelectedTiles([])

      if (newMistakes >= MAX_MISTAKES) {
        const remaining = gameCategories
          .filter(c => !solvedCategories.find(s => s.categoryName === c.categoryName))
          .sort((a, b) => a.phonicsLevel - b.phonicsLevel)
        setSolvedCategories(prev => [...prev, ...remaining])
        setTiles([])
        setTimeout(() => {
          setGameStatus('lost')
          setShowModal(true)
        }, 500)
      }
    }
  }, [selectedTiles, tiles, gameCategories, solvedCategories, mistakes, gameStatus, previousGuesses])

  // Dismiss toast
  const dismissToast = useCallback(() => setToast(null), [])

  // Dismiss modal (to view completed board)
  const dismissModal = useCallback(() => setShowModal(false), [])

  // Show modal again
  const openModal = useCallback(() => setShowModal(true), [])

  // Auto-dismiss toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 1500)
      return () => clearTimeout(timer)
    }
  }, [toast])

  return {
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
  }
}
