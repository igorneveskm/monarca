import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;
  height: max-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  /* border: 1px solid red; */

  img {
    height: 20rem;
  }

  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-transform: uppercase;
    text-align: center;
    margin: 3.6rem 0 0.9rem;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.ORANGE_900};
    font-family: 'Inter', sans-serif;
    color: white;
    padding: 1rem 2rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    margin: 0 auto;
    transition: all 0.2s;
  }

  a:hover {
    filter: brightness(0.9);
  }
`;