export function getPropValues<T>(
  allowedProperties: string[],
  collection: T[]
): T[] {
  const result = collection.map((item: any) => {
    return Object.keys(item).reduce((next, key) => {
      if (allowedProperties.includes(key)) {
        return { ...next, [key]: item[key] }
      } else {
        return next
      }
    }, {})
  })

  return result as T[]
}
