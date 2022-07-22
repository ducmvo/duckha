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
        const { name, email, quantity, guests, request } = JSON.parse(req.body)
        console.log(name, email, quantity, guests, request)
        try {
            user = await prisma.user.findMany({
                where: {
                    email: email?.trim().toUpperCase(),
                } as User,
            })
            if (user.length) throw new Error('user exists!')
            const attend = quantity !== 0
            user = await prisma.user.create({
                data: {
                    name: name?.trim().toUpperCase(),
                    email: email?.trim().toUpperCase(),
                    request: request,
                    attend: attend,
                } as User,
            })

            for (let name of guests) {
                await prisma.user.create({
                    data: {
                        name: name?.trim().toUpperCase(),
                        guestId: user.id,
                        attend: attend,
                    } as User,
                })
            }
        } catch (e) {
            user = undefined
        }
    }

    const status = user ? 200 : 404
    res.status(status).json(user)
}
export default handler
