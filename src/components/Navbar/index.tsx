import React from "react"
import { Link } from "react-router-dom"

import { Container, Title, Nav } from "../Navbar/styles"

type Props = {
  planetNames: string[]
}

const Navbar: React.FC<Props> = ({ planetNames }: Props) => {
  const renderLinks = () => {
    return planetNames.map((name, i) => (
      <Link key={i} to={`/planet/${name.toLowerCase()}`}>
        {name}
      </Link>
    ))
  }
  return (
    <Container>
      <Title>The Planets</Title>
      <Nav>{renderLinks()}</Nav>
    </Container>
  )
}

export default Navbar
