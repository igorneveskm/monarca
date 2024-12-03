import { Container } from "./styles";

import { Link } from "react-router-dom";

import MonarcaLogo from "../../assets/logo.png";

export function Navigation() {
	return (
		<Container>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="#doencas-de-pele">Doenças de Pele</Link>
				</li>
				<li>
					<Link to="/home#casos-de-famosos">Caso de Famosos</Link>
				</li>
				<li>
					<Link to="/rotina">Rotina</Link>
				</li>
				<li>
					<img src={MonarcaLogo} alt="Logo Monarca" />
				</li>
				<li>
					<Link to="/produtos">Produtos</Link>
				</li>
				<li>
					<Link to="/dermatologista">Dermatologistas</Link>
				</li>
				<li>
					<Link to={{ pathname: "/home", hash: "#ativos" }}>Ingredientes</Link>
				</li>
				<li>
					<a href="https://monarca.informatica3c.com.br/">Comunidade</a>
				</li>
			</ul>
		</Container>
	);
}

// https://monarca.informatica3c.com.br/

