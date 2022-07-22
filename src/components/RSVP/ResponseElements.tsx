import styled from 'styled-components'

export const Slider = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #d3d3d3;
    margin-top: 1rem;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    cursor: pointer;

    /* Mouse-over effects */
    :hover {
        opacity: 1; /* Fully shown on mouse-over */
    }

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.text};
    }

    ::-moz-range-thumb {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.text};
        cursor: pointer;
    }
`

export const ResponseTextArea = styled.textarea`
    width: 100%;
    margin: 1rem 0;
    padding: 0.3rem 0.3rem;
    font-size: min(1.5rem, 10vw);
    border: 1px solid ${({ theme }) => theme.colors.text};
    background: inherit;
    &:focus {
        outline-color: ${({ theme }) => theme.colors.text};
        background: whitesmoke;
    }
`
