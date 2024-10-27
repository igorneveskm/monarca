import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	.active {
		color: ${({ theme }) => theme.COLORS.ORANGE_900};
	}

	footer {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-items: center;
		border-top: 2rem solid ${({ theme }) => theme.COLORS.ORANGE_900};
		padding-top: 4.7rem;

		div:nth-child(1) {
			text-transform: uppercase;
			width: 35rem;
			align-items: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
		}

		div:nth-child(1) ul {
			margin: 4.5rem 0 4.8rem;
			display: flex;
			flex-direction: row;
			gap: 1.8rem;
			list-style: none;
		}

		div:nth-child(1) ul li {
			height: 5rem;
			width: 5rem;
			border-radius: 50%;
		}

		div:nth-child(1) ul li:nth-child(odd) {
			background-color: ${({ theme }) => theme.COLORS.ORANGE_900};
		}

		div:nth-child(1) ul li:nth-child(even) {
			background-color: ${({ theme }) => theme.COLORS.RED_900};
		}

		div:nth-child(2) ul {
			list-style: none;
			text-align: center;
			display: flex;
			flex-direction: column;
			gap: 1.1rem;
		}

		div:nth-child(2) ul li a {
			text-decoration: none;
			color: black;
			text-transform: uppercase;
		}

		> main {
			justify-content: center;
			flex-direction: column;
			display: flex;
			overflow: hidden;
			margin: 0 auto;
		}
	}
`;

export const Banner = styled.div`
	border-top: 2rem solid ${({ theme }) => theme.COLORS.ORANGE_900};
	border-bottom: 2rem solid ${({ theme }) => theme.COLORS.ORANGE_900};
	height: 80vh;

	img {
		aspect-ratio: 16/9;
		height: 100%;
		width: 100%;
	}
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: max-content;
	padding: 10rem 0;
	gap: 8rem;

	> .cards {
		display: flex;
		flex-direction: row;
		gap: 9rem;
	}

	> h2 {
		color: ${({ theme }) => theme.COLORS.ORANGE_900};
		text-transform: uppercase;
		font-weight: 400;
		font-size: 5rem;
	}

	> h3 {
		margin-top: -7rem;
		font-size: 3.6rem;
		text-transform: uppercase;
		font-weight: 400;
	}

	> #content {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 9rem;

		p {
			font-size: 3rem;
			line-height: 3.6rem;
			width: 65rem;
			text-align: justify;
		}

		img {
			width: 50rem;
			border-radius: 5rem;
		}
	}

	> nav {
		ul {
			display: flex;
			flex-direction: row;
			gap: 3.7rem;
			list-style: none;
			font-size: 4rem;
			text-transform: uppercase;
		}

		button {
			text-decoration: none;
			color: black;
			background-color: transparent;
			border: none;
			font-size: 3.2rem;
			text-transform: uppercase;
			cursor: pointer;
		}
	}

	> #products {
		ul {
			margin-top: 2rem;
			display: flex;
			flex-direction: row;
			list-style: none;
		}

		li {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-transform: uppercase;
			text-decoration: none;
		}

		li > a {
			color: black;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-decoration: none;
		}

		span {
			width: max-content;
			text-align: center;
			font-size: 2.5rem;
			font-weight: 400;
			margin-top: 1rem;
		}
	}
`;

export const Button = styled(Link)`
	background-color: ${({ theme }) => theme.COLORS.ORANGE_900};
	border: none;
	padding: 1.6rem 2.5rem;
	font-size: 3.6rem;
	color: white;
	text-transform: uppercase;
	cursor: pointer;
	font-weight: 400;
`;
