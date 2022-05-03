import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Cormorant Garamond','BemboStd','Dosis', sans-serif;
		background: #f5f0ec;
	}
	h1 { 
		font-size: 1.2rem;
		font-family: 'BemboStd';
		letter-spacing: 0.05rem;
	}
	h2 { 
		font-family: 'URWGothic';
		letter-spacing: 0.2rem;
		font-size: 0.7rem;
	}
	h3 { 
		font-family: 'URWGothic';
		letter-spacing: 0.1rem;
		font-size: 0.5rem;
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
