import { FC } from 'react'
import styled from 'styled-components'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import Image from 'next/image'

export const HeroContainer = styled.div`
	background: ${({ theme }) => theme.colors.bg};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: 800px;
	position: relative;
	z-index: 1;

	&:before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
				180deg,
				rgba(255, 255, 255, 0.1) 0%,
				rgba(255, 255, 255, 0.9) 100%
			),
			linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
		z-index: 2;
	}
`

export const HeroBg = styled.div`
	position: absolute;
	inset: 0; /* top right bottom left */
	width: 100%;
	height: 100%;
	overflow: hidden;
`

export const ImageBg = styled(Image)`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`

const StyledVideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`

type VideoBgProps = {
	autoPlay: boolean
	loop: boolean
	muted: boolean
	src: string
	type: string
}

export const VideoBg: FC<VideoBgProps> = (props) => {
	const { src, type, ...rest } = props
	return (
		<StyledVideoBg {...rest}>
			<source src={src} type={type} />
		</StyledVideoBg>
	)
}

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
`

export const HeroName = styled.div`
	color: ${({ theme }) => theme.colors.text};
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 2rem;
`

export const Duc = styled.div`
	position: absolute;
	transform: translate(-4rem, -2rem);
	font-family: 'DiamondFlowers';

	@media screen and (max-width: 768px) {
		font-size: 1.5rem;
		transform: translate(-4rem, -3rem);
	}
	@media screen and (max-width: 480px) {
		font-size: 1rem;
		transform: translate(-1.5rem, -1.5rem);
	}
`

export const Kha = styled.div`
	position: absolute;
	transform: translate(3rem, 2rem);
	font-family: 'DiamondFlowers';

	@media screen and (max-width: 768px) {
		font-size: 1.5rem;
		transform: translate(1rem, 1rem);
	}
	@media screen and (max-width: 480px) {
		font-size: 1rem;
		transform: translate(1.5rem, 1.5rem);
	}
`

export const HeroH1 = styled.h1`
	color: white;
	font-size: 48px;
	text-align: center;
	font-family: 'DiamondFlowers';
	padding-top: 100px;

	@media screen and (max-width: 768px) {
		font-size: 40px;
	}
	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`

export const HeroP = styled.p`
	margin-top: 24px;
	color: white;
	font-size: 24px;
	text-align: center;
	max-width: 600px;
	text-transform: uppercase;
	color: black;
	position: absolute;
	/* background: salmon; */
	bottom: 100px;
`

export const CountDown = styled.div`
	margin-top: 24px;
	color: white;
	font-size: 24px;
	text-align: center;
	max-width: 600px;
	text-transform: uppercase;
	color: black;
	position: absolute;
	/* background: salmon; */
	bottom: 100px;
`

export const HeroBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
	margin-left: 8px;
	font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`
