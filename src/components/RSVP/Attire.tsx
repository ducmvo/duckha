import React from 'react'
import { AttireColor, RSVPContent, RSVPInfo, RSVPTitle } from './RSVPElements'

const Attire = () => {
    return (
        <RSVPInfo>
            <RSVPTitle>Attire</RSVPTitle>
            <RSVPContent>
                <RSVPContent>Semi-Formal</RSVPContent>
                <RSVPContent style={{ fontSize: '0.8rem' }}>
                    (AKA Dressy Casual, or Cocktail)
                </RSVPContent>
                <br />
                <RSVPContent>
                    <AttireColor color="#d6b6a7"></AttireColor>
                    <AttireColor color="#cbab9e"></AttireColor>
                    <AttireColor color="#58765e"></AttireColor>
                    <AttireColor color="#d78241"></AttireColor>
                    <AttireColor color="#a54400"></AttireColor>
                </RSVPContent>
            </RSVPContent>
        </RSVPInfo>
    )
}

export default Attire
