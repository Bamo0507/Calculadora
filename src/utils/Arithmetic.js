// Operations to be done on the calculator
const sum = (a, b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => {
    if (b === 0) {
        return 0
    }
    return a / b
}

const modulus = (a, b) => {
    if (b === 0) {
        return 0
    }
    return a % b
}

const clear = () => "0"

const backspace = (a) => {
    return a.slice(0, -1)
}

const negate = (a) => {
    if (a === '0') {
        return a
    }

    if (validateLength(a)) {
        return a.startsWith('-') ? a.slice(1) : '-' + a
    }

    return 'ERROR'
}

const decimal = (a) => {
    if(validateLength(a)) {
        return a.includes('.') ? a : a + '.'
    }
    return 'ERROR'
}

const inputNumber = (current, newNumber) => current + newNumber

const validateLength = (current) => {
    if (current.length > 9) {
        return false
    } else {
        return true
    }
}

export { sum, subtract, multiply, divide, modulus, clear, backspace, negate, decimal, inputNumber, validateLength }