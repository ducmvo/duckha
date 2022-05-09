import { FC } from 'react'
import {
    Content,
    Container,
    Title,
    ContainerSkew,
    ContentSkew,
} from './SectionElements'

export type SectionProps = {
    children: React.ReactNode
    skew?: boolean
    title?: string
    noPadding?: boolean
    id?: string
}
const Section: FC<SectionProps> = (props) => {
    const { children, skew, title, noPadding, id } = props
    const display = skew ? (
        <ContainerSkew noPadding={noPadding}>
            <ContentSkew noPadding={noPadding} id={id}>
                {title && <Title>{title}</Title>}
                {children}
            </ContentSkew>
        </ContainerSkew>
    ) : (
        <Container noPadding={noPadding} id={id}>
            <Content noPadding={noPadding}>
                {title && <Title>{title}</Title>}
                {children}
            </Content>
        </Container>
    )
    return display
}

export default Section
