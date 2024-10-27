import { Container } from "./styles";

import { Link } from "react-router-dom";

export function Card({ image, title, link }) {
	return (
		<Container>
			<img src={image} />
			<span>{title}</span>
			<Link to={link}>Saiba mais</Link>
		</Container>
	);
}
