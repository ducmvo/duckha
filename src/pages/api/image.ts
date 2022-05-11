// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { generateSecuredURL } from '@libs/s3'
type ImageResponse = {
    imgUrl?: string
    message?: string
}
const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<ImageResponse>
) => {
    if (req.method === 'GET') {
        let S3UploadURL = await generateSecuredURL()
        res.status(200).json({
            imgUrl: S3UploadURL,
            message: 'get S3 secured URL sucess ',
        })
    } else if (req.method === 'POST') {
        const data = JSON.parse(req.body)
        const { imgUrl } = data
        // TODO: save this url to data base associate with user
        res.status(200).json({ message: 'file upload success' })
    } else {
        res.status(404).json({ message: 'file upload fail' })
    }
}
export default handler
