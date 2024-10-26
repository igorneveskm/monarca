import { Container } from "./styles";

import logo from "../../assets/logo.png";

export function Footer() {
	return (
		<Container>
			<div>
				<span>
					Acompanhe a gente em nossas redes sociais ou entre em contato em
				</span>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<a href="#">Baixe nosso App</a>
					</li>
				</ul>
			</div>
			<div>
				<img src={logo} alt="Logo Monarca" />
			</div>
		</Container>
	);
}
