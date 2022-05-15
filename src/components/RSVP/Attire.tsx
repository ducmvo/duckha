import Section from '@components/Section'
import { attireColors, rsvpSections } from '@libs/data'
import React, { FC } from 'react'
import { AttireColor, RSVPContent, RSVPInfo, RSVPTitle } from './RSVPElements'

type AttireProps = {
    id: string
}
const Attire: FC<AttireProps> = (props) => {
    const { id } = props
    return (
        <Section id={id}>
            <RSVPInfo>
                <RSVPTitle>{id}</RSVPTitle>
                {rsvpSections[id].map((c, i) => (
                    <RSVPContent key={i}>{c}</RSVPContent>
                ))}
                <br />
                <RSVPContent>
                    {attireColors.map((color, i) => (
                        <AttireColor key={i} color={color}></AttireColor>
                    ))}
                </RSVPContent>
            </RSVPInfo>
        </Section>
    )
}

export default Attire
