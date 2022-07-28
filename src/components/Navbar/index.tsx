import React from "react"
import { Link } from "react-router-dom"

import { Container, Title, Menu } from "../Navbar/styles"

type Props = {
  planetNames: string[]
}

const Navbar: React.FC<Props> = ({ planetNames }: Props) => {
  const renderLinks = () => {
    return planetNames.map((name, i) => (
      <Link key={i} to={`/${name.toLowerCase()}`}>
        {name}
      </Link>
    ))
  }
  return (
    <Container>
      <Title>The Planets</Title>
      <Menu>{renderLinks()}</Menu>
    </Container>
  )
}

export default Navbar
