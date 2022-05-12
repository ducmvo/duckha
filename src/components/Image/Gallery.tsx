import { RSVPContent, RSVPTitle } from '@components/RSVP/RSVPElements'
import { Image, User } from '@prisma/client'
import Img from 'next/image'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { GalleryContainer, GalleryImg } from './ImageElements'
type GalleryProps = {
    user: User
    imageUrl?: string
}
const Gallery: FC<GalleryProps> = (props) => {
    const { user, imageUrl } = props

    const [images, setImages] = useState<Image[]>([])

    const getUserImages = useCallback(async () => {
        const url = '/api/images'
        const params = {
            method: 'POST',
            body: JSON.stringify({
                user: user,
            }),
        }
        const { images } = await fetch(url, params).then((res) => res.json())
        setImages(images)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, imageUrl])

    useEffect(() => {
        if (!user) return
        getUserImages()
    }, [user, getUserImages])

    return (
        <GalleryContainer>
            {images.map((img) => (
                <GalleryImg key={img.imgUrl}>
                    <Img
                        alt="user-image"
                        src={img.imgUrl}
                        layout="fill"
                        objectFit="cover"
                    />
                </GalleryImg>
            ))}
        </GalleryContainer>
    )
}

export default Gallery
