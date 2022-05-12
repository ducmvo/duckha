// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@libs/prisma'
import { generateSecuredURL } from '@libs/s3'
import { Image } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type ImageResponse = {
    imgUrl?: string
    message?: string
    images?: Image[]
}
const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<ImageResponse>
) => {
    if (req.method === 'GET') {
        let S3UploadURL = await generateSecuredURL()
        res.status(200).json({
            imgUrl: S3UploadURL,
            message: 'get S3 secured URL sucess',
        })
    } else if (req.method === 'POST') {
        const { imgUrl, user } = JSON.parse(req.body)
        const imageInput = {
            imgUrl: imgUrl,
            userId: user.id,
        }

        const image = await prisma.image.create({ data: imageInput })
        console.log('[SERVER: CREATE IMAGE]', image)
        // TODO: save this url to data base associate with user
        res.status(200).json({
            message: 'file upload successfully',
            imgUrl: image.imgUrl,
        })
    } else {
        res.status(404).json({ message: 'Error: file upload fail' })
    }
}
export default handler
