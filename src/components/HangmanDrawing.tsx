const head = (
  <div className="h-[60px] w-[60px] border-[8px] rounded-full border-black absolute top-[48px] right-[-25px]"></div>
)
const body = (
  <div className="h-[100px] w-[10px] bg-black absolute top-[105px] right-0"></div>
)
const rightArm = (
  <div className="h-[10px] w-[80px] bg-black absolute top-[150px] right-[-80px] rotate-[-30deg] origin-bottom-left"></div>
)
const leftArm = (
  <div className="h-[10px] w-[80px] bg-black absolute top-[150px] right-[10px] rotate-[30deg] origin-bottom-right"></div>
)
const rightLeg = (
  <div className="h-[10px] w-[80px] bg-black absolute top-[190px] right-[-70px] rotate-[60deg] origin-bottom-left"></div>
)
const leftLeg = (
  <div className="h-[10px] w-[80px] bg-black absolute top-[190px] right-[0px] rotate-[-60deg] origin-bottom-right"></div>
)

const body_parts = [head, body, leftArm, rightArm, rightLeg, leftLeg]

const HangmanDrawing = () => {
  return (
    <div className="relative">
      {head}
      {body}
      {rightArm}
      {leftArm}
      {rightLeg}
      {leftLeg}
      <div className="h-[50px] w-2 bg-black top-0 right-0 absolute"></div>
      <div className="h-2 w-[200px] bg-black ml-[120px]"></div>
      <div className="h-[350px] w-2 bg-black ml-[120px]"></div>
      <div className="h-2 w-64 bg-black "></div>
    </div>
  )
}

export default HangmanDrawing