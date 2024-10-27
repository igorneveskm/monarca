import { Container, TitlePage, Item } from "./styles";

import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

export function Acne() {
	return (
		<Container>
			<Navigation />
			<TitlePage>Acne</TitlePage>
			<main>
				<Item>
					<h2>O que é acne?</h2>
					<p>
						A acne é uma condição comum que se manifesta por espinhas e cravos,
						resultante da inflamação das glândulas sebáceas e folículos
						pilossebáceos. É mais frequente na adolescência, mas também afeta
						muitos adultos, especialmente mulheres. Além do desconforto físico,
						a acne pode impactar a autoestima e a saúde mental, levando a
						inseguranças.
					</p>
				</Item>
				<Item>
					<h2>Causas e Fatores Contribuintes</h2>
					<p>
						Os hormônios sexuais, especialmente andrógenos e estrógenos,
						desempenham um papel crucial no desenvolvimento da acne, aumentando
						a atividade das glândulas sebáceas. Outros fatores que podem piorar
						a acne incluem estresse, alterações hormonais (como no ciclo
						menstrual), certos medicamentos, exposição ao sol, e manipulação das
						lesões (espremer ou cutucar).
					</p>
				</Item>
				<Item>
					<h2>A acne é uma condição que envolve quatro pilares principais:</h2>
					<p>
						Excesso de Sebo: A produção aumentada de sebo pelas glândulas
						sebáceas, frequentemente estimulada por hormônios, é um dos
						principais fatores. Nessa situação, ocorre uma diminuição do ácido
						linoleico e um aumento do esqualano. A isotretinoína (Roacutan) e os
						antiandrogênicos são as principais substâncias que podem reduzir
						essa produção excessiva de sebo.
						<br />
						<br />
						Proliferação da Bactéria da Acne: Todos possuem a Propionibacterium
						acnes na pele, mas, em indivíduos com acne, essa bactéria assume uma
						forma patogênica. Assim, não basta ter a bactéria; é necessário que
						ela seja a variante maléfica para promover a acne.
						<br />
						<br />
						Inflamação: A resposta inflamatória do corpo à obstrução dos poros e
						à presença das bactérias resulta nas lesões típicas da acne, como
						espinhas e nódulos. Essa inflamação é mediada pelas células Th17,
						semelhante à inflamação observada em pessoas com psoríase.
						<br />
						<br />
						Hiperqueratinização Follicular: A obstrução do canalículo do
						folículo ocorre com o aumento da hidratação dos queratinócitos,
						levando a um maior acúmulo de células mortas que obstruem os poros.
						<br />
						<br />
						Esses pilares interagem entre si, contribuindo para o
						desenvolvimento da acne e requerendo uma abordagem de tratamento com
						isotretinoina medicamento prescrito por dermatologistas .
					</p>
				</Item>
				<Item>
					<h2>Tratamento</h2>
					<p>
						O tratamento deve ser iniciado o mais cedo possível para evitar
						cicatrizes e prejuízos estéticos. Existem diversas opções
						terapêuticas:
						<br />
						<br />
						Terapia Local: Em casos leves, pode ser suficiente o uso de produtos
						tópicos, como:
						<br />
						<br />
						<ul>
							<li>Ácido Salicílico;</li>
							<li>Peróxido de Benzoíla;</li>
							<li>Retinoides (ex: adapaleno, tretinoína);</li>
							<li>
								Terapia Oral: Para casos mais severos ou quando a terapia local
								não é suficiente:
							</li>
						</ul>
						<br />
						<br />
						Isotretinoína Oral: indicada em casos moderados a graves, com
						restrições para mulheres em idade fértil devido ao risco de
						teratogenicidade.
						<br />
						<br />
						Tratamentos Complementares: Como extração de cravos, drenagem de
						abscessos, peelings químicos, e tratamentos a laser Tratamento
						Hormonal: Anticoncepcionais orais podem ser úteis para mulheres,
						desde que não haja contraindicações
					</p>
				</Item>
				<Item>
					<h2>Prevenção</h2>
					<p>
						A prevenção inclui cuidados com a higiene da pele, utilizando
						produtos adequados para peles acneicas, e evitando limpeza
						excessiva. É importante evitar cosméticos que aumentem a oleosidade.
						A relação entre dieta e acne não é direta, e, portanto, não são
						necessárias restrições alimentares específicas. Embora a exposição
						ao sol possa melhorar temporariamente a acne, a exposição excessiva
						pode agravar a situação.
					</p>
				</Item>
				<Item>
					<h2>Cuidados Gerais</h2>
					<p>
						Não Manipular Lesões: Esfregar ou espremer pode levar a infecções e
						cicatrizes. Proteção Solar: O uso de protetor solar é fundamental,
						pois a pele acneica é sensível. Consulta Dermatológica: É essencial
						para receber um diagnóstico adequado e um plano de tratamento
						personalizado.
					</p>
				</Item>
				<Item>
					<h2>Conclusão</h2>
					<p>
						A acne é uma condição que pode ser controlada e tratada com
						eficácia. O manejo precoce e adequado é vital não apenas para a
						saúde da pele, mas também para o bem-estar emocional e psicológico
						dos indivíduos afetados. Se você está enfrentando problemas com
						acne, consulte um dermatologista para obter orientações específicas
						e um tratamento adequado.
					</p>
				</Item>
			</main>
			<Footer />
		</Container>
	);
}
