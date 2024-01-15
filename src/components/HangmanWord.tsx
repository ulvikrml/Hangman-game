const HangmanWord = () => {
  const word = 'test'
  const guessedLetters=['e']
  return (
    <div>
      <div className="flex gap-1 text-6xl font-bold uppercase font-mono	">
        {word.split("").map((l, index) => (
          <span className="border-b-2 border-black" key={index}>
            <span className={guessedLetters.includes(l) ? 'invisible' : 'visible'}>{l}</span>
            </span>
        ))}
      </div>
    </div>
  )
}

export default HangmanWord