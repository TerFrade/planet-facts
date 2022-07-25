import React from "react"
import { Link } from "react-router-dom"

type Props = {
  planetNames: string[]
}

const Navbar: React.FC<Props> = ({ planetNames }: Props) => {
  const renderLinks = () => {
    return planetNames.map((name, i) => (
      <li key={i}>
        <Link to={`/planet/${name.toLowerCase()}`}>{name}</Link>
      </li>
    ))
  }
  return (
    <div>
      <ul>{renderLinks()}</ul>
      <hr />
    </div>
  )
}

export default Navbar
