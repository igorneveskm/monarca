import { Container, TitlePage, Item } from "./styles";

import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

export function Bha() {
	return (
		<Container>
			<Navigation />
			<TitlePage>Bha</TitlePage>
			<main>
				<Item>
					<h2>Ácido Salicilico:</h2>
					<p>
						O ácido salicílico é um ácido classificado como BHA
						(beta-hidroxiácido). Originalmente extraído da árvore do salgueiro,
						hoje é produzido artificialmente em laboratório para uso em diversos
						produtos de cuidados com a pele. Sua principal ação na pele é
						promover uma esfoliação química, ajudando a desobstruir os poros, o
						que previne a formação de cravos e acne. Além disso, o ácido
						salicílico atua como anti-seborreico, reduzindo a produção de sebo
						pelas glândulas sebáceas, anti-inflamatório e antimicrobiano, sendo
						eficaz no combate às bactérias que causam acne. Ele é indicado
						principalmente para o controle da oleosidade, prevenção da acne e
						para melhorar a textura da pele. Este ativo também é útil no
						tratamento de problemas do couro cabeludo, como caspas e dermatite
						seborreica, ajudando a controlar a descamação e a inflamação sem
						irritar a pele, ao contrário de alguns ácidos do tipo AHA
						(alfa-hidroxiácidos). Outro ponto importante é que o ácido
						salicílico é lipossolúvel, o que significa que tem maior capacidade
						de penetrar nos poros e atingir camadas mais profundas da pele, como
						a derme. Sua ação queratolítica promove a remoção das células
						mortas, desobstruindo os poros e prevenindo imperfeições. A
						concentração máxima permitida em cosméticos de uso diário é de 2%,
						sendo um ingrediente não fotossensibilizante, o que permite o seu
						uso durante o dia, sempre acompanhado de protetor solar. No entanto,
						o uso de ácido salicílico é contraindicado para grávidas, devido ao
						seu potencial risco durante a gestação. Em resumo, o ácido
						salicílico é um ativo versátil e eficaz no tratamento de peles
						oleosas e acneicas, trazendo benefícios sem causar irritações quando
						utilizado adequadamente.
					</p>
				</Item>
			</main>
			<Footer />
		</Container>
	);
}
