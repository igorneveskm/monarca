import { Container } from "./styles";

export function Product({ image, title, adress }) {
	return (
    <Container>
      <img src={image} alt="Imagem do produto" />
      <h2>{title}</h2>
      <a href={adress} target="_blank">Site oficial da marca</a>
		</Container>
	);
}
