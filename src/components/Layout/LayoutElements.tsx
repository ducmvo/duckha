import styled from 'styled-components'

export const LayoutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.bg};
`

export const LayoutContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    max-width: 1200px;
    width: 100%;
    box-shadow: 10px 10px 50px gray;
    min-height: 100vh;
`
