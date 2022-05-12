import styled from 'styled-components'

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
`
