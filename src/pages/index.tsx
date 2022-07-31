import React from "react"

import Navbar from "../components/Navbar"
import RouteOutlet from "../components/RouteOutlet"
import { PlanetModel } from "../models"
import planets from "../planet-data.json"
import { getPropValues } from "../utils"

const App = () => {
  const planetData = getPropValues<PlanetModel>(["name", "images"], planets)
  return (
    <>
      <Navbar planetData={planetData} />
      <RouteOutlet planets={planets} />
    </>
  )
}

export default App
