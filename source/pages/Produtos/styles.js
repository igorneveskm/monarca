import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: row;
    padding: 5.4rem 6.7rem;
  }

  aside {
    width: 25.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-transform: uppercase;
      margin: 0.9rem 0 1.7rem;
    }

    .input-wrapper {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      align-items: center;
      text-transform: uppercase;
    }

    .filterOptions {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-bottom: 2.6rem;
    }

    .filterOptions:nth-child(3) {
      border-bottom: 3px solid ${({ theme }) => theme.COLORS.ORANGE_900};
    }
  }

  section {
    margin: 0 8.7rem;
    display: flex;
    flex-direction: row;
    gap: 6.5rem;
    flex-wrap: wrap;
    width: 100%;
  }

  title {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 0.8rem;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.ORANGE_900};
    padding-bottom: 0.9rem;

    img {
      height: 3.3rem;
      width: 2.6rem;
    }
    
    h2 {
      text-transform: uppercase;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1.4rem;
    }
  }

`;

export const TitlePage = styled.div`
	background-color: ${({ theme }) => theme.COLORS.ORANGE_900};
	color: #ffffff;
	font-family: "Inter", sans-serif;
	text-transform: uppercase;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	padding: 2rem 0;
	display: flex;
	font-weight: 400;
	font-size: 2.4rem;
`;
