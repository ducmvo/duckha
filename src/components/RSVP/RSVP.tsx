import React from 'react'
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
	Text
} from './RSVPElements'

const RSVP = () => {
	return (
		<Container>
			<FormWrap>
				<Icon href="/">Duc & Kha</Icon>
				<FormContent>
					<Form action="#">
						<FormH1>RSVP</FormH1>
						<FormLabel htmlFor="for">Name</FormLabel>
						<FormInput type="text" required />
						<FormLabel htmlFor="for">Email</FormLabel>
						<FormInput type="email" required />
						<FormButton type="submit">Continue</FormButton>
						<Text style={{ cursor: 'pointer' }}>Need Help?</Text>
					</Form>
				</FormContent>
			</FormWrap>
		</Container>
	)
}

export default RSVP
