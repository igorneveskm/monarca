import { Container, TitlePage } from "./styles";

import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { Product } from "../../components/Product";

import filterIcon from "../../assets/filterIcon.svg";

import products from "../../../products.json";

import { useState } from "react";

export function Produtos() {
	// Estados para armazenar os filtros selecionados
	const [category, setCategory] = useState({
		gelDeLimpeza: false,
		hidratante: false,
		protetorSolar: false,
		tratamento: false,
		hidratanteCorporal: false,
	});

	const [skinType, setSkinType] = useState({
		seca: false,
		normal: false,
		mista: false,
		oleosa: false,
		sensivel: false,
		acneica: false,
	});

	// Funções para manipular os filtros
	const handleCategoryChange = (event) => {
		const { name, checked } = event.target;
		setCategory((prevState) => ({
			...prevState,
			[name]: checked,
		}));
	};

	const handleSkinTypeChange = (event) => {
		const { name, checked } = event.target;
		setSkinType((prevState) => ({
			...prevState,
			[name]: checked,
		}));
	};
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
					<label>
        <input
          type="checkbox"
          name="gelDeLimpeza"
          checked={category.gelDeLimpeza}
          onChange={handleCategoryChange}
        />
        Gel de Limpeza
      </label>
      <label>
        <input
          type="checkbox"
          name="hidratante"
          checked={category.hidratante}
          onChange={handleCategoryChange}
        />
        Hidratante
      </label>
      <label>
        <input
          type="checkbox"
          name="protetorSolar"
          checked={category.protetorSolar}
          onChange={handleCategoryChange}
        />
        Protetor Solar
      </label>
      <label>
        <input
          type="checkbox"
          name="tratamento"
          checked={category.tratamento}
          onChange={handleCategoryChange}
        />
        Tratamento
      </label>
      <label>
        <input
          type="checkbox"
          name="hidratanteCorporal"
          checked={category.hidratanteCorporal}
          onChange={handleCategoryChange}
        />
        Hidratante Corporal
      </label>
					</div>
					<p>Tipo de Pele</p>
					<div className="filterOptions">
						<div className="input-wrapper">
							<input
								type="checkbox"
								name="seca"
								id="seca"
								checked={skinType.seca}
								onChange={handleSkinTypeChange}
							/>
							<label htmlFor="seca">Seca</label>
						</div>
						<div className="input-wrapper">
							<input
								type="checkbox"
								name="normal"
								id="normal"
								checked={skinType.normal}
								onChange={handleSkinTypeChange}
							/>
							<label htmlFor="normal">Normal</label>
						</div>
						<div className="input-wrapper">
							<input
								type="checkbox"
								name="mista"
								id="mista"
								checked={skinType.mista}
								onChange={handleSkinTypeChange}
							/>
							<label htmlFor="mista">Mista</label>
						</div>
						<div className="input-wrapper">
							<input
								type="checkbox"
								name="oleosa"
								id="oleosa"
								checked={skinType.oleosa}
								onChange={handleSkinTypeChange}
							/>
							<label htmlFor="oleosa">Oleosa</label>
						</div>
						<div className="input-wrapper">
							<input
								type="checkbox"
								name="sensivel"
								id="sensivel"
								checked={skinType.sensivel}
								onChange={handleSkinTypeChange}
							/>
							<label htmlFor="sensivel">Sensível</label>
						</div>
						<div className="input-wrapper">
							<input
								type="checkbox"
								name="acneica"
								id="acneica"
								checked={skinType.acneica}
								onChange={handleSkinTypeChange}
							/>
							<label htmlFor="acneica">Acneica</label>
						</div>
					</div>
				</aside>
				<section>
					{/* {products.map((product) => (
						<Product
							key={product.id}
							image={product.image}
							title={product.name}
							adress={product.adress}
							category={product.category}
							skinType={product.skinType}
						/>
					))} */}
					{products
						.filter((product) => {
							const categorySelected = category[product.category];
							const skinTypeSelected = skinType[product.skinType];
							return (
								categorySelected ||
								skinTypeSelected ||
								(!Object.values(category).some((checked) => checked) &&
									!Object.values(skinType).some((checked) => checked))
							);
						})
						.map((product) => (
							<Product
								key={product.id}
								image={product.image}
								title={product.name}
								adress={product.adress}
							/>
						))}
				</section>
			</main>
			<Footer />
		</Container>
	);
}
