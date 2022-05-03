import React, { FC } from 'react'
import { BigDay, months, days } from '@libs/data'

import styled from 'styled-components'
import LinkR from 'next/link'
import { LinkProps } from '@type/Link'

const Hero = () => {
	const day = days[BigDay.getDay()]
	const date = BigDay.getDate()
	const month = months[BigDay.getMonth()]
	const year = BigDay.getFullYear()
	return (
		<Section>
			<Names>Duc & Kha</Names>
			<BigDate>
				{day} {month} {date}, {year}
			</BigDate>
			<Location>Hue, Vietnam</Location>
			<RSVPButton href="/rsvp">RSVP</RSVPButton>
		</Section>
	)
}

export default Hero

export const Section = styled.div`
	padding: 3rem;
	height: 800px;
	border-bottom: 1px solid black;
	display: flex;
	/* align-items: center; */
	justify-content: center;
	flex-direction: column;
	gap: 0.2rem;
	color: ${({ theme }) => theme.colors.text};
`

export const Names = styled.div`
	font-family: 'HighSpirited';
	font-size: 5rem;
	@media screen and (max-width: 468px) {
		font-size: 3rem;
	}
`
export const BigDate = styled.div`
	/* text-transform: uppercase; */
	font-family: 'URWGothic';
	font-size: 0.8rem;
	letter-spacing: 0.1rem;
	@media screen and (max-width: 468px) {
		font-size: 0.6rem;
	}
`
export const Location = styled.div`
	/* text-transform: uppercase; */
	font-family: 'URWGothic';
	font-size: 0.8rem;
	letter-spacing: 0.1rem;
	@media screen and (max-width: 468px) {
		font-size: 0.6rem;
	}
`

export const StyledRSVPButton = styled.button`
	margin: 0.5rem 0;
	text-transform: uppercase;
	font-family: 'URWGothic';
	font-size: 0.8rem;
	letter-spacing: 0.1rem;
	width: 100px;
	padding: 0.3rem;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.text};
		color: ${({ theme }) => theme.colors.white};
	}

	@media screen and (max-width: 468px) {
		font-size: 0.6rem;
	}
`

type RSVPButtonLinkProps = LinkProps & { children?: React.ReactNode }
export const RSVPButton: FC<RSVPButtonLinkProps> = (props) => {
	const { href, children } = props
	return (
		<LinkR href={href} passHref>
			<StyledRSVPButton>{children}</StyledRSVPButton>
		</LinkR>
	)
}
