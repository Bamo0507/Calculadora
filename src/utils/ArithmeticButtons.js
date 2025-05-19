import { sum, subtract, multiply, divide, modulus, clear, backspace, negate, decimal, inputNumber} from './Arithmetic'

const Operation_buttons = [
    {
        text: '+',
        action: sum,
        gridLocation: 11,
        type: 'arithmetic'
    },
    {
        text: '-',
        action: subtract,
        gridLocation: 15,
        type: 'arithmetic'
    },
    {
        text: '×',
        action: multiply,
        gridLocation: 7,
        type: 'arithmetic'
    },
    {
        text: '÷',
        action: divide,
        gridLocation: 3,
        type: 'arithmetic'
    },
    {
        text: 'mod',
        action: modulus,
        gridLocation: 2,
        type: 'arithmetic'
    },
    {
        text: '=',
        action: () => {},
        gridLocation: 19,
        type: 'equals'
    },
    {
        text: 'AC',
        action: clear,
        gridLocation: 0,
        type: 'interaction'
    },
    {
        text: '<-',
        action: backspace,
        gridLocation: 1,
        type: 'interaction'
    },
    {
        text: '+/-',
        action: negate,
        gridLocation: 16,
        type: 'format'
    },
    {
        text: '.',
        action: decimal,
        gridLocation: 18,
        type: 'format'
    },
    {
        text: '7',
        action: inputNumber,
        gridLocation: 4,
        type: 'number'
    },
    {
        text: '8',
        action: inputNumber,
        gridLocation: 5,
        type: 'number'
    },
    {
        text: '9',
        action: inputNumber,
        gridLocation: 6,
        type: 'number'
    },
    {
        text: '4',
        action: inputNumber,
        gridLocation: 8,
        type: 'number'
    },
    {
        text: '5',
        action: inputNumber,
        gridLocation: 9,
        type: 'number'
    },
    {
        text: '6',
        action: inputNumber,
        gridLocation: 10,
        type: 'number'
    },
    {
        text: '1',
        action: inputNumber,
        gridLocation: 12,
        type: 'number'
    },
    {
        text: '2',
        action: inputNumber,
        gridLocation: 13,
        type: 'number'
    },
    {
        text: '3',
        action: inputNumber,
        gridLocation: 14,
        type: 'number'
    },
    {
        text: '0',
        action: inputNumber,
        gridLocation: 17,
        type: 'number'
    }
]

export default Operation_buttons