type HangmanWordProps = {
  word: string,
  guessedLetters: string[],
  reveal: boolean
}

const HangmanWord = ({guessedLetters, word, reveal= false}: HangmanWordProps) => {

  return (
    <div>
      <div className="flex gap-1 text-5xl font-bold uppercase font-mono	">
        {word.split("").map((l, index) => (
          <span className="border-b-2 border-black" key={index}>
            <span className={guessedLetters.includes(l) ? 'visible' : reveal ? 'visible text-red-600' : 'invisible'}>{l}</span>
            </span>
        ))}
      </div>
    </div>
  )
}

export default HangmanWord