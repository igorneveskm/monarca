import { Container, TitlePage, Item } from "./styles";

import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

export function Aha() {
	return (
		<Container>
			<Navigation />
			<TitlePage>AHA</TitlePage>
			<main>
				<Item>
					<h2>Ácido Glicolico:</h2>
					<p>
						O ácido glicólico é um AHA (alfa-hidroxiácido) derivado
						originalmente da cana-de-açúcar, mas atualmente é produzido em
						laboratório para maior controle e pureza. Ele é considerado um dos
						ácidos mais potentes devido ao seu tamanho molecular pequeno, o que
						permite que penetre profundamente na pele, promovendo uma esfoliação
						eficaz. Este ácido oferece diversos benefícios, como o tratamento de
						acne, hiperpigmentação, poros dilatados, sinais de envelhecimento e
						melhora da textura da pele. No entanto, devido à sua potência, pode
						causar sensibilidade, especialmente em peles secas e sensíveis. Por
						outro lado, peles oleosas geralmente toleram melhor o ácido
						glicólico, mas ainda assim, é importante ter cuidado com o uso
						excessivo. Embora o ácido glicólico seja eficaz, ele pode ser mais
						suave do que o retinol em termos de renovação celular, mas ainda
						assim exige moderação. Uma pequena quantidade, equivalente ao
						tamanho de um grão de ervilha, é suficiente para cada aplicação.
						Também é essencial introduzi-lo gradualmente na rotina de cuidados
						com a pele para evitar irritações. Além disso, é crucial hidratar
						bem a pele após o uso, pois o ácido glicólico pode causar
						ressecamento. Sempre que utilizar ácidos como o glicólico, é
						fundamental proteger a pele com protetor solar durante o dia, pois
						esses tratamentos podem aumentar a sensibilidade da pele ao sol.
					</p>
				</Item>
				<Item>
					<h2>Ácido Mandelico:</h2>
					<p>
						O ácido mandélico é um AHA (alfa-hidroxiácido) que possui uma
						molécula maior, tornando-o menos sensibilizante em comparação com
						outros ácidos da mesma categoria, como o ácido glicólico. Ele é
						derivado das amêndoas amargas, embora atualmente seja produzido em
						laboratório para uso em cosméticos. O ácido mandélico promove uma
						esfoliação química suave, ajudando a uniformizar o tom da pele,
						melhorar a textura e reduzir manchas. Além disso, ele auxilia no
						controle de bactérias que causam acne, sendo uma boa opção para
						peles com tendência acneica ou sensíveis. Normalmente, o ácido
						mandélico é utilizado em concentrações que variam entre 7% e 10%,
						oferecendo bons resultados sem causar irritações significativas, o
						que o torna adequado para uma ampla gama de tipos de pele. É uma
						excelente escolha para quem busca os benefícios dos ácidos
						esfoliantes com menor risco de sensibilidade.
					</p>
				</Item>
				<Item>
					<h2>Ácido Latico:</h2>
					<p>
						O ácido lático é um alfa-hidroxiácido (AHA) extraído do açúcar do
						leite e é conhecido por seus benefícios esfoliantes e hidratantes. É
						uma molécula intermediária que promove a renovação celular sem ser
						tão irritante quanto outros ácidos, sendo especialmente indicado
						para peles secas e sensíveis. Além de sua ação esfoliante, o ácido
						lático tem a capacidade de aumentar a hidratação da pele, pois
						estimula a produção de ceramidas, que são essenciais para manter a
						barreira protetora da pele e evitar a perda de água. Devido a isso,
						ele oferece uma esfoliação suave ao mesmo tempo que hidrata,
						tornando-o adequado para quem tem sensibilidade. Em termos de força,
						o ácido lático é considerado mais forte que o ácido mandélico, outro
						AHA de ação suave, mas é mais fraco que o ácido glicólico, que é o
						AHA mais potente e mais frequentemente usado para esfoliação
						profunda. Assim, como o ácido lático pode ser mais ativo do que
						outros ácidos mais suaves, é recomendado que seja introduzido
						gradualmente na rotina de cuidados com a pele para evitar irritação.
						Isso pode ser feito aplicando-o inicialmente algumas vezes por
						semana e aumentando a frequência conforme a pele se adapta ao
						produto.
					</p>
				</Item>
			</main>
			<Footer />
		</Container>
	);
}
