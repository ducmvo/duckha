import React, { useState } from 'react'
import {
	Container,
	FormWrap,
	Icon,
	FormContent,
	Form,
	FormInput,
	FormH1,
	FormLabel,
	FormButton,
	Text,
	FormTitle,
	NotFound
} from './RSVPElements'
import { User } from '@prisma/client'

type Guest = {
	name: string
	attend: boolean
}
type Companions = {
	[id: number]: Guest
}

const guests: User[] = [
	{
		id: 2,
		name: 'Duc',
		email: 'duc@example.com',
		phone: '123456',
		guestId: 1
	},
	{ id: 3, name: 'Kha', email: 'kha@example.com', phone: '987654', guestId: 1 }
]

const RSVP = () => {
	const [name, setName] = useState('')
	const [user, setUser] = useState<User>()
	const [companions, setCompanions] = useState<User[]>(guests)
	const [error, setError] = useState(false)
	const [attend, setAttend] = useState(true)
	const [guestAttend, setGuestAttend] = useState<Companions>({})
	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		let url = '/api/user'

		const data = { name: name }
		let res

		res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data)
		})

		try {
			res = await res.json()
			setUser(res)
			setError(false)
		} catch (err) {
			res = undefined
			setError(true)
			return
		}

		url = '/api/companions'
		res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(res.id)
		})

		res = await res.json()
		setCompanions(guests)
	}

	return (
		<Container>
			<FormWrap>
				<FormTitle>RSVP</FormTitle>
				{error && (
					<NotFound>
						{"Hm... We can't find your name!"}
						<br />
						Make sure you type your name as it appears on your invitation.
						<br />
						<br />
						Need support?
						<br />
						Contact us as bigday@duckha2022.com
					</NotFound>
				)}
				<FormContent user={!!user}>
					<Form onSubmit={handleSubmit}>
						<FormLabel>Please enter your first and last name</FormLabel>
						<FormInput
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<FormButton>Continue</FormButton>
					</Form>
				</FormContent>

				{user && (
					<div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<h1>Reception</h1>
							<h3>THURSDAY AUGUST 25, 2022</h3>
							<h3>6:00 PM</h3>
						</div>

						<br />
						<form
							style={{
								fontSize: '0.7rem',
								display: 'flex',
								flexDirection: 'column'
							}}
						>
							<h3 style={{ textTransform: 'uppercase' }}>
								{user?.name}
							</h3>
							<h3 style={{ margin: '0.2rem 0' }}>
								ARE YOU ABLE TO ATTEND?
							</h3>

							<label>
								<input
									type="radio"
									value={1}
									checked={attend === true}
									onChange={(e: any) => setAttend(true)}
								/>
								<span style={{ paddingLeft: '0.5rem' }}>
									Yes, I Will Attend
								</span>
							</label>

							<label>
								<input
									type="radio"
									value={0}
									checked={attend === false}
									onChange={(e: any) => setAttend(false)}
								/>
								<span style={{ paddingLeft: '0.5rem' }}>
									Declines With Regret
								</span>
							</label>

							{companions.map((guest) => {
								return (
									<div
										key={guest.id}
										style={{
											display: 'flex',
											flexDirection: 'column'
										}}
									>
										<br />
										<h3>GUEST NAME</h3>
										<input
											type="text"
											value={guestAttend[guest.id]?.name || ''}
											onChange={(e: any) => {
												setGuestAttend({
													...guestAttend,
													[guest.id]: {
														...guestAttend[guest.id],
														name: e.target.value
													}
												})
											}}
											style={{
												margin: '0.5rem 0',
												padding: '0.1rem 0.5rem'
											}}
										/>
										<label>
											<input
												type="radio"
												value={1}
												checked={
													guestAttend[guest.id]?.attend === true
												}
												onChange={(e: any) => {
													setGuestAttend({
														...guestAttend,
														[guest.id]: {
															...guestAttend[guest.id],
															attend: true
														}
													})
												}}
											/>
											<span style={{ paddingLeft: '0.5rem' }}>
												Will Attend
											</span>
										</label>

										<label>
											<input
												type="radio"
												value={0}
												checked={
													guestAttend[guest.id]?.attend === false
												}
												onChange={(e: any) => {
													setGuestAttend({
														...guestAttend,
														[guest.id]: {
															...guestAttend[guest.id],
															attend: false
														}
													})
												}}
											/>
											<span style={{ paddingLeft: '0.5rem' }}>
												Declines With Regret
											</span>
										</label>
									</div>
								)
							})}
						</form>
					</div>
				)}
			</FormWrap>
		</Container>
	)
}

export default RSVP
