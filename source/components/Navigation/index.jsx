import { Container } from "./styles";

import { Link } from "react-router-dom";

import MonarcaLogo from "../../assets/logo.png";

export function Navigation() {
  return (
    <Container>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#doencas-de-pele">Doenças de Pele</a></li>
        <li><a href="#casos-de-famosos">Caso de Famosos</a></li>
        <li><Link to="/rotina">Rotina</Link></li>
        <li><img src={MonarcaLogo} alt="Logo Monarca" /></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/dermatologista">Dermatologistas</Link></li>
        <li><a href="#ativos">Ingredientes</a></li>
        <li><Link to="/">App</Link></li>
      </ul>
    </Container>
  );
}