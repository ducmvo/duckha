import { RSVPContent, RSVPTitle } from '@components/RSVP/RSVPElements'
import Section from '@components/Section'
import { rsvpSections } from '@libs/data'
import { Image } from '@prisma/client'
import React, { FC, useState } from 'react'
import Gallery from './Gallery'
import { GuestImageContainer } from './ImageElements'
import Upload from './Upload'

type GuestImageProps = {
    id: string
}
const GuestImage: FC<GuestImageProps> = (props) => {
    const { id } = props
    const [imageUrl, setImageUrl] = useState<string>()
    const [images, setImages] = useState<Image[]>([])

    return (
        <Section skew noPadding id={id}>
            <GuestImageContainer>
                <RSVPTitle>{id}</RSVPTitle>
                {rsvpSections[id].map((c, i) => (
                    <RSVPContent key={i}>{c}</RSVPContent>
                ))}
                <Gallery
                    imageUrl={imageUrl}
                    images={images}
                    setImages={setImages}
                />
                <Upload setImageUrl={setImageUrl} />
            </GuestImageContainer>
        </Section>
    )
}

export default GuestImage
