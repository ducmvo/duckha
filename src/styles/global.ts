import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'
const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Cormorant Garamond','BemboStd','Dosis', sans-serif;
		background: ${() => theme.colors.bg};
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
	
	@font-face {
		font-family: 'BemboStd';
		src: url("/assets/fonts/BemboStd.otf");
		font-weight: 400;
		font-style: normal;
	}

	
`

export default GlobalStyle
