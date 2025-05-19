import { useCalculator } from '@hooks/useCalculator'

import Body from '@components/Body'
import ButtonGrid from '@components/ButtonGrid'
import Screen from '@components/Screen'

import '@styles/global.css'

function Calculator() {
  const { display, buttons, handleButtonClick } = useCalculator()
  
  return (
    // Background
    <div className="w-screen h-screen flex items-center justify-center bg-slate-100">
      {/* Calculator */}
      <Body
        digital_screen={<Screen text_display={display} />}
        buttons={<ButtonGrid buttons={buttons} onButtonClick={handleButtonClick} />}
      />
    </div> 
  )
}

export default Calculator
