import React from 'react'
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube
} from 'react-icons/fa'
import {
	FooterContainer,
	FooterWrap,
	FooterLinkWrapper,
	FooterLinkItems,
	FooterLinkContainer,
	FooterLinkTitle,
	FooterLink,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	WebsiteRights
} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop()
	}

	return (
		<FooterContainer>
			<FooterWrap>
				{/* <FooterLinkContainer>
					<FooterLinkWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About us</FooterLinkTitle>
							<FooterLink href="/">How it works</FooterLink>
							<FooterLink href="/">Testimonials</FooterLink>
							<FooterLink href="/">Careers</FooterLink>
							<FooterLink href="/">Investors</FooterLink>
							<FooterLink href="/">Terms of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Contact Us</FooterLinkTitle>
							<FooterLink href="/">Contact</FooterLink>
							<FooterLink href="/">Support</FooterLink>
							<FooterLink href="/">Destinations</FooterLink>
							<FooterLink href="/">Sponsorships</FooterLink>
						</FooterLinkItems>
					</FooterLinkWrapper>

					<FooterLinkWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Videos</FooterLinkTitle>
							<FooterLink href="/">Submit Video</FooterLink>
							<FooterLink href="/">Ambassadors</FooterLink>
							<FooterLink href="/">Agency</FooterLink>
							<FooterLink href="/">Influencer</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>
							<FooterLink href="/">Instagram</FooterLink>
							<FooterLink href="/">Facebook</FooterLink>
							<FooterLink href="/">Youtube</FooterLink>
							<FooterLink href="/">Twitter</FooterLink>
						</FooterLinkItems>
					</FooterLinkWrapper>
				</FooterLinkContainer> */}
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo href="/" onClick={toggleHome}>
							D&K
						</SocialLogo>
						{/* <WebsiteRights>
							D&K © {new Date().getFullYear()} All rights reserved.
						</WebsiteRights> */}
						<SocialIcons>
							<SocialIconLink
								href="//www.facebook/duckha2022"
								target="_blank"
								arial-label="Facebook"
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href="//www.instagram.com/duckha2022/"
								target="_blank"
								arial-label="Instagram"
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href="//www.youtube.com/channel/duckha2022"
								target="_blank"
								arial-label="Youtube"
							>
								<FaYoutube />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer
