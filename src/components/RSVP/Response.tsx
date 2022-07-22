import FormButton from '@components/Button'
import Loading from '@components/Loading'
import Section from '@components/Section'
import { useSignIn } from '@hooks/useAuth'
import * as gtag from '@libs/gtag'
import { FC, useState } from 'react'
import useToggle from '@hooks/useToggle'
import {
    Form,
    FormContent,
    FormInput,
    FormLabel,
    FormTitle,
    FormWrap,
    NotFound,
} from './RSVPElements'
import { ResponseTextArea, Slider } from './ResponseElements'
import Login from './Login'
import { animateScroll as scroll } from 'react-scroll'

type ResponseProps = {}

const Response: FC<ResponseProps> = (props) => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [guests, setGuests] = useState('')
    const [request, setRequest] = useState('')
    const [responsed, setResponsed] = useToggle(false)
    const [message, setMessage] = useState('')
    const signIn = useSignIn()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!name || !email) {
            scroll.scrollToTop()
            setError(true)
            setMessage('Vui lòng điền những mục bắt buộc')
            return
        }

        if (quantity > 1 && !guests) {
            scroll.scrollToTop()
            setError(true)
            setMessage(
                'Vui lòng điền tên những người khác tham dự? (cách bởi dấu phẩy)'
            )
            return
        }

        const guestNames = guests.split(',').filter((n) => !!n)
        if (quantity !== 0 && guestNames.length != quantity - 1) {
            scroll.scrollToTop()
            setError(true)
            setMessage(
                `Vui lòng nhập tên ${
                    quantity - 1
                } người khác tham dự? (cách bởi dấu phẩy)`
            )

            return
        }

        setLoading(true)

        try {
            let url = '/api/response'
            let res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                    quantity: quantity,
                    guests: guestNames,
                    request: request,
                }),
            })
            await res.json()
            setError(false)

            await signIn(email)
        } catch (err) {
            console.log(err)
            scroll.scrollToTop()
            setError(true)
            setMessage('Không thể gởi rsvp, vui lòng thử lại sau')
        }
        setLoading(false)
        scroll.scrollToTop()
    }

    if (loading) return <Loading />

    return !responsed ? (
        <Section>
            <FormWrap>
                <FormTitle>RSVP</FormTitle>
                {error && <NotFound>{message}</NotFound>}

                <FormContent>
                    <Form onSubmit={handleSubmit}>
                        <FormLabel>
                            Tên <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <FormInput
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FormLabel>
                            Email <span style={{ color: 'red' }}>*</span>
                        </FormLabel>
                        <FormInput
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormLabel>{'Số người tham dự?'}</FormLabel>

                        <Slider
                            type="range"
                            min={0}
                            max={4}
                            value={quantity}
                            id="range"
                            onChange={(e) => {
                                setQuantity(parseInt(e.target.value))
                            }}
                        />
                        <div style={{ fontSize: '2rem' }}>{quantity}</div>

                        <FormLabel>
                            {
                                'Tên những người khác tham dự? (cách bởi dấu phẩy)'
                            }
                            {quantity > 1 && (
                                <span style={{ color: 'red' }}>*</span>
                            )}
                        </FormLabel>

                        <FormInput
                            id="guests"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        />

                        <FormLabel>Thông tin thêm?</FormLabel>

                        <ResponseTextArea
                            rows={3}
                            value={request}
                            onChange={(e) => setRequest(e.target.value)}
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
                {'Đã phản hồi? Click here'}
            </a>
        </Section>
    ) : (
        <Login setResponsed={setResponsed} />
    )
}

export default Response
