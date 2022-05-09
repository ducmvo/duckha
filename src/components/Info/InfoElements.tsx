import styled from 'styled-components'
import Image from 'next/image'
export const Title = styled.h2`
    background: transparent;
    font-family: 'HighSpirited';
    font-size: clamp(3.5rem, 8vw, 5.25rem);
    font-weight: 800;
    margin-bottom: 16px;
    padding: 0rem 5rem;
    @media (max-width: 600px) {
        padding: 0rem 2rem;
    }
`

export const Content = styled.p`
    margin: 1rem 0;
    background-color: transparent;
    padding: 0rem 5rem;
    @media (max-width: 600px) {
        padding: 0rem 2rem;
    }
`

export const Img = styled(Image)`
    width: 100%;
`

export const Row = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 150px 0;

    background-color: ${({ theme, skew }: { theme: any; skew: any }) =>
        skew ? theme.colors.bgSkew : 'transparent'};

    transform: ${({ skew }: { skew: any }) =>
        skew ? 'skewY(-11.5deg)' : 'none'};
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

export const Column = styled.div`
    padding: 0 15px;
    max-width: 1000px;
    transform: ${({ skew }: { skew: any }) =>
        skew ? 'skewY(11.5deg)' : 'none'};
    background-color: inherit;
    padding: 5rem 1rem;
`
