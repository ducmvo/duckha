// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@libs/prisma'
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
    const data = JSON.parse(req.body)
    if (req.method === 'POST') {
        const { user } = data
        if (!user)
            res.status(404).json({ message: 'Error: request user not found' })
        else {
            const images = await prisma.image.findMany({
                where: { userId: { equals: user.id } },
            })
            res.status(200).json({
                images: images,
                message: 'get user images successfully',
            })
        }
    } else {
        res.status(404).json({ message: 'GET not support' })
    }
}
export default handler
