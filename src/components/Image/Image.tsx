import { RSVPContent, RSVPTitle } from '@components/RSVP/RSVPElements'
import { gallery, sectionRSVP } from '@libs/data'
import { User } from '@prisma/client'
import React, { FC } from 'react'
import Gallery from './Gallery'
import { GuestImageContainer } from './ImageElements'
import Upload from './Upload'

type GuestImageProps = {
    user: User
}
const GuestImage: FC<GuestImageProps> = (props) => {
    const { user } = props
    return (
        <GuestImageContainer>
            <RSVPTitle>{sectionRSVP[3]}</RSVPTitle>
            <RSVPContent style={{ fontSize: '0.8rem' }}>
                {gallery[0]}
            </RSVPContent>
            <Gallery user={user} />
            <Upload user={user} />
        </GuestImageContainer>
    )
}

export default GuestImage
