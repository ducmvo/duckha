import React from 'react'
import { RSVPInfo, RSVPTitle, RSVPContent } from './RSVPElements'

const Attire = () => {
    return (
        <RSVPInfo>
            <RSVPTitle>Attire</RSVPTitle>
            <RSVPContent>
                <RSVPContent>Semi-Formal</RSVPContent>
                <RSVPContent style={{ fontSize: '0.8rem' }}>
                    (AKA Dressy Casual, or Cocktail)
                </RSVPContent>
            </RSVPContent>
        </RSVPInfo>
    )
}

export default Attire
