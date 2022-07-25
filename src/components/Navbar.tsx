import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/planet/xd">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />
    </div>
  )
}

export default Navbar
