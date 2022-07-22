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

type LoginProps = {
    setResponsed: () => void
}

const Login: FC<LoginProps> = (props) => {
    const { setResponsed } = props
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const signIn = useSignIn()

    const handleSubmit = async () => {
        if (!email) return
        gtag.event({
            action: 'login_rsvp',
            category: 'RSVP',
            label: 'login',
            value: email.toLocaleUpperCase(),
        })
        setLoading(true)
        try {
            await signIn(email)
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
                        {"Hm... We can't find your email!"}
                        <br />
                        Need support?
                        <br />
                        Contact us as ducvor@gmail.com
                    </NotFound>
                )}

                <FormContent>
                    <Form onSubmit={handleSubmit}>
                        <FormLabel>Please enter your email</FormLabel>
                        <FormInput
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
            <a
                href="#"
                style={{ color: 'black', textAlign: 'center' }}
                onClick={setResponsed}
            >
                Not responsed yet? Click here
            </a>
        </Section>
    )
}

export default Login
