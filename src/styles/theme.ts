interface ThemeInterface {
	colors: {
		primary: string
		main: string
		bg: string
		nav_text: string

		black: string
		whiteTextBackground: string
		defaultFont: string
		border: string
		divider: string
		grey: string
		grey1: string
		grey2: string
		grey3: string
		grey4: string
		greyLight: string
		greyDisabled: string
		offWhite: string
		aluminum: string
		checkBoxBackground: string
		white: string
		warmWhite: string
		yellow: string
		yellow2: string
		notifyRed: string
		orange1: string
		orange: string
		orange2: string
		orange3: string
		purple: string
		purple2: string
		blue: string
		blueContrast: string
		stress5: string
		blue5: string
		darkCyan: string
		green: string
		green2: string
		green3: string
		brown: string
	}
}

export const theme: ThemeInterface = {
	colors: {
		primary: 'salmon',
		main: 'salmon',
		bg: '#f5f0ec',
		nav_text: '#433f3c',

		black: '#000',
		whiteTextBackground: 'rgba(0,0,0,.6)', // black at .7 background for white text of any size to pass wcag 2 AAA contrast standards. .6 only passes AA (good enough for now)
		defaultFont: '#393A41',
		border: '#B4B7C4',
		divider: '#fafafa',
		grey: '#6E7087',
		grey1: '#d4d8e7',
		grey2: '#CACBCD',
		grey3: '#6E7078',
		grey4: '#3c3e42',
		greyLight: '#f9f9f9',
		greyDisabled: '#e4e5e6',
		offWhite: '#D4D8E7',
		aluminum: '#E9E9E9',
		checkBoxBackground: '#F2F2F2',
		white: '#fff',
		warmWhite: '#f5f2ed',
		yellow: '#F9B738',
		yellow2: '#B88D06',
		notifyRed: '#EF5848',
		orange1: '#99332e',
		orange: '#BF4136',
		orange2: '#F69321',
		orange3: '#D6801D',
		purple: '#6159A4',
		purple2: '#887DE5',
		blue: '#00BADE',
		blueContrast: '#037ea2',
		stress5: '#0099B6',
		blue5: '#85D6E5',
		darkCyan: '#006b7f',
		green: '#44BB8C',
		green2: '#297f5e',
		green3: '#389A73',
		brown: '#70430F'
	}
}
