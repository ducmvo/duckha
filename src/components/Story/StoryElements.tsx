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
    width: 300px;
    aspect-ratio: 1/1;
    border: 10px solid ${({ theme }) => theme.colors.white};
    box-shadow: 5px 5px 10px gray;
    background: inherit;
    margin: 0 5rem;
    @media (max-width: 768px) {
        flex: 1;
    }
`

export const SectionWrap = styled.div`
    flex: 1;
    padding: 2rem;
    background-color: inherit;
`
