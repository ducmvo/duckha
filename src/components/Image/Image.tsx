import { RSVPContent, RSVPTitle } from '@components/RSVP/RSVPElements'
import { gallery, sectionRSVP } from '@libs/data'
import { Image, User } from '@prisma/client'
import React, { FC, useState } from 'react'
import Gallery from './Gallery'
import { GuestImageContainer } from './ImageElements'
import Upload from './Upload'

type GuestImageProps = {
    user: User
}
const GuestImage: FC<GuestImageProps> = (props) => {
    const [imageUrl, setImageUrl] = useState<string>()
    const [images, setImages] = useState<Image[]>([])

    return (
        <GuestImageContainer>
            <RSVPTitle>{sectionRSVP[3]}</RSVPTitle>
            <RSVPContent style={{ fontSize: '0.8rem' }}>
                {gallery[0]}
            </RSVPContent>
            <Gallery
                imageUrl={imageUrl}
                images={images}
                setImages={setImages}
            />
            <Upload setImageUrl={setImageUrl} />
        </GuestImageContainer>
    )
}

export default GuestImage
