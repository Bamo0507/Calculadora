import { sum, subtract, multiply, divide, modulus, clear, backspace, negate, decimal, validateLength, inputNumber} from '@utils/Arithmetic'
import { it, expect } from '@jest/globals'

it('sums numbers', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(-5, 10)).toBe(5)
    expect(sum(0, 0)).toBe(0)
})

it('subtracts numbers', () => {
    expect(subtract(5, 2)).toBe(3)
    expect(subtract(-5, -10)).toBe(5)
    expect(subtract(0, 0)).toBe(0)
})

it('multiplies numbers', () => {
    expect(multiply(5, 2)).toBe(10)
    expect(multiply(-5, -10)).toBe(50)
    expect(multiply(0, 0)).toBe(0)
})

it('divides numbers', () => {
    expect(divide(10, 2)).toBe(5)
    expect(divide(-10, -2)).toBe(5)
    expect(divide(0, 1)).toBe(0)
    expect(divide(1, 0)).toBe(0)
})

it('modulus numbers', () => {
    expect(modulus(10, 3)).toBe(1)
    expect(modulus(10, 3)).toBe(1)
    expect(modulus(0, 1)).toBe(0)
    expect(modulus(1, 0)).toBe(0)
})

it('clears the screen', () => {
    expect(clear()).toBe('0')
})

it('backspaces the screen', () => {
    expect(backspace('1234')).toBe('123')
    expect(backspace('0')).toBe('')
})

it('negates number', () => {
    expect(negate('1234')).toBe('-1234')
    expect(negate('-1234')).toBe('1234')
    expect(negate('0')).toBe('0')
})

it('adds decimal', () => {
    expect(decimal('1234')).toBe('1234.')
    expect(decimal('1234.')).toBe('1234.')
    expect(decimal('0')).toBe('0.')
})

it('inputs number', () => {
    expect(inputNumber('1234', '5')).toBe('12345')
    expect(inputNumber('0', '5')).toBe('05')
    expect(inputNumber('', '5')).toBe('5')
})

it('validates length', () => {
    expect(validateLength('123456789')).toBe(true)
    expect(validateLength('1234567890')).toBe(false)
    expect(validateLength('12345678.9')).toBe(false)
})

