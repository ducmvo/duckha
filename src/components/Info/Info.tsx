import Section from '@components/Section'
import { homeSections } from '@libs/data'
import { FC } from 'react'
type InfoProps = {
    id: string
}
const Info: FC<InfoProps> = (props) => {
    const { id } = props
    return (
        <Section title={id} id={id}>
            {homeSections[id].map((p, i) => (
                <p key={i}>{p}</p>
            ))}
        </Section>
    )
}

export default Info
