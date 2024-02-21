import { isObject } from "./type"

export function clone(value?: any) {
  if (!isObject(value)) {
    return value
  }
  const result: { [key: string]: any } = Array.isArray(value) ? [] : {}

  for (const key in value) {
    if (isObject(value[key])) {
      result[key] = clone(value[key])
    } else {
      result[key] = value[key]
    }
  }
  
  return result
}