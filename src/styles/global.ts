import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'URWGothic';
		src: url("/assets/fonts/URWGothic.ttf");
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'HighSpirited';
		src: url("/assets/fonts/HighSpirited.ttf");
		font-weight: 400;
		font-style: normal;
	}
	
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Cormorant Garamond', serif;
		font-weight: 500;
		font-style: normal;
	}
	
`

export default GlobalStyle
