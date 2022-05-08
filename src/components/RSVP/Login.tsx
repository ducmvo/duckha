import { FC, useState } from 'react'
import {
    Form,
    FormButton,
    FormContent,
    FormInput,
    FormLabel,
    FormTitle,
    FormWrap,
    Message,
    NotFound,
} from './RSVPElements'

type LoginProps = {
    setUser: any
}
const Login: FC<LoginProps> = (props) => {
    const { setUser } = props
    const [error, setError] = useState(false)
    const [name, setName] = useState('')

    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setMessage('')
        let url = '/api/user'

        const data = { name: name }
        let res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        })

        try {
            const user = await res.json()
            setUser(user)
            setError(false)
        } catch (err) {
            setMessage('Opps! something went wrong')
            setError(true)
        }
    }
    return (
        <FormWrap>
            <FormTitle>RSVP</FormTitle>
            {error && (
                <NotFound>
                    {"Hm... We can't find your name!"}
                    <br />
                    Make sure you type your name as it appears on your
                    invitation.
                    <br />
                    <br />
                    Need support?
                    <br />
                    Contact us as bigday@duckha2022.com
                </NotFound>
            )}

            <FormContent>
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
        </FormWrap>
    )
}

export default Login
