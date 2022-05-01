import React, { useState } from 'react'
import useSWR from 'swr'
import { User } from '@prisma/client'

const getUsers = async (url: string) => {
	return fetch(url).then((res) => res.json())
}

const Guests = () => {
	// const { data, error } = useSWR<User[]>('/api/users', getUsers)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	// if (error) return <div>An error occurred.</div>

	// if (!data) return <div>Loading...</div>

	const createUser = async (e: any) => {
		e.preventDefault()
		const url = '/api/users'
		const data = { name: name, email: email }
		let res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data)
		})

		res = await res.json()
		console.log(res)
	}

	// console.log(data)
	return (
		<div>
			{/* <ul>
				{data.map((user: User) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul> */}
			<div style={{ margin: '5rem' }}>
				<form>
					<label>Name</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<br />
					<label>Email</label>
					<input
						type="text"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<br />
					<button onClick={createUser}>Create User</button>
				</form>
			</div>
		</div>
	)
}

export default Guests
