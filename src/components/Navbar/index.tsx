import React, { useCallback, useState } from "react"

import { PlanetModel } from "../../models"
import renderLinks, { Container, Title, Menu, MenuItems } from "./elements"

type Props = {
  planetData: PlanetModel[]
}

const Navbar: React.FC<Props> = ({ planetData }: Props) => {
  const [isToggled, setIsToggled] = useState(false)

  const handleTogle = useCallback(() => {
    setIsToggled(!isToggled)
  }, [isToggled])

  return (
    <Container>
      <Title>The Planets</Title>
      <Menu>
        <label htmlFor="menu" onClick={handleTogle}>
          &#8801;
        </label>
        <input type="checkbox" name="menu" id="menu" checked={isToggled} />
        <MenuItems>{renderLinks(planetData, handleTogle)}</MenuItems>
      </Menu>
    </Container>
  )
}

export default Navbar
