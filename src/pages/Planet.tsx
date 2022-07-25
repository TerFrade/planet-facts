import React from "react"
import { useParams } from "react-router-dom"

export type Props = {
  planets:
    | {
        name: string
        overview: {
          content: string
          source: string
        }
        structure: {
          content: string
          source: string
        }
        geology: {
          content: string
          source: string
        }
        rotation: string
        revolution: string
        radius: string
        temperature: string
        images: {
          planet: string
          internal: string
          geology: string
        }
      }[]
}

const Planet: React.FC<Props> = ({ planets }: Props) => {
  const { name } = useParams()

  const planet = planets.find((planet) => {
    return planet.name.toLowerCase() == name
  })

  // eslint-disable-next-line no-console
  console.log(planet)

  return <div>{name}</div>
}

export default Planet
