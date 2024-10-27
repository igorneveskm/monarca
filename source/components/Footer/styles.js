import styled from "styled-components";

export const Container = styled.footer`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;
	border-top: 2rem solid ${({ theme }) => theme.COLORS.ORANGE_900};
	padding-top: 4.7rem;
	padding-left: 25rem;
	padding-right: 30rem;

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

	.social-links li {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	
	.social-links li a {
		color: white
	}

	.footer-icon {
		width: 25rem;
		height: auto;
	}
`;
