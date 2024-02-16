export function isObject(value: any) {
  return value != null && type(value) === 'Object'
}

export function type(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}