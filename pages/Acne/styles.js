import styled from "styled-components";

export const Container = styled.div`
	flex-direction: column;
	display: flex;
	height: 100vh;
	width: 100%;

	main {
		justify-content: center;
		flex-direction: column;
		margin: 6.4rem auto;
		align-items: center;
		max-width: 119rem;
		display: flex;
		gap: 5rem;
	}
`;

export const TitlePage = styled.div`
	background-color: ${({ theme }) => theme.COLORS.ORANGE_900};
	font-family: "Inter", sans-serif;
	text-transform: uppercase;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	padding: 2rem 0;
	display: flex;
	font-weight: 400;
	font-size: 2.4rem;
	color: #ffffff;
`;

export const Item = styled.div`
	font-family: "Inter", sans-serif;
	flex-direction: column;
	font-weight: 400;
	display: flex;

	h2 {
		color: ${({ theme }) => theme.COLORS.ORANGE_900};
		margin-bottom: 2rem;
		font-size: 3.6rem;
	}

	p {
		font-size: 2.4rem;
	}

	ul {
		margin-left: 3rem;
	}
`;
