import { Container, TitlePage } from "./styles";

import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

import { Link } from "react-router-dom";

import derm from "../../assets/casanova.jpg";

export function Dermatologista() {
	return (
		<Container>
			<Navigation />
			<TitlePage>Dermatologista</TitlePage>
			<main>
				<div className="left">
					<div id="squareOne"></div>
					<div id="squareTwo">
						<img src={derm} alt="Imagem do Doutor" />
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
					<div className="social-media">
						<span>CLIQUE ONDE PREFERIR E MARQUE SUA CONSULTA</span>
						<ul>
							<li>
								<Link
									to="https://www.instagram.com/clinica_danielle_casanova"
									target="_blank"
								>
									<FaInstagram size={25} />
								</Link>
							</li>
							<li>
								<Link
									to="https://www.facebook.com/ClinicaDanielleCasanova"
									target="_blank"
								>
									<FaFacebook size={25} />
								</Link>
							</li>
							<li>
								<Link
									to="https://api.whatsapp.com/send?phone=5511995028392"
									target="_blank"
								>
									<ImWhatsapp size={25} />
								</Link>
							</li>
							<li>
								<Link
									to="https://maps.app.goo.gl/ybCvTNvsR7W88Z2H6"
									target="_blank"
								>
									<FaMapMarkerAlt size={25} />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</main>
			<Footer />
		</Container>
	);
}
