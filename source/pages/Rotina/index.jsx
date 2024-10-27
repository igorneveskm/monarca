import { Container, TitlePage } from "./styles";

import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

import sunIco from "../../assets/sun.svg";
import moonIco from "../../assets/moon.svg";

export function Rotina() {
	return (
		<Container>
			<Navigation />
			<TitlePage>Rotina</TitlePage>
			<div className="extra-info">
				<div className="info">
					<div className="square"></div>
					<p>Itens para uma rotina básica de skin care</p>
				</div>
				<h2>
					Não tem uma rotina de skin care?
					<br />
					Faça o nosso <span>quiz</span> em nosso app ou entre em contato com
					nosso
					<span> dermatologista parceiro</span>.
				</h2>
			</div>
			<main>
				<div className="icon">
					<img src={sunIco} alt="ícone do sol" />
					<h2>Manhã</h2>
				</div>
				<ul>
					<li>1. Limpeza</li>
					<li>2. Hidratação</li>
					<li>3. Proteção Solar</li>
				</ul>
				<div className="icon">
					<img src={moonIco} alt="ícone da lua" />
					<h2>Noite</h2>
				</div>
				<ul>
					<li>1. Limpeza</li>
					<li>2. Tratamento</li>
					<li>3. Hidratação</li>
				</ul>
			</main>
			<Footer />
		</Container>
	);
}
