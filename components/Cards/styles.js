import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  flex-direction: column;
  border: 0.5rem solid ${({ theme }) => theme.COLORS.ORANGE_900 };
  border-radius: 2.5rem;
  align-items: center;
  display: flex;
  width: 30rem;

  > img {
    width: 36.6rem;
    height: 30.3rem;
  }

  > span {
    text-transform: uppercase;
    margin: 0 0 4.1rem;
  }

  > a {
    background-color: ${({ theme }) => theme.COLORS.ORANGE_900};
    text-transform: uppercase;
    padding: 1.4rem 3.2rem;
    margin-bottom: 2.7rem;
    border-radius: 5rem;
    color: white;
  }
`;