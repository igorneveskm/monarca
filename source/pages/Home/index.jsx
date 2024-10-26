import { Container, Banner, Section, Button } from "./styles";

import { Navigation } from "../../components/Navigation";
import { Card } from "../../components/Cards";
import { Footer } from "../../components/Footer";

import BannerImage from "../../assets/banner.jpg";
import Hand2 from "../../assets/hand2.png";
import Hand from "../../assets/hand.png";
import Face from "../../assets/face.png";
import HughJackmanImage from "../../assets/hughjackman.png";
import gelLimp from "../../assets/gelLimp.png";
import hidraFa from "../../assets/hidraFa.png";
import protSol from "../../assets/protSol.png";
import trat from "../../assets/trat.png";
import hidraCo from "../../assets/hidraCo.png";
import derm from "../../assets/derm.png";
import atv1 from "../../assets/atv1.png";
import atv2 from "../../assets/atv2.png";
import atv3 from "../../assets/atv3.png";
import atv4 from "../../assets/atv4.png";
import atv5 from "../../assets/atv5.png";

import { Link } from "react-router-dom";

export function Home() {
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
								<a href="#">Hugh Jackman</a>
							</li>
							<li>
								<a href="#">Ana Castela</a>
							</li>
							<li>
								<a href="#">Bob Marley</a>
							</li>
							<li>
								<a href="#">Giovana Ewbank</a>
							</li>
						</ul>
					</nav>
					<div id="content">
						<div>
							<p>
								O Wolverine do cinema, o ator Hugh Jackman, de 54 anos, revelou
								que passou por duas biópsias após seu médico notar pequenas
								coisas que poderiam ser carcinoma basocelular: a forma mais
								comum do câncer de pele. A estrela já foi diagnosticada com seis
								cânceres de pele, que foram removidos de seu rosto entre 2017 e
								2019.
							</p>
						</div>
						<img src={HughJackmanImage} alt="Hugh Jackman" />
					</div>
				</Section>
				<Section>
					<h2>Produtos de Skin Care</h2>
					<h3>Mais recomendado por dermatologistas</h3>
					<div id="products">
						<ul>
							<li>
								<img src={gelLimp} alt="Gel de Limpeza" />
								<span>Gel de Limpeza</span>
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
								<img src={atv1} alt="Vitamina C e derivados" />
								<span>Vitamina C e derivados</span>
							</li>
							<li>
								<img src={atv2} alt="Retinoides" />
								<span>Retinoides</span>
							</li>
							<li>
								<img src={atv3} alt="Niacinamida" />
								<span>Niacinamida</span>
							</li>
							<li>
								<img src={atv4} alt="AHA" />
								<span>AHA</span>
							</li>
							<li>
								<img src={atv5} alt="BHA" />
								<span>BHA</span>
							</li>
						</ul>
					</div>
				</Section>
			</main>
			<Footer />
		</Container>
	);
}
