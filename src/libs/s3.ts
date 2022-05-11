import aws from 'aws-sdk'
import { randomBytes } from 'crypto'

const region = process.env.NEXT_PUBLIC_AWS_REGION as string
const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET
const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string
const secretAccessKey = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY as string

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4',
})

export const generateSecuredURL = async () => {
    const randBytes = randomBytes(16)
    const imgName = randBytes.toString('hex')

    const params = {
        Bucket: bucketName,
        Key: imgName,
        Expires: 60,
    }
    const S3UploadURL = await s3.getSignedUrlPromise('putObject', params)
    return S3UploadURL
}
