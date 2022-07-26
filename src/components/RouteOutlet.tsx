import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import PageNotFound from "../pages/404"
import Planet, { Props } from "../pages/Planet"

const RouteOutlet: React.FC<Props> = ({ planets }: Props) => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/*" element={<Navigate to="/planet/earth" />} />
        <Route path="/planet/:name" element={<Planet planets={planets} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default RouteOutlet
