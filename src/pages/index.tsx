import React from "react"

import Navbar from "../components/Navbar"
import RouteOutlet from "../components/RouteOutlet"
import planets from "../planet-data.json"

const App = () => {
  const planetNames = planets.map((planet) => {
    return planet.name
  })
  return (
    <>
      <Navbar planetNames={planetNames} />
      <RouteOutlet planets={planets} />
    </>
  )
}

export default App
