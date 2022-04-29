import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Dosis', sans-serif;
	}

	@font-face {
		font-family: 'Amelaryas';
		src: url("/assets/fonts/Amelaryas.otf");
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: 'DiamondFlowers';
		src: url("/assets/fonts/DiamondFlowers.ttf");
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: 'SinthaMoqen';
		src: url("/assets/fonts/SinthaMoqen.otf");
		font-weight: 400;
		font-style: normal;
	}
`

export default GlobalStyle
