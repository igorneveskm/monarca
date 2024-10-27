import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding:  0.9 8rem;

  > ul {
    text-transform: uppercase;
    align-items: center;
    flex-direction: row;
    list-style: none;
    display: flex;
    gap: 2.7rem;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;