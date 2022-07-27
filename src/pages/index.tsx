import React from "react"

import Navbar from "../components/Navbar"
import RouteOutlet from "../components/RouteOutlet"
import planets from "../planet-data.json"
import { getLinks } from "../utils"

const App = () => {
  const planetNames = getLinks("name", planets)
  return (
    <>
      <Navbar planetNames={planetNames} />
      <RouteOutlet planets={planets} />
    </>
  )
}

export default App
