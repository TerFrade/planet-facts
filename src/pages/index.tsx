import React from "react"

import Navbar from "../components/Navbar"
import Planet from "./Planet"

const App = () => {
  // eslint-disable-next-line no-console
  console.log("hello from App")
  return (
    <>
      <Navbar />
      <Planet />
    </>
  )
}

export default App
