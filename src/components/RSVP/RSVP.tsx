import { User as PUser } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import Attendant from './Attendant'
import Attire from './Attire'
import Login from './Login'
import Reception from './Reception'
import {
    AttendLabel,
    Container,
    FormButton,
    FormWrap,
    GuestAttendanceForm,
    GuestInputTextArea,
    Message,
} from './RSVPElements'

type IAttendance = {
    [id: number]: User
}

type User = PUser & {
    companions: User[]
}

const RSVP = () => {
    const [user, setUser] = useState<User>()
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [attendance, setAttendance] = useState<IAttendance>({})

    useEffect(() => {
        if (!user) return
        const hashMap: IAttendance = {}
        hashMap[user.id] = user
        user.companions.forEach((companion: User) => {
            hashMap[companion.id] = companion
        })
        setAttendance(hashMap)
    }, [user])

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
        scroll.scrollToTop()
    }

    const handleUserInput = (id: number, arg: boolean | string, e: any) => {
        let obj = {}
        if (e.target.id === 'name') obj = { name: arg }
        if (e.target.id === 'attendance') obj = { attend: arg }
        if (e.target.id === 'request') obj = { request: arg }
        setAttendance({
            ...attendance,
            [id]: {
                ...attendance[id],
                ...obj,
            },
        })
    }

    return (
        <Container>
            {(user && (
                <FormWrap>
                    {message && <Message error={error}>{message}</Message>}
                    <Reception />
                    <Attire />

                    <GuestAttendanceForm>
                        <AttendLabel>ARE YOU ABLE TO ATTEND?</AttendLabel>
                        <Attendant
                            attendance={attendance}
                            handleUserInput={handleUserInput}
                            user={user}
                        />

                        {user.companions.map((guest) => (
                            <Attendant
                                key={guest.id}
                                attendance={attendance}
                                handleUserInput={handleUserInput}
                                user={guest}
                            />
                        ))}

                        <AttendLabel>SPECIAL REQUEST?</AttendLabel>
                        <GuestInputTextArea
                            id="request"
                            rows={4}
                            value={attendance[user.id]?.request || ''}
                            onChange={(e: any) =>
                                handleUserInput(user.id, e.target.value, e)
                            }
                        />

                        <FormButton onClick={handleSave}>Save</FormButton>
                    </GuestAttendanceForm>
                </FormWrap>
            )) || <Login setUser={setUser} />}
        </Container>
    )
}

export default RSVP
