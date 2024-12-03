import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  height: 100vh;
  width: 100%;

  main {
    justify-content: center;
    flex-direction: column;
    margin: 6.4rem auto;
    align-items: center;
    max-width: 119rem;
    display: flex;
    gap: 5rem;
  }

  @media (max-width: 768px) {
    main {
      margin: 4rem auto;
      gap: 3rem;
      padding: 0 2rem;
    }
  }

  @media (max-width: 480px) {
    main {
      margin: 2rem auto;
      gap: 2rem;
      padding: 0 1rem;
    }
  }
`;

export const TitlePage = styled.div`
  background-color: ${({ theme }) => theme.COLORS.ORANGE_900};
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 2rem 0;
  display: flex;
  font-weight: 400;
  font-size: 2.4rem;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 1.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    padding: 1rem 0;
  }
`;

export const Item = styled.div`
  font-family: "Inter", sans-serif;
  flex-direction: column;
  font-weight: 400;
  display: flex;

  h2 {
    color: ${({ theme }) => theme.COLORS.ORANGE_900};
    margin-bottom: 2rem;
    font-size: 3.6rem;
  }

  p {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;
