import styled from 'styled-components'
import Link from 'next/link'
import { LinkProps } from '@type/Link'
import { FC } from 'react'

export const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.colors.bg};
    /* padding-top: 5rem; */
`

export const FooterWrap = styled.div`
    padding: 0rem 1rem 5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const StyledFooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: ${(props) => props.theme.main};
        transition: 0.3s ease-in-out;
    }
`
export const FooterLink: FC<LinkProps> = (props) => {
    const { href, children } = props
    return (
        <Link href={href} passHref>
            <StyledFooterLink>{children}</StyledFooterLink>
        </Link>
    )
}

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    /* margin: 40px auto 0 auto; */

    flex-direction: column;
    /* @media screen and (max-width: 820px) {
	} */
`

export const StyledSocialLogo = styled.a`
    color: ${({ theme }) => theme.colors.text};
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-family: 'HighSpirited';
    font-size: 4rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

export const SocialLogo: FC<LinkProps> = (props) => {
    const { href, children, onClick } = props
    return (
        <Link href={href} passHref>
            <StyledSocialLogo onClick={onClick}>{children}</StyledSocialLogo>
        </Link>
    )
}

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
`
export const SocialIconLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    font-size: 24px;
`
