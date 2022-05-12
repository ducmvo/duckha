import { FC } from 'react'
import Section from '@components/Section'
import { info, sectionHome } from '@libs/data'
type InfoProps = {
    id?: string
}
const Info: FC<InfoProps> = (props) => {
    const { id } = props
    return (
        <Section title={id} id={id}>
            {info.map((p, i) => (
                <p key={i}>{p}</p>
            ))}
        </Section>
    )
}

export default Info
