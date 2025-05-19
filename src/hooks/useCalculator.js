import { useState } from 'react'
import buttons from '@utils/ArithmeticButtons'

export function useCalculator() {
  const [display, setDisplay] = useState("0")
  const [preValue, setPreValue] = useState("")
  const [operator, setOperator] = useState("")
  const [operatorWasClicked, setOperatorWasClicked] = useState(false)

  const handleButtonClick = (button) => {
    const { type, text, action } = button

    // Si el display está en ERROR, solo un número lo limpia
    if (display === 'ERROR') {
      if (type === 'number') {
        setDisplay(text)
        setPreValue("")
        setOperator("")
        setOperatorWasClicked(false)
      } else if (type === 'interaction') {
        if (text === 'AC') {
          setDisplay("0")
          setPreValue("")
          setOperator("")
          setOperatorWasClicked(false)
        }
      }
      return
    }

    if (type === 'number') {
      if (operatorWasClicked) {
        setDisplay(text)
        setOperatorWasClicked(false)
      } else if (display === '0') {
        setDisplay(text)
      } else if (display.length < 9) {
        setDisplay(display + text)
      } else {
        setDisplay('ERROR')
      }
    } else if (type === 'arithmetic') {
      if (operator && !operatorWasClicked) {
        const result = operator(parseFloat(preValue), parseFloat(display))
        const resStr = String(result)
        if (result < 0) {
          setDisplay('ERROR')
          setPreValue('')
          setOperator('')
          setOperatorWasClicked(false)
        } else if (resStr.length > 9) {
          setDisplay('ERROR')
          setPreValue('')
          setOperator('')
        } else {
          setDisplay(resStr)
          setPreValue(resStr)
          setOperator(() => action)
          setOperatorWasClicked(true)
        }
      } else {
        setPreValue(display)
        setOperator(() => action)
        setOperatorWasClicked(true)
      }
    } else if (type === 'interaction') {
      if (text === 'AC') {
        const result = action()
        setDisplay(String(result))
        setPreValue("")
        setOperator("")
        setOperatorWasClicked(false)
      } else if (text === '<-') {
        if (display.length > 1) {
          const result = action(display)
          setDisplay(result)
        } else {
          setDisplay('0')
        }
      }
    } else if (type === 'format') {
      if (text === '+/-') {
        const toggled = action(display) 
        
        if (toggled.length <= 9) {
            setDisplay(toggled)
        } else {
            setDisplay('ERROR')
        }
        
      } else if (text === '.') {
        if (operatorWasClicked) {
          setDisplay('0.')
          setOperatorWasClicked(false)
        } else if (!display.includes('.') && display.length < 9) {
          setDisplay(display + '.')
        }
      }
    } else if (type === 'equals') {
      if (operator) {
        const result = operator(parseFloat(preValue), parseFloat(display))
        const resStr = String(result)
        if (result < 0) {
          setDisplay('ERROR')
          setPreValue('')
          setOperator('')
          setOperatorWasClicked(false)
          return
        } else if (resStr.length > 9) {
          setDisplay('ERROR')
        } else {
          setDisplay(resStr)
        }
        setPreValue(resStr)
        setOperator('')
        setOperatorWasClicked(false)
      }
    }
  }

  return { display, buttons, handleButtonClick }
}
