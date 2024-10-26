import { Container, TitlePage } from "./styles";

import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { Product } from "../../components/Product";

import filterIcon from "../../assets/filterIcon.svg";

import products from "../../../products.json";

export function Produtos() {
	console.log(products)
	return (
		<Container>
			<Navigation />
			<TitlePage>Produtos</TitlePage>
			<main>
				<aside>
					<title>
						<h2>Filtrar</h2>
						<img src={filterIcon} alt="Ícone de filtro" />
					</title>
					<p>Categoria</p>
					<div className="filterOptions">
						<div className="input-wrapper">
							<input
								type="checkbox"
								name="gel-de-limpeza"
								id="gel-de-limpeza"
							/>
							<label htmlFor="gel-de-limpeza">Gel de Limpeza</label>
						</div>
						<div className="input-wrapper">
							<input type="checkbox" name="hidratante" id="hidratante" />
							<label htmlFor="hidratante">Hidratante</label>
						</div>
						<div className="input-wrapper">
							<input
								type="checkbox"
								name="protetor-solar"
								id="protetor-solar"
							/>
							<label htmlFor="protetor-solar">Protetor Solar</label>
						</div>
						<div className="input-wrapper">
							<input type="checkbox" name="tratamento" id="tratamento" />
							<label htmlFor="tratamento">Tratamento</label>
						</div>
						<div className="input-wrapper">
							<input
								type="checkbox"
								name="hidratante-corporal"
								id="hidratante-corporal"
							/>
							<label htmlFor="hidratante-corporal">Hidratante Corporal</label>
						</div>
					</div>
					<p>Tipo de Pele</p>
					<div className="filterOptions">
						<div className="input-wrapper">
							<input type="checkbox" name="seca" id="seca" />
							<label htmlFor="seca">Seca</label>
						</div>
						<div className="input-wrapper">
							<input type="checkbox" name="normal" id="normal" />
							<label htmlFor="normal">Normal</label>
						</div>
						<div className="input-wrapper">
							<input type="checkbox" name="mista" id="mista" />
							<label htmlFor="mista">Mista</label>
						</div>
						<div className="input-wrapper">
							<input type="checkbox" name="oleosa" id="oleosa" />
							<label htmlFor="oleosa">Oleosa</label>
						</div>
						<div className="input-wrapper">
							<input type="checkbox" name="sensivel" id="sensivel" />
							<label htmlFor="sensivel">Sensível</label>
						</div>
						<div className="input-wrapper">
							<input type="checkbox" name="acneica" id="acneica" />
							<label htmlFor="acneica">Acneica</label>
						</div>
					</div>
				</aside>
				<section>
					{
						products.map((product) => (
							<Product
								key={product.id}
								image={product.image}
								title={product.name}
								adress={product.adress}
							/>
						))
					}
				</section>
			</main>
			<Footer />
		</Container>
	);
}
