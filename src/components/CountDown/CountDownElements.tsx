import styled from 'styled-components'

export const CountDownWrapper = styled.div`
    color: ${({ theme }) => theme.colors.text};
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    padding: 150px 0;
`
export const CountDownElement = styled.div`
    background-color: inherit;
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
    text-align: center;
`

export const CountDownLabel = styled(CountDownElement)`
    font-family: 'Zen Kaku Gothic New';
    background-color: inherit;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    padding-top: 18px;
    padding-right: 2rem;
    @media (max-width: 768px) {
        padding: 0;
    }
`
export const Completion = styled(CountDownElement)``
