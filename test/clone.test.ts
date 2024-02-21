import { clone } from "../src/clone"
import { test, expect, describe } from 'vitest'

describe('function clone', () => {
  test('correct cases', () => {
    // primitive
    expect(clone('a')).toBe('a')

    // array
    const arr = [1]
    const clonedArr = clone(arr)
    expect(clonedArr).not.toBe(arr)
    expect(clonedArr).toEqual(arr)

    // object
    const obj = { foo: { bar: 'baz' } }
    const clonedObj = clone(obj)
    expect(clonedObj).toEqual(obj)
  })

  test('edge cases', () => {
    expect(clone()).toBe(void 0)
    expect(clone(void 0)).toBe(void 0)
    expect(clone(null)).toBe(null)
  })
})