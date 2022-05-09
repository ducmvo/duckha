import styled from 'styled-components'
import Image from 'next/image'
import { SectionProps } from './Section'

export const Container = styled.div<SectionProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ noPadding }) => (noPadding ? '0' : '150px 0')};
    background-color: transparent;
`

export const ContainerSkew = styled(Container)`
    padding: ${({ noPadding }) => (noPadding ? '0' : '150px 0')};
    background-color: ${({ theme }) => theme.colors.bgSkew};
    transform: skewY(-11.5deg);
`

export const Title = styled.div`
    background: transparent;
    font-family: 'HighSpirited';
    font-size: clamp(3.5rem, 8vw, 5.25rem);
    font-weight: 800;
    margin-bottom: 16px;
`

export const Content = styled.div<SectionProps>`
    margin: 1rem 0;
    background-color: transparent;
    padding: ${({ noPadding }) => (noPadding ? '0' : '0 10rem')};
    display: flex;
    gap: 1rem;
    flex-direction: column;
    @media (max-width: 768px) {
        padding: ${({ noPadding }) => (noPadding ? '0' : '0 4rem')};
    }

    @media (max-width: 500px) {
        padding: ${({ noPadding }) => (noPadding ? '0' : '0 3rem')};
    }
`
export const ContentSkew = styled(Content)`
    transform: skewY(11.5deg);
`

export const Img = styled(Image)`
    width: 100%;
`

export const Media = styled.div`
    transform: skewY(-11.5deg);

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    flex-direction: column;
    @media (min-width: 48rem) {
        flex-direction: row;
    }
`

export const MediaImg = styled.div`
    transform: skewY(11.5deg);
    height: 300px;
    aspect-ratio: 1/1;
    border: 10px solid ${({ theme }) => theme.colors.white};
    margin: -2rem 1rem 3rem 1rem;
    box-shadow: 5px 5px 10px gray;
`

export const MediaContent = styled.div`
    transform: skewY(11.5deg);
    background-color: inherit;
`