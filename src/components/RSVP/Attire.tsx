import React from 'react'
import { RSVPInfo, RSVPTitle, RSVPContent } from './RSVPElements'

const Attire = () => {
    return (
        <RSVPInfo>
            <RSVPTitle>Dress code</RSVPTitle>
            <RSVPContent>
                <RSVPContent>Semi-Formal</RSVPContent>
                <RSVPContent style={{ fontSize: '0.6rem' }}>
                    (AKA Dressy Casual, or Cocktail)
                </RSVPContent>
            </RSVPContent>
        </RSVPInfo>
    )
}

export default Attire
