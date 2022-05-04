import styled from 'styled-components'
import Link from 'next/link'
import { LinkProps } from '@type/Link'
import { FC } from 'react'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 5rem 0;
`

export const FormWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const FormTitle = styled.h1`
    font-size: 2.5rem;
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
`
export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`
export const FormLabel = styled.label`
    font-size: 1.2rem;
    margin-top: 15px;
    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`
export const FormInput = styled.input`
    width: 100%;
    min-width: 250px;

    margin: 0.5rem 0;
    padding: 0.3rem 0.3rem;
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.text};

    &:focus {
        outline-color: ${({ theme }) => theme.colors.text};
    }
`
export const FormButton = styled.button`
    padding: 0.5rem;
    margin: 1rem 0.5rem;
    border-radius: 3px;
    width: 50%;
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
    font-size: 1rem;
    text-align: center;
    margin: 10;
    color: salmon;
`

export const RSVPInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`

export const RSVPTitle = styled.div`
    font-size: 1.5rem;
    font-family: 'BemboStd';

    @media screen and (max-width: 480px) {
        font-size: 1.3rem;
    }
    padding: 0.5rem;
`

export const RSVPContent = styled.div`
    font-family: 'URWGothic';
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    padding-bottom: 0.2rem;
    text-transform: uppercase;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 0.7rem;
    }
`

export const GuestAttendanceForm = styled.form`
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
    }
`
export const GuestName = styled.div`
    text-transform: uppercase;
`
export const AttendLabel = styled.div`
    margin: 0.2rem 0;
`
export const InputLabel = styled.label``
export const GuestInput = styled.input`
    margin: 0.5rem 0;
    padding: 0.3rem 0.3rem;
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.text};
    &:focus {
        outline-color: ${({ theme }) => theme.colors.text};
    }
    &[type='radio']:checked:before {
        content: '';
        display: block;
        position: relative;
        top: 0px;
        left: 0px;
        width: 13px;
        height: 13px;
        border-radius: 100%;
        background: grey;
    }
`
export const GuestInputText = styled.span`
    padding-left: 0.5rem;
`
export const Companions = styled.div`
    display: flex;
    flex-direction: column;
`

export const DressCode = styled.div``
