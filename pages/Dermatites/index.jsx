import { Container, TitlePage, Item } from "./styles";

import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

export function Dermatites() {
	return (
		<Container>
			<Navigation />
			<TitlePage>Dermatites</TitlePage>
			<main>
				<Item>
					<h2>Dermatite o que é?</h2>
					<p>
						A dermatite é uma inflamação da pele que pode ser desencadeada por
						diversos fatores, como alergias, irritantes químicos, condições
						genéticas ou fatores ambientais. As dermatites mais comuns incluem
						dermatite atópica, dermatite de contato, dermatite seborreica e
						dermatite crônica. Os sintomas típicos incluem vermelhidão, coceira
						intensa, descamação, inchaço e, em alguns casos, formação de bolhas.
						A condição pode afetar a qualidade de vida, causando desconforto e,
						em alguns casos, levando a infecções secundárias devido à coceira
						intensa. Para prevenir a dermatite, é importante adotar algumas
						medidas, como manter a pele bem hidratada com emolientes adequados,
						usar protetor solar para evitar danos causados pela exposição ao
						sol, e optar por produtos de higiene e cosméticos hipoalergênicos e
						suaves, evitando aqueles que contêm fragrâncias ou ingredientes
						irritantes. Além disso, identificar e evitar substâncias que possam
						causar reações alérgicas ou irritações é fundamental. Por fim,
						técnicas de gerenciamento do estresse, como meditação e exercícios,
						podem ser úteis, pois o estresse pode agravar os sintomas da
						dermatite. Essas medidas ajudam a manter a saúde da pele e a
						prevenir o surgimento de dermatites.
					</p>
				</Item>
				<Item>
					<h2>Dermatite atópica</h2>
					<p>
						A dermatite atópica (DA) é uma doença inflamatória crônica da pele,
						caracterizada por coceira intensa, ressecamento e erupções, que
						afeta principalmente crianças, mas pode persistir ou surgir em
						adultos. É causada por uma combinação de fatores genéticos e
						ambientais, como predisposição familiar a alergias e exposição a
						irritantes. A pele de quem tem DA apresenta uma barreira
						enfraquecida, o que facilita inflamações.
						<br />
						<br />
						Os principais sintomas incluem prurido intenso, pele seca, lesões
						vermelhas e espessamento da pele em áreas específicas, como dobras
						dos braços e pernas. O diagnóstico é clínico, baseado no histórico
						do paciente e no exame físico.
						<br />
						<br />O tratamento foca em controlar os sintomas e prevenir crises.
						A hidratação da pele com emolientes é essencial, além do uso de
						corticosteroides tópicos e inibidores de calcineurina para reduzir a
						inflamação. Em casos mais graves, podem ser indicados
						imunossupressores e terapias biológicas, como o dupilumabe. A
						fototerapia também pode ser utilizada, e cuidados diários como
						evitar fatores irritantes e manter a pele hidratada são
						fundamentais.
						<br />
						<br />
						Embora não tenha cura, a dermatite atópica pode ser controlada,
						melhorando a qualidade de vida dos pacientes com o manejo adequado e
						o acompanhamento médico contínuo.
					</p>
				</Item>
				<Item>
					<h2>Dermatite Seborreica</h2>
					<p>
						A dermatite crônica é uma inflamação persistente da pele,
						caracterizada por episódios recorrentes que podem durar meses ou
						anos. Os sintomas incluem vermelhidão, coceira intensa, descamação,
						espessamento da pele e, em casos graves, rachaduras. As causas podem
						variar, envolvendo irritantes, alergias, predisposição genética e
						fatores ambientais. O tratamento visa aliviar os sintomas e prevenir
						surtos, utilizando corticosteroides tópicos, imunomoduladores,
						hidratantes, antihistamínicos e, em casos severos, fototerapia ou
						medicamentos orais. Além disso, é importante evitar gatilhos, manter
						a pele hidratada e adotar práticas de gerenciamento do estresse. Com
						o manejo adequado, é possível controlar a dermatite crônica e
						melhorar a qualidade de vida.
					</p>
				</Item>
				<Item>
					<h2>Dermatite de Contato</h2>
					<p>
						A dermatite de contato é uma inflamação da pele causada pelo contato
						com substâncias irritantes ou alérgenos. Existem dois tipos
						principais: a dermatite irritativa, que ocorre por dano direto à
						pele, e a dermatite alérgica, que resulta de uma resposta
						imunológica a alérgenos, como níquel, fragrâncias e certos
						cosméticos. Os sintomas incluem vermelhidão, coceira, bolhas e
						descamação.
						<br />
						<br />O tratamento envolve evitar o agente causador, usar
						corticosteroides tópicos para reduzir a inflamação, hidratar a pele
						e, em alguns casos, usar antihistamínicos. A prevenção inclui evitar
						substâncias irritantes, usar produtos hipoalergênicos e proteção com
						luvas ao manusear produtos químicos.
					</p>
				</Item>
				<Item>
					<h2>Dermatite Perioral</h2>
					<p>
						A dermatite perioral é uma inflamação da pele que aparece
						principalmente ao redor da boca, podendo se estender para o nariz e
						olhos. Caracteriza-se por pequenas pápulas e pústulas, além de
						vermelhidão e descamação, acompanhadas de sensação de ardor. A
						principal causa é o uso prolongado de corticoides tópicos, mas
						fatores como uso de cosméticos irritantes, alterações hormonais e
						exposição ao clima também contribuem. O tratamento inclui a
						suspensão de corticoides, uso de antibióticos e cuidados com
						produtos suaves para a pele. Embora possa ser recorrente, a condição
						é controlável com os cuidados adequados.
					</p>
				</Item>
			</main>
			<Footer />
		</Container>
	);
}
