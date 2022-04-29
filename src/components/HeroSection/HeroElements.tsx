import { FC } from 'react'
import styled from 'styled-components'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import Image from 'next/image'

export const HeroContainer = styled.div`
	background: #0c0c0c;
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
		background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), 
					linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)
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
`

export const HeroH1 = styled.h1`
	color: white;
	font-size: 48px;
	text-align: center;

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

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
	@media screen and (max-width: 480px) {
		font-size: 18px;
	}
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
