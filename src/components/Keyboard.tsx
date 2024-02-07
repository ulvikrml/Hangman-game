const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessedLetter: (key:string)=>void,
  disable: boolean
}

const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter, disable}: KeyboardProps) => {
  return (
    <div className="self-stretch w-[300px] sm-w-[600px] mx-auto">
      <div className="grid grid-cols-5 sm-grid-cols-10 gap-4">
        {KEYS.map((i, index) => {
          const isActive = activeLetters.includes(i)
          const isInactive = inactiveLetters.includes(i)
          return <button onClick={()=>addGuessedLetter(i)} disabled={isActive || isInactive || disable} className={`${isActive ? 'bg-[#0099FF] text-white opacity-75' : ''}  ${isInactive ? 'opacity-[0.2]' : ''} border-2  border-black w-12 h-12 uppercase font-bold text-lg cursor-pointer hover:bg-[#80D4FF] hover:text-white active:bg-[#0099FF] active:text-white active:opacity-100 opacity-45`} key={index}>{i}</button>
        })}
      </div>
    </div>
  )
}

export default Keyboard