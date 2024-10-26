import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	main {
		display: flex;
		flex-direction: row;
		gap: 5rem;
		justify-content: center;
		align-items: center;
		padding: 8rem;
		gap: 20rem;
	}

	.left {
		#squareOne {
			width: 32rem;
			height: 32rem;
			border: 16px solid #fb5009;
			position: relative;
		}

		#squareTwo {
			width: 32rem;
			height: 32rem;
			border: 16px solid ${({ theme }) => theme.COLORS.ORANGE_900};
			position: absolute;
			margin-top: -35rem;
			margin-left: 5rem;
			background-color: #ffffff;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}

	.right {
		h2 {
			font-size: 3.2rem;
			font-family: "Inter", sans-serif;
			font-weight: 400;
			text-transform: uppercase;
		}

		h3 {
			font-size: 1.6rem;
			font-family: "Inter", sans-serif;
			font-weight: 400;
			margin: 3.1rem 0;
		}

		ol {
			margin-left: 2rem;
			font-family: "Inter", sans-serif;
		}
	}
`;

export const TitlePage = styled.div`
	background-color: ${({ theme }) => theme.COLORS.ORANGE_900};
	color: #ffffff;
	font-family: "Inter", sans-serif;
	text-transform: uppercase;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	padding: 2rem 0;
	display: flex;
	font-weight: 400;
	font-size: 2.4rem;
`;
