export const GetLinks = (key: string, collection: any[]) => {
  return collection.map((item) => {
    return item[key]
  })
}
