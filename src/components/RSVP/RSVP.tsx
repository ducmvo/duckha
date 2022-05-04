import React, { useState } from 'react'
import {
    Container,
    FormWrap,
    FormContent,
    Form,
    FormInput,
    FormLabel,
    FormButton,
    FormTitle,
    NotFound,
    AttendLabel,
    Companions,
    GuestInput,
    GuestName,
    GuestInputText,
    InputLabel,
    RSVPInfo,
    RSVPContent,
    GuestAttendanceForm,
    RSVPTitle,
} from './RSVPElements'
import { User } from '@prisma/client'
import { BigDay, days, months } from '@libs/data'

type Guest = {
    name: string
    attend: boolean
}
type Companions = {
    [id: number]: Guest
}

const guests: User[] = [
    {
        id: 2,
        name: 'Duc',
        email: 'duc@example.com',
        phone: '123456',
        guestId: 1,
    },
    {
        id: 3,
        name: 'Kha',
        email: 'kha@example.com',
        phone: '987654',
        guestId: 1,
    },
]

const RSVP = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState<User>()
    const [companions, setCompanions] = useState<User[]>(guests)
    const [error, setError] = useState(false)
    const [attend, setAttend] = useState(true)
    const [guestAttend, setGuestAttend] = useState<Companions>({})
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        let url = '/api/user'

        const data = { name: name }
        let res

        res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        })

        try {
            res = await res.json()
            setUser(res)
            setError(false)
        } catch (err) {
            res = undefined
            setError(true)
            return
        }

        url = '/api/companions'
        res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(res.id),
        })

        res = await res.json()
        setCompanions(guests)
    }

    const date = `${days[BigDay.getDay()]} ${
        months[BigDay.getMonth()]
    } ${BigDay.getDate()}, ${BigDay.getFullYear()} `
    const hour = `${
        BigDay.getHours() > 12 ? BigDay.getHours() - 12 : BigDay.getHours()
    }:${BigDay.getMinutes()}${BigDay.getMinutes() < 10 && 0} ${
        BigDay.getHours() > 12 ? 'PM' : 'AM'
    }`

    return (
        <Container>
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
                <FormContent user={!!user}>
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

                {user && (
                    <div>
                        <RSVPInfo>
                            <RSVPTitle>Reception</RSVPTitle>
                            <RSVPContent>{date}</RSVPContent>
                            <RSVPContent>{hour}</RSVPContent>
                            <RSVPContent>VinPearl Hotel Hue</RSVPContent>
                            <RSVPContent>Dragon Theater</RSVPContent>
                        </RSVPInfo>

                        <RSVPInfo>
                            <RSVPTitle>Dress code</RSVPTitle>
                            <RSVPContent>
                                <RSVPContent>Semi-Formal</RSVPContent>
                                <RSVPContent style={{ fontSize: '0.6rem' }}>
                                    (AKA Dressy Casual, or Cocktail)
                                </RSVPContent>
                            </RSVPContent>
                        </RSVPInfo>

                        <GuestAttendanceForm>
                            <GuestName>{user?.name}</GuestName>
                            <AttendLabel>ARE YOU ABLE TO ATTEND?</AttendLabel>

                            <InputLabel>
                                <GuestInput
                                    type="radio"
                                    value={1}
                                    checked={attend === true}
                                    onChange={(e: any) => setAttend(true)}
                                />
                                <GuestInputText>
                                    Yes, I will attend
                                </GuestInputText>
                            </InputLabel>

                            <InputLabel>
                                <GuestInput
                                    type="radio"
                                    value={0}
                                    checked={attend === false}
                                    onChange={(e: any) => setAttend(false)}
                                />
                                <GuestInputText>
                                    Declines with regret
                                </GuestInputText>
                            </InputLabel>

                            {companions.map((guest) => {
                                return (
                                    <Companions key={guest.id}>
                                        <br />
                                        <GuestName>GUEST NAME</GuestName>
                                        <GuestInput
                                            type="text"
                                            value={
                                                guestAttend[guest.id]?.name ||
                                                ''
                                            }
                                            onChange={(e: any) => {
                                                setGuestAttend({
                                                    ...guestAttend,
                                                    [guest.id]: {
                                                        ...guestAttend[
                                                            guest.id
                                                        ],
                                                        name: e.target.value,
                                                    },
                                                })
                                            }}
                                        />
                                        <InputLabel>
                                            <GuestInput
                                                type="radio"
                                                value={1}
                                                checked={
                                                    guestAttend[guest.id]
                                                        ?.attend === true
                                                }
                                                onChange={(e: any) => {
                                                    setGuestAttend({
                                                        ...guestAttend,
                                                        [guest.id]: {
                                                            ...guestAttend[
                                                                guest.id
                                                            ],
                                                            attend: true,
                                                        },
                                                    })
                                                }}
                                            />
                                            <GuestInputText>
                                                Will attend
                                            </GuestInputText>
                                        </InputLabel>

                                        <InputLabel>
                                            <GuestInput
                                                type="radio"
                                                value={0}
                                                checked={
                                                    guestAttend[guest.id]
                                                        ?.attend === false
                                                }
                                                onChange={(e: any) => {
                                                    setGuestAttend({
                                                        ...guestAttend,
                                                        [guest.id]: {
                                                            ...guestAttend[
                                                                guest.id
                                                            ],
                                                            attend: false,
                                                        },
                                                    })
                                                }}
                                            />
                                            <GuestInputText>
                                                Declines With regret
                                            </GuestInputText>
                                        </InputLabel>
                                    </Companions>
                                )
                            })}
                        </GuestAttendanceForm>
                    </div>
                )}
            </FormWrap>
        </Container>
    )
}

export default RSVP
