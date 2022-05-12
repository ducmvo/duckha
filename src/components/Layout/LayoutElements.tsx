import styled from 'styled-components'

export const LayoutContainer = styled.div`
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.colors.bg};
`

export const LayoutContent = styled.div`
    flex: 1;
    max-width: 1100px;
    box-shadow: 10px 10px 50px gray;
`
