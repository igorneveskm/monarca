import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;

	main {
		margin: 0 auto;
		width: 155rem;

		li {
			text-transform: uppercase;
			border: 1px solid black;
			padding: 1rem 1.5rem;
			list-style: none;
			width: 100%;
			font-size: 3.6rem;
			margin: 4rem 0;
		}

		.icon {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1.6rem;
		}

		.icon h2 {
			text-transform: uppercase;
      font-weight: 400;
      font-size: 3.6rem;
      color: ${({ theme }) => theme.COLORS.ORANGE_900};
		}
	}

	.extra-info {
		margin: 6.6rem auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5rem;

		span {
			color: ${({ theme }) => theme.COLORS.ORANGE_900};
		}

		h2 {
			text-align: center;
			text-transform: uppercase;
			font-family: "Inter", sans-serif;
			font-weight: 400;
		}
	}

	.info {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		align-items: center;
		background-color: #d9d9d9;
		padding: 1.4rem;
		width: max-content;

		p {
			width: 21rem;
			text-transform: uppercase;
			text-align: left;
			font-size: 1.69rem;
			color: #fb4f09;
			font-weight: 400;
		}
	}

	.square {
		width: 6rem;
		height: 3rem;
		background-color: ${({ theme }) => theme.COLORS.ORANGE_900};
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
