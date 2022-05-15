import FormButton from '@components/Button'
import type { User } from '@components/HOC/AuthContext'
import Loading from '@components/Loading'
import Section from '@components/Section'
import { useUser } from '@hooks/useAuth'
import { rsvpSections } from '@libs/data'
import * as gtag from '@libs/gtag'
import React, { FC, useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import Attendant from './Attendant'
import {
    AttendLabel,
    FormWrap,
    GuestAttendanceForm,
    GuestInputTextArea,
    Message,
    RSVPTitle,
} from './RSVPElements'

type IAttendance = {
    [id: number]: User
}
type FormProps = {
    id: string
}
const Form: FC<FormProps> = (props) => {
    const { id } = props
    const label = rsvpSections[id]

    const user = useUser()
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [attendance, setAttendance] = useState<IAttendance>({})

    useEffect(() => {
        if (!user) return
        const guestMap: IAttendance = {}
        const guests = [user, ...user.companions]
        guests.forEach((guest) => {
            guestMap[guest.id] = guest
        })
        setAttendance(guestMap)
    }, [user])

    const handleSave = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (!user) return
        setMessage('')

        gtag.event({
            action: 'save_rsvp',
            category: 'RSVP',
            label: 'rsvp_response',
            value: JSON.stringify(
                Object.values(attendance).map((user) => [
                    user.name,
                    user.attend,
                ])
            ),
        })

        let url = '/api/rsvp'
        let res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                ...attendance[user.id],
                companions: Object.values(attendance).filter(
                    (companion) => user.id != companion.id
                ),
            }),
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
        if (e.target.id === 'name')
            obj = { name: (arg as string)?.toUpperCase() }
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
    if (!user) return <Loading />
    return (
        <Section noPadding id={id}>
            <FormWrap>
                <RSVPTitle>{id}</RSVPTitle>
                <GuestAttendanceForm>
                    {message && <Message error={error}>{message}</Message>}
                    <AttendLabel>{label[0]}</AttendLabel>
                    {[user, ...user.companions].map((guest) => (
                        <Attendant
                            key={guest.id}
                            attendance={attendance}
                            handleUserInput={handleUserInput}
                            user={guest}
                            acceptLabel={label[2]}
                            declineLabel={label[3]}
                        />
                    ))}

                    <AttendLabel>{label[1]}</AttendLabel>
                    <GuestInputTextArea
                        id="request"
                        rows={5}
                        value={attendance[user.id]?.request || ''}
                        onChange={(e: any) =>
                            handleUserInput(user.id, e.target.value, e)
                        }
                    />
                </GuestAttendanceForm>
                <FormButton
                    onClick={handleSave}
                    style={{ fontFamily: 'Zen Kaku Gothic New' }}
                >
                    Save
                </FormButton>
            </FormWrap>
        </Section>
    )
}

export default Form
