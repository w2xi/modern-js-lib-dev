export function isObject(value: any) {
  return value != null && typeof value === 'object'
}

export function isNumber(value: any) {
  return typeof value === 'number'
}

export function isString(value: any) {
  return typeof value === 'string'
}

export function type(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}