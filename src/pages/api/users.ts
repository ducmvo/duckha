// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@libs/prisma'
import { User } from '@prisma/client'
const handler = async (req: NextApiRequest, res: NextApiResponse<User[]>) => {
	if (req.method === 'POST') {
		const { name, email } = JSON.parse(req.body)
		if (!name || !email) {
			res.status(400)
		} else {
			await prisma.user.create({
				data: {
					name: name,
					email: email
				}
			})
		}
	}
	const users = await prisma.user.findMany()
	res.status(200).json(users)
}
export default handler
