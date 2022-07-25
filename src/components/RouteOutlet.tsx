import React from "react"

import { Routes, Route, Navigate } from "react-router-dom"

import PageNotFound from "../pages/404"
import Planet from "../pages/Planet"

const RouteOutlet = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/planet/earth" />} />
      <Route path="/planet/:name" element={<Planet />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default RouteOutlet
