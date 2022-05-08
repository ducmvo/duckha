import React, { useCallback, useEffect, useState } from 'react'
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
    Message,
} from './RSVPElements'
import { User } from '@prisma/client'
import { BigDay, days, months } from '@libs/data'

type Companions = {
    [id: number]: User
}

const RSVP = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState<User>()
    const [companions, setCompanions] = useState<User[]>([])
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [attendance, setAttendance] = useState<Companions>({})
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
            setCompanions(user.companions)
            const hashMap: Companions = {}
            hashMap[user.id] = user
            user.companions.forEach((companion: User) => {
                hashMap[companion.id] = companion
            })
            setAttendance(hashMap)
            setError(false)
        } catch (err) {
            setMessage('Opps! something went wrong')
            setError(true)
        }
    }

    const handleSave = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (!user) return
        setMessage('')
        let url = '/api/rsvp'
        const companions = Object.values(attendance).filter(
            (companion) => user.id != companion.id
        )
        const data = {
            ...attendance[user.id],
            companions: companions,
        }
        let res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        })

        try {
            await res.json()
            setError(false)
            setMessage('Successfully updated RSVP')
        } catch (err) {
            setError(true)
            setMessage('Failed to update rsvp, please try again later')
        }
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
                {message && <Message error={error}>{message}</Message>}
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
                            <GuestName>{user.name}</GuestName>
                            <AttendLabel>ARE YOU ABLE TO ATTEND?</AttendLabel>

                            <InputLabel>
                                <GuestInput
                                    type="radio"
                                    // value={1}
                                    checked={
                                        attendance[user.id]?.attend === true
                                    }
                                    onChange={(e: any) =>
                                        setAttendance({
                                            ...attendance,
                                            [user.id]: {
                                                ...attendance[user.id],
                                                attend: true,
                                            },
                                        })
                                    }
                                />
                                <GuestInputText>
                                    Yes, I will attend
                                </GuestInputText>
                            </InputLabel>

                            <InputLabel>
                                <GuestInput
                                    type="radio"
                                    value={0}
                                    checked={
                                        attendance[user.id]?.attend === false
                                    }
                                    onChange={(e: any) =>
                                        setAttendance({
                                            ...attendance,
                                            [user.id]: {
                                                ...attendance[user.id],
                                                attend: false,
                                            },
                                        })
                                    }
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
                                                attendance[guest.id]?.name || ''
                                            }
                                            onChange={(e: any) => {
                                                setAttendance({
                                                    ...attendance,
                                                    [guest.id]: {
                                                        ...attendance[guest.id],
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
                                                    attendance[guest.id]
                                                        ?.attend === true
                                                }
                                                onChange={(e: any) => {
                                                    setAttendance({
                                                        ...attendance,
                                                        [guest.id]: {
                                                            ...attendance[
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
                                                    attendance[guest.id]
                                                        ?.attend === false
                                                }
                                                onChange={(e: any) => {
                                                    setAttendance({
                                                        ...attendance,
                                                        [guest.id]: {
                                                            ...attendance[
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
                            <FormButton onClick={handleSave}>Save</FormButton>
                        </GuestAttendanceForm>
                    </div>
                )}
            </FormWrap>
        </Container>
    )
}

export default RSVP
