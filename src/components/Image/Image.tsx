import { RSVPContent, RSVPTitle } from '@components/RSVP/RSVPElements'
import { User } from '@prisma/client'
import React, { FC } from 'react'
import Gallery from './Gallery'
import Upload from './Upload'

type GuestImageProps = {
    user: User
}
const GuestImage: FC<GuestImageProps> = (props) => {
    const { user } = props
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <RSVPTitle>Gallery</RSVPTitle>
            <RSVPContent style={{ fontSize: '0.8rem' }}>
                Have photos with us? please share!! ❤
            </RSVPContent>
            <Gallery user={user} />
            <Upload user={user} />
        </div>
    )
}

export default GuestImage
