import Button from '@components/Button'
import Loading from '@components/Loading'
import { FormInput, FormWrap, Message } from '@components/RSVP/RSVPElements'
import { useUser } from '@hooks/useAuth'
import { uploadImage } from '@libs/fetcher'
import * as gtag from '@libs/gtag'
import React, { FC, useState } from 'react'
import { FileUpload, FileUploadButton, UploadForm } from './ImageElements'

type UploadProps = {
    setImageUrl?: any
}

const Upload: FC<UploadProps> = (props) => {
    const { setImageUrl } = props
    const user = useUser()
    const [image, setImage] = useState<File>()
    const [imageName, setImageName] = useState<string>('')

    const [error, setError] = useState(false)
    const [message, setMessage] = useState<string>()
    const [loading, setLoading] = useState(false)

    const handleSelectImage = (e: any) => {
        e.preventDefault()
        if (e.target.files[0]) {
            console.log(e.target.files[0])
            setImage(e.target.files[0])
            setImageName(e.target.value)
            setError(false)
        }
    }
    const handleUpload = async (e: any) => {
        e.preventDefault()
        if (!user) return
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
            <UploadForm>
                {message && <Message error={error}>{message}</Message>}
                {loading ? (
                    <Loading />
                ) : (
                    <FileUpload>
                        <FileUploadButton>Choose File</FileUploadButton>
                        <FormInput
                            type="file"
                            accept="image/*"
                            id="myFile"
                            name="filename"
                            onChange={handleSelectImage}
                            value={imageName}
                        />
                        {image?.name || 'No file chosen'}
                    </FileUpload>
                )}

                <Button
                    onClick={handleUpload}
                    style={{ fontFamily: 'URWGothic' }}
                >
                    Upload
                </Button>
            </UploadForm>
        </FormWrap>
    )
}

export default Upload
