import styled from "styled-components"

export const Container = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding: 2rem 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    flex-basis: 100%;
  }
`

export const Title = styled.div``

export const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    padding: 0.25rem 0.75rem;
    letter-spacing: 0.1rem;
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    :hover {
      background-color: #6518ca;
    }
  }
`
