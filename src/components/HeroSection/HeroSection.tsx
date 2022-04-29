import { useToggle } from '@hooks'
import React from 'react'
import { Button } from '@components/Button'
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	ImageBg,
	ArrowForward,
	ArrowRight,
	HeroBtnWrapper,
	HeroContent,
	HeroP,
	HeroH1,
	Duc,
	Kha,
	HeroName,
	CountDown
} from './HeroElements'

const HeroSection = () => {
	const [hover, setHover] = useToggle(false)

	return (
		<HeroContainer>
			<HeroBg>
				{/* <VideoBg
					autoPlay
					loop
					muted
					src="/assets/videos/video.mp4"
					type="video/mp4"
				/> */}
				<ImageBg src="/assets/images/4.jpg" layout="fill" />
			</HeroBg>

			<HeroContent>
				<HeroName>
					<Duc>Duc</Duc>
					<Kha>Kha</Kha>
				</HeroName>

				{/* <HeroBtnWrapper>
					<Button
						to="signup"
						onMouseEnter={setHover}
						onMouseLeave={setHover}
						primary="true"
						dark="true"
						smooth={true}
						duration={500}
						spy={true}
						offset={-80}
					>
						Get started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper> */}
				<CountDown>118 Days | 2 Hours | 34 Minutes | 56 Seconds</CountDown>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection
