import { useParams } from "react-router-dom"

export const useFindObject = (basedOf: string, collection: any[]) => {
  const params = useParams()[basedOf]

  const planet = collection.find((planet) => {
    return planet[basedOf].toLowerCase() == params
  })

  return planet
}
