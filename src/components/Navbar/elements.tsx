import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function renderLinks(planetData: any[]) {
  return planetData.map((planet, i) => (
    <Link key={i} to={`/${planet.name.toLowerCase()}`}>
      <picture>
        <source
          media="(max-width: 996px)"
          srcSet={require(`../../assets/${planet.images.planet}`)}
        />
        <img width="25px" />
      </picture>
      {planet.name}
    </Link>
  ))
}

export const Container = styled.div`
  padding: 2rem 3.2rem;
  display: flex;
  align-items: center;

  > * {
    flex-basis: 100%;
  }

  @media screen and (max-width: 996px) {
    align-items: flex-start;
  }

  @media screen and (max-width: 1279px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  a {
    max-height: 40px;
    padding: 0.25rem 0.75rem;
    letter-spacing: 0.1rem;
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    :hover {
      background-color: #6518ca;
    }

    img {
      display: none;

      @media screen and (max-width: 996px) {
        display: unset;
        vertical-align: middle;
        margin-right: 0.75rem;
      }
    }
  }

  @media screen and (max-width: 996px) {
    flex-direction: column;
    width: 100%;
  }
`
