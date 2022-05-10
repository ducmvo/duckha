import styled from 'styled-components'

export const StoryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: inherit;
    padding: 150px 0;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const ImgWrap = styled.div`
    max-height: 299px;
    aspect-ratio: 1/1;
    border: 12px solid ${({ theme }) => theme.colors.white};
    box-shadow: 5px 5px 10px gray;
    background: inherit;
    margin: 0 5rem;
`

export const SectionWrap = styled.div`
    flex: 1;
    padding: 0 6rem 0 0;
    background-color: inherit;
    @media (max-width: 768px) {
        padding: 0 4rem;
    }
    @media (max-width: 500px) {
        padding: 0 3rem;
    }
`
export const Text = styled.p`
    background: inherit;
`
