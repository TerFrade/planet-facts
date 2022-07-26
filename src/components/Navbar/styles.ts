import styled from "styled-components"

export const Container = styled.div`
  padding: 2rem 3.2rem;
  display: flex;
  justify-content: space-between;
  > * {
    flex-basis: 100%;
  }
`

export const Title = styled.div`
  text-transform: uppercase;
`

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    padding: 0.58rem 1rem;
    border: 1px solid black;
    color: black;
    font-size: 0.9375rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
  }
`
