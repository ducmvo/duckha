// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@libs/prisma'
import { User } from '@prisma/client'
const handler = async (req: NextApiRequest, res: NextApiResponse<User[]>) => {
	let users: User[] = []
	if (req.method === 'POST') {
		const { userID } = JSON.parse(req.body)
		if (userID) {
			users = await prisma.user.findMany({
				where: { guestId: { equals: userID } }
			})
		}
	}
	res.status(200).json(users)
}
export default handler
