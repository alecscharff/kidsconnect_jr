import { useState, useEffect, useCallback } from 'react'
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

// Select one random puzzle from each difficulty level
function selectRandomPuzzles() {
  const byDifficulty = { 1: [], 2: [], 3: [], 4: [] }
  
  PUZZLES.forEach(puzzle => {
    if (byDifficulty[puzzle.difficulty]) {
      byDifficulty[puzzle.difficulty].push(puzzle)
    }
  })

  const selected = []
  for (let d = 1; d <= 4; d++) {
    const pool = byDifficulty[d]
    if (pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length)
      selected.push({
        ...pool[idx],
        color: DIFFICULTY_COLORS[d],
      })
    }
  }

  return selected
}

// Create tiles from categories
function createTiles(categories) {
  const tiles = []
  categories.forEach(cat => {
    cat.items.forEach(emoji => {
      tiles.push({
        id: `${cat.categoryName}-${emoji}`,
        emoji,
        categoryName: cat.categoryName,
        categoryEmoji: cat.categoryEmoji,
        difficulty: cat.difficulty,
        color: cat.color,
      })
    })
  })
  return tiles
}

export function useGameState() {
  const [gameCategories, setGameCategories] = useState([])
  const [tiles, setTiles] = useState([])
  const [selectedTiles, setSelectedTiles] = useState([])
  const [solvedCategories, setSolvedCategories] = useState([])
  const [mistakes, setMistakes] = useState(0)
  const [gameStatus, setGameStatus] = useState('playing')
  const [toast, setToast] = useState(null)
  const [previousGuesses, setPreviousGuesses] = useState([])

  // Initialize game
  const initializeGame = useCallback(() => {
    const selected = selectRandomPuzzles()
    setGameCategories(selected)
    setTiles(shuffleArray(createTiles(selected)))
    setSelectedTiles([])
    setSolvedCategories([])
    setMistakes(0)
    setPreviousGuesses([])
    setGameStatus('playing')
    setToast(null)
  }, [])

  // Start game on mount
  useEffect(() => {
    initializeGame()
  }, [initializeGame])

  // Select/deselect a tile
  const selectTile = useCallback((tileId) => {
    if (gameStatus !== 'playing') return

    setSelectedTiles(prev => {
      if (prev.includes(tileId)) {
        return prev.filter(id => id !== tileId)
      } else {
        if (prev.length >= 4) return prev
        return [...prev, tileId]
      }
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
        const newSolved = [...prev, solved].sort((a, b) => a.difficulty - b.difficulty)
        if (newSolved.length === 4) {
          setTimeout(() => setGameStatus('won'), 500)
        }
        return newSolved
      })
      setSelectedTiles([])
    } else {
      // Wrong
      const newMistakes = mistakes + 1
      setMistakes(newMistakes)

      if (maxCount === 3) {
        setToast('☝️')
      }

      setSelectedTiles([])

      if (newMistakes >= MAX_MISTAKES) {
        const remaining = gameCategories.filter(
          c => !solvedCategories.find(s => s.categoryName === c.categoryName)
        )
        setSolvedCategories(prev => 
          [...prev, ...remaining].sort((a, b) => a.difficulty - b.difficulty)
        )
        setTiles([])
        setTimeout(() => setGameStatus('lost'), 500)
      }
    }
  }, [selectedTiles, tiles, gameCategories, solvedCategories, mistakes, gameStatus, previousGuesses])

  // Dismiss toast
  const dismissToast = useCallback(() => setToast(null), [])

  // Auto-dismiss toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 1500)
      return () => clearTimeout(timer)
    }
  }, [toast])

  return {
    tiles,
    selectedTiles,
    solvedCategories,
    mistakes,
    gameStatus,
    toast,
    selectTile,
    deselectAll,
    shuffle,
    submitGuess,
    resetGame: initializeGame,
    dismissToast,
  }
}
