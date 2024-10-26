import { Container, TitlePage } from "./styles";

import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

import doctorPicture from "../../assets/doctor.jpg";

export function Dermatologista() {
	return (
		<Container>
			<Navigation />
			<TitlePage>Dermatologista</TitlePage>
			<main>
				<div className="left">
					<div id="squareOne"></div>
					<div id="squareTwo">
						<img src={doctorPicture} alt="Imagem do Doutor" />
					</div>
				</div>
				<div className="right">
					<h2>Marque sua consulta</h2>
					<h3>Principais procedimentos realizados em nossas clínicas</h3>
					<ol>
						<li>Tratamento de Acne</li>
						<li>Tratamento de Melasma</li>
						<li>Tratamento de Cancer de Pele</li>
						<li>Tratamento de Dermatite</li>
						<li>Tratamento de Rosácea</li>
						<li>Tratamento de Alopecia</li>
						<li>Aplicação de Toxina Botulínica (Botox)</li>
						<li>Preenchimento Facial</li>
						<li>Peelings Químicos</li>
						<li>Tratamento de Manchas, Estrias e Cicatrizes</li>
						<li>Cirurgias Dermatológicas Realizadas na Própria Clínica</li>
						<li>Depilação a Laser</li>
						<li>Crioterapia</li>
						<li>Bioestimulador de Colagénio</li>
						<li>Lasers Modernos</li>
						<li>Remoção de Tatuagens</li>
					</ol>
				</div>
			</main>
			<Footer />
		</Container>
	);
}
