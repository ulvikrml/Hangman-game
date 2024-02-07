import { useState, useEffect, useCallback } from "react"
import words from './wordList.json'
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
  const [word, setWord] = useState<string>(words[Math.floor(Math.random() * words.length)])
  console.log(word);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !word.includes(letter))
  const correctLetters = guessedLetters.filter(letter => word.includes(letter))
  
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = correctLetters.length === Array.from(new Set(word.split(''))).length;

  const addGuessedLetter = useCallback((key: string) => {
    if (guessedLetters.includes(key) || isLoser || isWinner) return
    setGuessedLetters(prevState => [...prevState, key])

  }, [guessedLetters, isLoser, isWinner])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  const refreshEverything = () => {
    setGuessedLetters([]);
    setWord(words[Math.floor(Math.random() * words.length)])
  }

  return (
    <div className="max-w-800px flex flex-col gap-8 mx-auto items-center">
      <div className="text-2xl text-center mt-1">
        {isWinner || isLoser ? (
          <>
            {isWinner ? "Winner! - " : "Nice Try - "}
            <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700" onClick={refreshEverything}>
              New Game
            </button>{" "}
          </>
        ) : (
          "Lose || Win"
        )}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} word={word} />
      <Keyboard
        disable={isWinner || isLoser}
        activeLetters={correctLetters}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>

  )
}

export default App
