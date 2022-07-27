import React from "react"

import { useFindObject } from "../hooks"
import { Planet as PlanetModel } from "../models"
import PageNotFound from "./404"

export type Props = {
  planets: PlanetModel[]
}

const Planet: React.FC<Props> = ({ planets }: Props) => {
  const planet = useFindObject("name", planets) as PlanetModel

  if (!planet) return <PageNotFound />

  return <div>{planet.name}</div>
}

export default Planet
