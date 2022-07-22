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
        const { email } = JSON.parse(req.body)
        if (email) {
            const users = await prisma.user.findMany({
                where: { email: { equals: email?.toUpperCase() } },
                include: {
                    companions: true,
                },
            })
            if (users.length !== 0) user = users[0]
        }
    }
    const status = user ? 200 : 404
    res.status(status).json(user)
}
export default handler
