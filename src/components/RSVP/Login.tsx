import useSessionStorage from '@hooks/useSessionStorage'
import { AUTH_USER_NAME } from '@libs/data'
import { FC, useEffect, useState } from 'react'
import {
    Form,
    FormButton,
    FormContent,
    FormInput,
    FormLabel,
    FormTitle,
    FormWrap,
    NotFound,
} from './RSVPElements'
type LoginProps = {
    setUser: any
}
const Login: FC<LoginProps> = (props) => {
    const { setUser } = props
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [username, setUsername] = useSessionStorage<string>(
        AUTH_USER_NAME,
        ''
    )

    useEffect(() => {
        if (username) {
            setName(username)
            handleSignIn(username)
        }
    }, [username])

    const handleSignIn = async (name: string) => {
        setLoading(true)
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
            setError(true)
        }
        setLoading(false)
    }

    const handleSubmit = async () => {
        if (!name) return
        if (!username) setUsername(name)
        await handleSignIn(name)
    }

    return (
        (!loading && (
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
                        <FormLabel>
                            Please enter your first and last name
                        </FormLabel>
                        <FormInput
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FormButton>Continue</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        )) || <div>Loading...</div>
    )
}

export default Login
