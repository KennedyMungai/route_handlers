type Props = {}

const FeedbackPage = (props: Props) => {
	return (
		<div className='min-h-screen flex items-center justify-center bg-slate-500'>
			<form>
				<h3 className='text-2xl'>Contact Us</h3>
				<div>
					<p>Name:</p>
					<input
						type='text'
						placeholder='Name'
						className='p-2 rounded-md focus:outline-none'
					/>
				</div>
				<div>
					<p>Email:</p>
					<input
						type='text'
						placeholder='Email'
						className='p-2 rounded-md focus:outline-none'
					/>
				</div>
				<div>
					<p>Message:</p>
					<input
						type='text'
						placeholder='Message'
						className='p-2 rounded-md focus:outline-none'
					/>
				</div>
			</form>
		</div>
	)
}

export default FeedbackPage
