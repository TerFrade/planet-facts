import React from "react"

import { PlanetModel } from "../../models"
import renderLinks, { Container, Title, MenuItems } from "./elements"

type Props = {
  planetData: PlanetModel[]
}

const Navbar: React.FC<Props> = ({ planetData }: Props) => {
  return (
    <Container>
      <Title>The Planets</Title>
      <MenuItems>{renderLinks(planetData)}</MenuItems>
    </Container>
  )
}

export default Navbar
