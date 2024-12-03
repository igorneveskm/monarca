import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  main {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    justify-content: center;
    align-items: center;
    padding: 8rem;
    gap: 20rem;
    flex-wrap: wrap;
  }

  .left {
    width: 100%;
    max-width: 400px;
    position: relative;

    #squareOne {
      width: 32rem;
      height: 32rem;
      border: 16px solid #fb5009;
      position: relative;
    }

    #squareTwo {
      width: 32rem;
      height: 32rem;
      border: 16px solid ${({ theme }) => theme.COLORS.ORANGE_900};
      position: absolute;
      top: 10%; /* Mantém a imagem na posição original */
      left: 50%;
      transform: translateX(-50%); /* Alinha a imagem no centro */
      background-color: #ffffff;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Faz com que a imagem ocupe toda a área do contêiner */
      }
    }
  }

  .right {
    h2 {
      font-size: 3.2rem;
      font-family: "Inter", sans-serif;
      font-weight: 400;
      text-transform: uppercase;
    }

    h3 {
      font-size: 1.6rem;
      font-family: "Inter", sans-serif;
      font-weight: 400;
      margin: 3.1rem 0;
    }

    ul {
      margin-left: 2rem;
      font-family: "Inter", sans-serif;
      list-style-type: none; /* Remove os números da lista */
      padding-left: 0; /* Remove o recuo da lista */
    }

    ul li {
      margin-bottom: 1rem; /* Espaçamento entre os itens da lista */
    }
  }

  .social-media {
    margin-top: 2.5rem;
  }

  .social-media ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 1.8rem;
    margin-top: 2rem;
  }

  .social-media ul li {
    border-radius: 50%;
    background-color: red;
    height: 5rem;
    width: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .social-media ul li a {
    color: white;
  }

  .social-media ul li:nth-child(odd) {
    background-color: ${({ theme }) => theme.COLORS.ORANGE_900};
  }

  .social-media ul li:nth-child(even) {
    background-color: ${({ theme }) => theme.COLORS.RED_900};
  }

  @media (max-width: 1024px) {
    main {
      flex-direction: column;
      gap: 2rem;
      padding: 4rem;
    }

    .left {
      max-width: 100%;
      margin-bottom: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .left #squareTwo {
      top: 60%; /* Move a imagem para baixo em telas menores */
    }

    .right {
      h2 {
        font-size: 2.4rem;
      }

      h3 {
        font-size: 1.4rem;
      }

      ul {
        font-size: 1.4rem;
      }
    }

    .social-media ul {
      flex-direction: column;
      align-items: center;
    }

    .social-media ul li {
      height: 4rem;
      width: 4rem;
    }
  }

  @media (max-width: 768px) {
    main {
      padding: 2rem;
    }

    .left #squareOne {
      width: 20rem;
      height: 20rem;
    }

    .left #squareTwo {
      width: 20rem;
      height: 20rem;
      margin-top: -15rem;
    }

    .right {
      h2 {
        font-size: 2rem;
      }

      h3 {
        font-size: 1.2rem;
      }

      ul {
        font-size: 1.2rem;
      }
    }

    .social-media ul li {
      height: 3.5rem;
      width: 3.5rem;
    }
  }

  @media (max-width: 480px) {
    .left #squareOne {
      width: 16rem;
      height: 16rem;
    }

    .left #squareTwo {
      width: 16rem;
      height: 16rem;
      margin-top: -10rem;
    }

    .right {
      h2 {
        font-size: 1.8rem;
      }

      h3 {
        font-size: 1rem;
      }

      ul {
        font-size: 1rem;
      }
    }

    .social-media ul li {
      height: 3rem;
      width: 3rem;
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;
