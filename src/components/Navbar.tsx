import React from "react"

import { Routes, Route, Link } from "react-router-dom"

const Navbar = () => {
  // eslint-disable-next-line no-console
  console.log("hello from nav")
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/" element={<div>Hello Home</div>} />

        <Route path="/about" element={<div>Hello About</div>} />

        <Route path="/dashboard" element={<div>Hello Dashboard</div>} />
      </Routes>
    </div>
  )
}

export default Navbar
