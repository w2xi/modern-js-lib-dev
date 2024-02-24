import { type } from '../src/type'
import { describe, expect, test } from 'vitest'

describe('type function', () => {
  test('number type', () => {
    expect(type(1)).toBe('number')
  })

  test('string type', () => {
    expect(type('a')).toBe('string')
  })

  test('undefined type', () => {
    expect(type(void 0)).toBe('undefined')
  })

  test('null type', () => {
    expect(type(null)).toBe('null')
  })

  test('symbol type', () => {
    expect(type(Symbol())).toBe('symbol')
  })

  test('object type', () => {
    expect(type({ a: 1 })).toBe('object')
  })
})
