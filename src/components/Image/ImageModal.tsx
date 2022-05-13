import Img from 'next/image'
import React, { FC } from 'react'
import { CloseIcon } from './ImageElements'

type ImageModelProps = {
    closeBackdrop: any
    image: string
}
const ImageModal: FC<ImageModelProps> = (props) => {
    const { closeBackdrop, image } = props
    return (
        <div style={{ padding: '1rem' }}>
            <div
                style={{ textAlign: 'right', cursor: 'pointer' }}
                onClick={closeBackdrop}
            >
                <CloseIcon />
            </div>
            <Img
                style={{ cursor: 'pointer' }}
                alt="user-image"
                src={image}
                objectFit="contain"
                width={900}
                height={900}
            />
        </div>
    )
}

export default ImageModal
