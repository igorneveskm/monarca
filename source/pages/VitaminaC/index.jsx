import { Container, TitlePage, Item } from "./styles";

import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

export function VitaminaC() {
	return (
		<Container>
			<Navigation />
			<TitlePage>Vitamina C</TitlePage>
			<main>
				<Item>
					<h2>Ácido Ascórbico:</h2>
					<p>
						Descrição: Forma pura e ativa de vitamina C.
						<br /> Características: Potente antioxidante e estimula a produção
						de colágeno. É eficaz, mas pode ser instável e propenso à oxidação
						quando exposto ao ar e à luz.
						<br />
						Uso: Comumente encontrado em séruns e cremes. Requer embalagens que
						minimizem a exposição ao oxigênio e à luz para manter a eficácia.
					</p>
				</Item>
				<Item>
					<h2>Sodion Ascorbic Acid (SAP):</h2>
					<p>
						Descrição: Forma estável de ácido ascórbico.
						<br />
						Características: Oferece benefícios semelhantes ao ácido ascórbico,
						mas com maior estabilidade em ph 7 sem irritar a pele porem não e
						absorvido tão bem quanto outros derivados, não e um dos melhores
						derivados porem existem estudos que mostrou controle da bacteria da
						acne. Pode ser usado em uma variedade de formulações sem perder
						eficácia rapidamente.
						<br />
						Uso: Usado em produtos de cuidados com a pele para suas propriedades
						antioxidantes e de estímulo de colágeno.
					</p>
				</Item>
				<Item>
					<h2>Ascorbyl Isotetrapalmitate:</h2>
					<p>
						Descrição: Derivado lipossolúvel de vitamina C.
						<br />
						Características: Estável e penetra bem na pele devido à sua
						solubilidade em gordura. Menos irritante do que algumas formas
						aquosas de vitamina C e pode melhorar a elasticidade da pele.
						<br />
						Uso: Frequentemente encontrado em produtos anti-envelhecimento e
						clareadores de pele.
					</p>
				</Item>
				<Item>
					<h2>Ascorbyl Glucoside:</h2>
					<p>
						Descrição: Um derivado de vitamina C soluvel em agua ligado a uma
						molécula de glicose.
						<br />
						Características: Mais estável do que o ácido ascórbico e se converte
						em ácido ascórbico na pele alem de ser o derivado com mais estudos
						cientificos. Oferece benefícios antioxidantes e clareadores com
						menor risco de irritação com estudos promissores em aumento de
						colageno.
						<br />
						Uso: Ideal para peles sensíveis e em produtos que visam clarear
						manchas e uniformizar o tom da pele.
					</p>
				</Item>
				<Item>
					<h2>Ethyl Ascorbic Acid:</h2>
					<p>
						Descrição: Forma estabilizada de vitamina C etílica.
						<br />
						Características: Alta estabilidade e eficácia comparável ao ácido
						ascórbico. Também é conhecida por ser solúvel em água e tem boa
						penetração na pele formando um otimo aliado ao ascorbly glucoside.
						<br />
						Uso: Utilizada em uma variedade de produtos para maximizar a
						eficácia antioxidante e o clareamento da pele.
					</p>
				</Item>
				<Item>
					<h2>Ascorbyl Palmitate:</h2>
					<p>
						Descrição: Derivado lipossolúvel de vitamina C porem não e muito
						estavel parecida com o acido ascorbico.
						<br />
						Características: Menos potente que o ácido ascórbico,. Ajuda a
						proteger a pele contra danos oxidativos e pode melhorar a textura da
						pele porem e o pior derivado nao valendo a pena de ser ultilizado.
						<br />
						Uso: Comumente incluído em formulações antienvelhecimento e de
						proteção da pele.
					</p>
				</Item>
				<Item>
					<h2>Magnesium Ascorbyl Phosphate (MAP):</h2>
					<p>
						Descrição: Forma de vitamina C estabilizada com magnésio.
						<br />
						Características: Alta estabilidade e solubilidade em água. Um dos
						melhores em iluminar e clarear a pele porem estudos demonstram que
						ele nao e um dos melhores antioxidantes . Menos irritante e bem
						tolerado por peles sensíveis.
						<br />
						Uso: Usado em produtos para clarear manchas e melhorar a textura da
						pele. Cada um desses derivados de vitamina C tem suas próprias
						vantagens e pode ser escolhido com base nas necessidades específicas
						da sua pele e na formulação do produto.
					</p>
				</Item>
      </main>
      <Footer />
		</Container>
	);
}