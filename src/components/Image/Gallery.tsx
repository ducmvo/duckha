import { useUser } from '@hooks/useAuth'
import { Image } from '@prisma/client'
import Img from 'next/image'
import React, { FC, useCallback, useEffect } from 'react'
import { GalleryContainer, GalleryImg } from './ImageElements'
type GalleryProps = {
    imageUrl?: string
    images: Image[]
    setImages: any
}
const Gallery: FC<GalleryProps> = (props) => {
    const { imageUrl, images, setImages } = props
    const user = useUser()

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
