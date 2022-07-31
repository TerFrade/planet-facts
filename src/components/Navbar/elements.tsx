import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { PlanetModel } from "../../models"

export default function renderLinks(
  planetData: PlanetModel[],
  handleTogle: () => void
) {
  return planetData.map((planet, i) => (
    <NavLink
      key={i}
      className={({ isActive }) => (isActive ? "active" : "")}
      to={`/${planet.name.toLowerCase()}`}
      onClick={handleTogle}
    >
      <picture>
        <source
          media="(max-width: 996px)"
          srcSet={require(`../../assets/${planet.images.planet}`)}
        />
        <img width="25px" />
      </picture>
      {planet.name}
    </NavLink>
  ))
}

export const Container = styled.div`
  padding: 2rem 3.2rem;
  display: flex;
  align-items: center;

  > * {
    flex-basis: 100%;
    @media screen and (max-width: 996px) {
      flex-basis: unset;
    }
  }

  @media screen and (max-width: 1279px) {
    flex-direction: column;
    gap: 2.5rem;
  }

  @media screen and (max-width: 996px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media screen and (max-width: 405px) {
    flex-direction: column;
    gap: unset;
  }
`

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  @media screen and (max-width: 405px) {
    width: 100%;
    text-align: center;
  }
`
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 405px) {
    width: 100%;
    align-items: center;
  }

  label {
    display: none;
    font-size: 2.25rem;
    @media screen and (max-width: 996px) {
      display: unset;
    }
  }

  input[type="checkbox"] {
    display: none;
  }

  @media screen and (max-width: 996px) {
    input[type="checkbox"]:checked ~ div {
      display: none;
    }
  }
`

export const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  a {
    max-height: 40px;
    padding: 0.25rem 0.75rem;
    border-radius: 5px;
    letter-spacing: 0.1rem;
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;

    :hover {
      background-color: #6518ca8a;
      transition: 0.25s ease-out;
    }

    @media screen and (max-width: 996px) {
      padding: 0.25rem 3.75rem;
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

  a.active {
    background-color: #6518ca;
  }

  @media screen and (max-width: 996px) {
    position: absolute;
    flex-direction: column;
    top: 100px;
    right: 0%;
    width: 100%;
    background-color: #070724;
  }

  @media screen and (max-width: 405px) {
    top: 150px;
  }
`
