import Section from '@components/Section'
import { rsvpSections } from '@libs/data'
import { FC } from 'react'
import { RSVPContent, RSVPInfo, RSVPTitle } from './RSVPElements'
type ReceptionProps = {
    id: string
}
const Reception: FC<ReceptionProps> = (props) => {
    const { id } = props
    return (
        <Section skew id={id}>
            <RSVPInfo>
                <RSVPTitle>{id}</RSVPTitle>
                {rsvpSections[id].map((c, i) => (
                    <RSVPContent key={i}>{c}</RSVPContent>
                ))}
            </RSVPInfo>
        </Section>
    )
}

export default Reception
