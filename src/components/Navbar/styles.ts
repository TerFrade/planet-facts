import styled from "styled-components"

export const Container = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding: 2rem 3.2rem;
  display: flex;
  align-items: center;

  > * {
    flex-basis: 100%;
  }

  @media screen and (max-width: 1279px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`

export const Title = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
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

  @media screen and (max-width: 967px) {
    flex-direction: column;
  }
`
