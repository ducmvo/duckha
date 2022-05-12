import { attire, attireColors, sectionRSVP } from '@libs/data'
import React from 'react'
import { AttireColor, RSVPContent, RSVPInfo, RSVPTitle } from './RSVPElements'

const Attire = () => {
    return (
        <RSVPInfo>
            <RSVPTitle>{sectionRSVP[2]}</RSVPTitle>
            <RSVPContent>
                <RSVPContent>{attire[0]}</RSVPContent>
                <RSVPContent style={{ fontSize: '0.8rem' }}>
                    {attire[1]}
                </RSVPContent>
                <br />
                <RSVPContent>
                    {attireColors.map((color, i) => (
                        <AttireColor key={i} color={color}></AttireColor>
                    ))}
                </RSVPContent>
            </RSVPContent>
        </RSVPInfo>
    )
}

export default Attire
