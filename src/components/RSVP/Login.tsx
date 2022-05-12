import useSessionStorage from '@hooks/useSessionStorage'
import { AUTH_USER_NAME } from '@libs/data'
import { FC, useCallback, useEffect, useState } from 'react'
import {
    Form,
    FormContent,
    FormInput,
    FormLabel,
    FormTitle,
    FormWrap,
    NotFound,
} from './RSVPElements'
import FormButton from '@components/Button'
import Section from '@components/Section'
import Loading from '@components/Loading'
import * as gtag from '@libs/gtag'
import useAuth from '@hooks/useAuth'

type LoginProps = {}

const Login: FC<LoginProps> = (props) => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const { user, signIn } = useAuth()

    const handleSubmit = async () => {
        if (!name) return
        gtag.event({
            action: 'login_rsvp',
            category: 'RSVP',
            label: 'login',
            value: name.toLocaleUpperCase(),
        })
        await signIn(name)
    }

    return (
        (!loading && (
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
                                style={{ fontFamily: 'URWGothic' }}
                            >
                                Continue
                            </FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Section>
        )) || <Loading />
    )
}

export default Login
