import React from "react"
import { Routes, Route } from "react-router-dom"

import Planet from "./Planet"

const RouteOutlet = () => {
  return (
    <Routes>
      <Route path="/" element={<Planet />} />
      <Route path="/about" element={<div>Hello About</div>} />
      <Route path="/dashboard" element={<div>Hello Dashboard</div>} />
    </Routes>
  )
}

export default RouteOutlet
