// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@libs/prisma'
import { User } from '@prisma/client'

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<User | undefined>
) => {
    let user
    if (req.method === 'POST') {
        user = JSON.parse(req.body)
        const data = {
            ...user,
            companions: {
                update: user.companions.map((companion: User) => {
                    const { guestId, ...rest } = companion
                    return {
                        where: { id: companion.id },
                        data: rest,
                    }
                }),
            },
        }
        user = await prisma.user.update({
            where: { id: user.id },
            data: data,
            include: {
                companions: true,
            },
        })
    }
    const status = user ? 200 : 404
    res.status(status).json(user)
}
export default handler
