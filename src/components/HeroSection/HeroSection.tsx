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
	HeroH1
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
			{/* <HeroContent>
				<HeroH1>Virtual Banking Made Easy</HeroH1>
				<HeroP>
					Sign up for a new account today and receive $500 in credit
					towards your next payments.
				</HeroP>
				<HeroBtnWrapper>
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
				</HeroBtnWrapper>
			</HeroContent> */}
		</HeroContainer>
	)
}

export default HeroSection
