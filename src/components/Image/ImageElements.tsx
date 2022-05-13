import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const GalleryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    flex-wrap: wrap;
    padding: 2rem 0;
`
export const GalleryImg = styled.div`
    border: 3px solid white;
    width: 150px;
    height: 150px;
    position: relative;
    margin: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translate(-5px, -5px) scale(1.1, 1.1);
        box-shadow: 5px 5px 20px gray;
        z-index: 9;
    }
`
export const GuestImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8rem 1rem;
`

export const FileUpload = styled.label`
    display: flex;
    align-items: center;

    min-width: 300px;
    height: 3rem;
    margin: 0.5rem 0;
    padding: 0.3rem 0.3rem;
    border: 1px solid ${({ theme }) => theme.colors.text};
    background: inherit;

    font-size: 1.2rem;
    cursor: pointer;
`

export const FileUploadButton = styled.div`
    padding: 0.2rem 0.5rem;
    margin-right: 0.5rem;
    border-radius: 15px;
    box-shadow: 1px 1px 5px gray;

    &:hover {
        box-shadow: 1px 1px 10px gray;
    }
`
export const UploadForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`

export const CloseIcon = styled(FaTimes)`
    color: ${({ theme }) => theme.colors.bg};
    background: transparent;
    font-size: 1.5rem;
`
