import { Container, Banner, Section, Button } from "./styles";

import { Navigation } from "../../components/Navigation";
import { Card } from "../../components/Cards";
import { Footer } from "../../components/Footer";

import BannerImage from "../../assets/banner.jpg";
import Hand2 from "../../assets/hand2.png";
import Hand from "../../assets/hand.png";
import Face from "../../assets/face.png";
import HughJackmanImage from "../../assets/hughjackman.png";
import AnaCastelaImage from "../../assets/anacastela.jpg";
import BobMarleyImage from "../../assets/bobmarley.jpg";
import GiovanaEwbankImage from "../../assets/geovanaewbank.png";
import gelLimp from "../../assets/gelLimp.png";
import hidraFa from "../../assets/hidraFa.png";
import protSol from "../../assets/protSol.png";
import trat from "../../assets/trat.png";
import hidraCo from "../../assets/hidraCo.png";
import derm from "../../assets/derm.png";
import atv1 from "../../assets/atv1.png";
import atv2 from "../../assets/atv2.png";
import atv3 from "../../assets/atv3.jpg";
import atv4 from "../../assets/atv4.png";
import atv5 from "../../assets/atv5.png";

import { Link } from "react-router-dom";

import { useState } from "react";

export function Home() {
	const [selectedPerson, setSelectedPerson] = useState("Hugh Jackman");
	const [personDescription, setPersonDescription] = useState(
		"O Wolverine do cinema, o ator Hugh Jackman, de 54 anos, revelou que passou por duas biópsias após seu médico notar pequenas coisas que poderiam ser carcinoma basocelular: a forma mais comum do câncer de pele. A estrela já foi diagnosticada com seis cânceres de pele, que foram removidos de seu rosto entre 2017 e 2019."
	);
	const [personImage, setPersonImage] = useState(HughJackmanImage);
	const [selectedButton, setSelectedButton] = useState("Hugh Jackman");

	const handleButtonClick = (person) => {
		setSelectedButton(person);
		setSelectedPerson(person);
		switch (person) {
			case "Hugh Jackman":
				setPersonDescription(
					"O Wolverine do cinema, o ator Hugh Jackman, de 54 anos, revelou que passou por duas biópsias após seu médico notar pequenas coisas que poderiam ser carcinoma basocelular: a forma mais comum do câncer de pele. A estrela já foi diagnosticada com seis cânceres de pele, que foram removidos de seu rosto entre 2017 e 2019."
				);
				setPersonImage(HughJackmanImage);
				break;
			case "Ana Castela":
				setPersonDescription("Ana Castela, assim como muitos jovens, enfrenta a acne, uma condição comum na adolescência. Ela compartilha abertamente sobre isso, mostrando que é normal e que faz parte do crescimento. A postura positiva e realista de Ana inspira seus seguidores a aceitarem a pele como ela é, com suas imperfeições, promovendo a autoestima e o cuidado natural com a própria imagem.");
				setPersonImage(AnaCastelaImage);
				break;
			case "Bob Marley":
				setPersonDescription("Bob Marley, ícone do reggae, foi diagnosticado com melanoma acral lentiginoso, um tipo raro de câncer de pele, em 1977. A doença começou como uma lesão no dedão do pé, mas Marley, priorizando sua carreira, adiou o tratamento adequado. Infelizmente, o câncer se espalhou para outros órgãos, levando-o a falecer em 1981. Sua história alerta sobre a importância da detecção precoce.");
				setPersonImage(BobMarleyImage);
				break;
			case "Giovana Ewbank":
				setPersonDescription("Giovanna Ewbank lida com dermatite atópica, uma condição crônica que causa coceira, vermelhidão e ressecamento da pele. Ela compartilha essa experiência nas redes sociais, mostrando os desafios e o cuidado constante necessário. Ao abrir sua rotina de cuidados, inspira quem enfrenta o mesmo, promovendo a importância de tratamentos e de se sentir bem com a própria pele.");
				setPersonImage(GiovanaEwbankImage);
				break;
			default:
				break;
		}
	};
	return (
		<Container>
			<Navigation />
			<main>
				<Banner>
					<img src={BannerImage} alt="Banner" />
				</Banner>
				<Section id="doencas-de-pele">
					<h2>Doenças de pele mais comuns</h2>
					<div className="cards">
						<Card image={Hand} title="Cancer de Pele" link="/cancer" />
						<Card image={Hand2} title="Dermatites" link="/dermatites" />
						<Card image={Face} title="Acne" link="/acne" />
					</div>
				</Section>
				<Section id="casos-de-famosos">
					<h2>Casos de Famosos</h2>
					<nav>
						<ul>
							<li>
								<button
									onClick={() => handleButtonClick("Hugh Jackman")}
									className={selectedButton === "Hugh Jackman" ? "active" : ""}
								>
									Hugh Jackman
								</button>
							</li>
							<li>
								<button
									onClick={() => handleButtonClick("Ana Castela")}
									className={selectedButton === "Ana Castela" ? "active" : ""}
								>
									Ana Castela
								</button>
							</li>
							<li>
								<button
									onClick={() => handleButtonClick("Bob Marley")}
									className={selectedButton === "Bob Marley" ? "active" : ""}
								>
									Bob Marley
								</button>
							</li>
							<li>
								<button
									onClick={() => handleButtonClick("Giovana Ewbank")}
									className={selectedButton === "Giovana Ewbank" ? "active" : ""}
								>
									Giovana Ewbank
								</button>
							</li>
						</ul>
					</nav>
					<div id="content">
						<div>
							<p>{personDescription}</p>
						</div>
						<img src={personImage} alt={selectedPerson} />
					</div>
				</Section>
				<Section>
					<h2>Produtos de Skin Care</h2>
					<h3>Mais recomendado por dermatologistas</h3>
					<div id="products">
						<ul>
							<li>
								<Link to="/produtos">
									<img src={gelLimp} alt="Gel de Limpeza" />
									<span>Gel de Limpeza</span>
								</Link>
							</li>
							<li>
								<img src={hidraFa} alt="Hidratante Facial" />
								<span>Hidratante Facial</span>
							</li>
							<li>
								<img src={protSol} alt="Protetor Solar" />
								<span>Protetor Solar</span>
							</li>
							<li>
								<img src={trat} alt="Tratamento" />
								<span>Tratamento</span>
							</li>
							<li>
								<img src={hidraCo} alt="Hidratante Corporal" />
								<span>Hidratante Corporal</span>
							</li>
						</ul>
					</div>
				</Section>
				<Section id="dermatologistas">
					<h2>Qual a função de um Dermatologista</h2>
					<div id="content">
						<img src={derm} alt="Dermatologista" />
						<p>
							Dermatologistas são médicos especializados em diagnosticar e
							tratar doenças da pele, cabelos e unhas, abordando condições como
							acne, dermatites e câncer de pele. Eles passam cerca de 12 a 14
							anos em formação, incluindo 6 anos de graduação em medicina e 3 a
							5 anos de residência e mais alguns anos de pos especialização .
							Essa preparação aprofundada os capacita a realizar tanto
							tratamentos clínicos quanto procedimentos estéticos.
						</p>
					</div>
					<Button to="/dermatologista">Conheça nossos parceiros</Button>
				</Section>
				<Section id="ativos">
					<h2>Ativos mais utilizados no Skin Care</h2>
					<div id="products">
						<ul>
							<li>
								<Link to="/vitamina">
									<img src={atv1} alt="Vitamina C e derivados" />
									<span>
										Vitamina C<br />e derivados
									</span>
								</Link>
							</li>
							<li>
								<Link to="/retinoides">
									<img src={atv2} alt="Retinoides" />
									<span>Retinoides</span>
								</Link>
							</li>
							<li>
								<Link to="/niacinamida">
									<img src={atv3} alt="Niacinamida" />
									<span>Niacinamida</span>
								</Link>
							</li>
							<li>
								<Link to="/aha">
									<img src={atv4} alt="AHA" />
									<span>AHA</span>
								</Link>
							</li>
							<li>
								<Link to="/bha">
									<img src={atv5} alt="BHA" />
									<span>BHA</span>
								</Link>
							</li>
						</ul>
					</div>
				</Section>
			</main>
			<Footer />
		</Container>
	);
}
