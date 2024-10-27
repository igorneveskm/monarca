import { Container, TitlePage, Item } from "./styles";

import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

export function Niacinamida() {
	return (
		<Container>
			<Navigation />
			<TitlePage>Niacinamida</TitlePage>
			<main>
				<Item>
					<h2>Niacinamida:</h2>
					<p>
						A niacinamida, também conhecida como vitamina B3, é um ativo
						amplamente utilizado em produtos de skincare, normalmente em
						concentrações que variam entre 5% e 10%. Este ingrediente é popular
						devido aos seus inúmeros benefícios para a pele. Entre suas
						principais funções, destaca-se o clareamento de manchas, que ocorre
						através da inibição da transferência dos melanossomas (as estruturas
						que transportam a melanina) para as células da pele. Além disso, a
						niacinamida ajuda a controlar a oleosidade e a reduzir a acne, sendo
						uma excelente opção para peles oleosas e acneicas. Outro benefício
						importante é a reparação da barreira cutânea, pois a niacinamida
						estimula a produção de ceramidas, que são essenciais para manter a
						hidratação e a proteção natural da pele. O ativo também é altamente
						versátil, podendo ser combinado com outros ingredientes de skincare,
						como ácido hialurónico e retinol, sem causar irritações. Em resumo,
						a niacinamida é um componente seguro e eficaz que traz diversos
						benefícios à pele, sendo uma escolha segura e exelente.
					</p>
				</Item>
			</main>
			<Footer />
		</Container>
	);
}
