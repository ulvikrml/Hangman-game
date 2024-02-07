const head = (
  <div key="head" className="h-[50px] w-[50px] border-[8px] rounded-full border-black absolute top-[48px] right-[-20px]"></div>
)
const body = (
  <div key="body" className="h-[80px] w-[10px] bg-black absolute top-[90px] right-0"></div>
)
const rightArm = (
  <div key="rightArm" className="h-[10px] w-[60px] bg-black absolute top-[120px] right-[-60px] rotate-[-30deg] origin-bottom-left"></div>
)
const leftArm = (
  <div key="leftArm" className="h-[10px] w-[60px] bg-black absolute top-[120px] right-[10px] rotate-[30deg] origin-bottom-right"></div>
)
const rightLeg = (
  <div key="rightLeg" className="h-[10px] w-[60px] bg-black absolute top-[160px] right-[-50px] rotate-[60deg] origin-bottom-left"></div>
)
const leftLeg = (
  <div key="leftLeg" className="h-[10px] w-[60px] bg-black absolute top-[160px] right-[0px] rotate-[-60deg] origin-bottom-right"></div>
)

const body_parts = [head, body, leftArm, rightArm, rightLeg, leftLeg]

type HangmanDrawingProps = {
  numberOfGuesses : number
}

const HangmanDrawing = ({numberOfGuesses} : HangmanDrawingProps) => {
  return (
    <div className="relative">
      {body_parts.slice(0,numberOfGuesses)}
      <div className="h-[50px] w-2 bg-black top-0 right-0 absolute"></div>
      <div className="h-2 w-[130px] bg-black ml-[80px]"></div>
      <div className="h-[250px] w-2 bg-black ml-[80px]"></div>
      <div className="h-2 w-[160px] bg-black "></div>
    </div>
  )
}

export default HangmanDrawing