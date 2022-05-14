import FormButton from '@components/Button'
import Loading from '@components/Loading'
import Section from '@components/Section'
import { useSignIn } from '@hooks/useAuth'
import * as gtag from '@libs/gtag'
import { FC, useState } from 'react'
import {
    Form,
    FormContent,
    FormInput,
    FormLabel,
    FormTitle,
    FormWrap,
    NotFound,
} from './RSVPElements'

type LoginProps = {}

const Login: FC<LoginProps> = (props) => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const signIn = useSignIn()

    const handleSubmit = async () => {
        if (!name) return
        gtag.event({
            action: 'login_rsvp',
            category: 'RSVP',
            label: 'login',
            value: name.toLocaleUpperCase(),
        })
        setLoading(true)
        try {
            await signIn(name)
        } catch (e) {
            setError(true)
        }
        setLoading(false)
    }

    if (loading) return <Loading />

    return (
        <Section>
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
                        <FormButton
                            onClick={handleSubmit}
                            style={{ fontFamily: 'Zen Kaku Gothic New' }}
                        >
                            Continue
                        </FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Section>
    )
}

export default Login
