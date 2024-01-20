'use client'

import { stringify } from 'querystring'
import { FormEvent, useState } from 'react'

type Props = {}

const initState = {
	name: '',
	email: '',
	message: ''
}

const FeedbackPage = (props: Props) => {
	const [data, setData] = useState(initState)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(console.log(stringify(data)))

		const { name, email, message } = data

		const res = await fetch('http://localhost:3000/api/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				message
			})
		})

		const result = res.json()

		console.log(result)
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-slate-500'>
			<form onSubmit={handleSubmit}>
				<h3 className='text-2xl text-slate-100'>Contact Us</h3>
				<div>
					<p>Name:</p>
					<input
						type='text'
						placeholder='Name'
						value={data.name}
						onChange={(e) =>
							setData({ ...data, name: e.target.value })
						}
						className='p-2 rounded-md focus:outline-none'
					/>
				</div>
				<div>
					<p>Email:</p>
					<input
						type='text'
						placeholder='Email'
						value={data.email}
						onChange={(e) =>
							setData({ ...data, email: e.target.value })
						}
						className='p-2 rounded-md focus:outline-none'
					/>
				</div>
				<div>
					<p>Message:</p>
					<input
						type='text'
						placeholder='Message'
						value={data.message}
						onChange={(e) =>
							setData({ ...data, message: e.target.value })
						}
						className='p-2 rounded-md focus:outline-none'
					/>
				</div>
				<button
					type='submit'
					className='p-3 my-3 bg-slate-800 rounded-md'
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default FeedbackPage
