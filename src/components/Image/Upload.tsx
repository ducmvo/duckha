import Button from '@components/Button'
import Loading from '@components/Loading'
import {
    Form,
    FormInput,
    FormWrap,
    Message,
} from '@components/RSVP/RSVPElements'
import { uploadImage } from '@libs/fetcher'
import * as gtag from '@libs/gtag'
import { User } from '@prisma/client'
import React, { FC, useState } from 'react'

type UploadProps = {
    user: User
}

const Upload: FC<UploadProps> = (props) => {
    const { user } = props
    const [image, setImage] = useState<File>()
    const [imageName, setImageName] = useState<string>('')
    const [imageUrl, setImageUrl] = useState()
    const [error, setError] = useState(false)
    const [message, setMessage] = useState<string>()
    const [loading, setLoading] = useState(false)

    const handleSelectImage = (e: any) => {
        e.preventDefault()
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            setImageName(e.target.value)
            setError(false)
        }
    }
    const handleUpload = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        if (!image) {
            setError(true)
            setMessage('No file chosen')
        } else {
            gtag.event({
                action: 'upload_image',
                category: 'RSVP',
                label: 'upload',
                value: imageName,
            })
            const imgUrl = await uploadImage(image, user)
            setImageUrl(imgUrl)
            setImage(undefined)
            setImageName('')
            setError(false)
            setMessage('file uploaded successfully!')
        }
        setLoading(false)
    }

    return (
        <FormWrap>
            <Form style={{ height: '300px' }}>
                {message && error && <Message error>{message}</Message>}
                {message && !error && (
                    <Message error={false}>{message}</Message>
                )}
                {loading ? (
                    <Loading />
                ) : (
                    <FormInput
                        type="file"
                        accept="image/*"
                        id="myFile"
                        name="filename"
                        onChange={handleSelectImage}
                        value={imageName}
                    />
                )}

                <Button
                    onClick={handleUpload}
                    style={{ fontFamily: 'URWGothic' }}
                >
                    Upload
                </Button>
            </Form>
        </FormWrap>
    )
}

export default Upload
