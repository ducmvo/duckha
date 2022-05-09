import styled from 'styled-components'

export const CountDownWrapper = styled.div`
    color: ${({ theme }) => theme.colors.text};
    background-color: inherit;
    min-width: 375px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`
export const CountDownElement = styled.div`
    background-color: inherit;
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
    text-align: center;
`

export const CountDownLabel = styled(CountDownElement)`
    font-family: 'URWGothic';
    background-color: inherit;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    padding-top: 18px;
    padding-right: 2rem;
    @media (max-width: 700px) {
        padding: 0;
    }
`
