import styled from 'styled-components'
import Link from 'next/link'
import { LinkProps } from '@type/Link'
import { FC } from 'react'
export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding-bottom: 3rem;
	/* min-height: 692px;
	position: fixed;
	inset: 0
	z-index: 0;
	overflow: hidden;
	background: linear-gradient(108deg, salmon 50%, white 100%); */
`

export const FormWrap = styled.div`
	/* height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 480px) {
		height: 80%;
	} */
	/* background: salmon; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const FormTitle = styled.h1`
	font-size: 1.8rem;
	margin-bottom: 1.5rem;

	@media screen and (max-width: 480px) {
		font-size: 1.5rem;
	}
`

const StyledIcon = styled.a`
	margin-left: 32px;
	margin-top: 32px;
	text-decoration: none;
	color: #fff;
	font-weight: bold;
	font-size: 32px;
	font-family: 'Amelaryas';
	margin-left: 16px;
	margin-top: 8px;
`

export const Icon: FC<LinkProps> = (props) => {
	const { href, children } = props
	return (
		<Link href={href} passHref>
			<StyledIcon>{children}</StyledIcon>
		</Link>
	)
}

export const FormContent = styled.div`
	display: ${({ user }: { user: boolean }) => (user ? 'none' : 'flex')};
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 480px) {
		padding: 10px;
	}
`
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background-color: #191919;
	max-width: 400px;
	height: auto;
	width: 100%;
	z-index: 1;
	display: grid;
	margin: 0 auto;
	padding: 80px 32px;
	border-radius: 20px;
	box-shadow: 0 1px 30px rgba(0, 0, 0, 0.9);

	@media screen and (max-width: 480px) {
		padding: 32px 32px;
	} */
`
export const FormH1 = styled.h1`
	margin-bottom: 40px;
	color: #fff;
	font-size: 20px;
	font-weight: 400;
	text-align: center;
`
export const FormLabel = styled.label`
	/* margin-bottom: 8px;
	font-size: 14px;
	color: #fff; */
	/* text-transform: uppercase; */
	font-size: 1.2rem;
	margin-top: 15px;
	@media screen and (max-width: 480px) {
		font-size: 1rem;
	}
`
export const FormInput = styled.input`
	padding: 5px 5px;
	margin: 15px 0px;
	border-radius: 5px;
	width: 100%;
	min-width: 250px;
`
export const FormButton = styled.button`
	/* background: ${(props) => props.theme.colors.main}; */
	padding: 0.5rem;
	/* border: none; */
	border-radius: 3px;
	width: 50%;
	/* color: #fff; */
	cursor: pointer;
	text-transform: uppercase;
	font-family: 'URWGothic';
	font-size: 0.8rem;
	letter-spacing: 0.1rem;
	transition: all 0.1s ease-in-out;
	&:hover {
		background-color: ${({ theme }) => theme.colors.text};
		color: white;
	}

	@media screen and (max-width: 480px) {
		font-size: 0.6rem;
	}
`
export const Text = styled.span`
	text-align: center;
	margin-top: 24px;
	color: #fff;
	font-size: 14px;
`

export const NotFound = styled.div`
	/* color: salmon; */
	font-size: 1rem;
	text-align: center;
	margin: 10;
	color: salmon;
`
