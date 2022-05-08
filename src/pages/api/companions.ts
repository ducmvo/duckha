// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@libs/prisma'
import { User } from '@prisma/client'
const handler = async (req: NextApiRequest, res: NextApiResponse<User[]>) => {
    let users: User[] = []
    if (req.method === 'POST') {
        const { guestId } = JSON.parse(req.body)
        if (guestId) {
            users = await prisma.user.findMany({
                where: {
                    guestId: { equals: guestId },
                },
            })
        }
    }
    res.status(200).json(users)
}
export default handler
