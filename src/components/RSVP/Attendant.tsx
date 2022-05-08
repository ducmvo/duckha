import { User } from '@prisma/client'
import { FC } from 'react'
import {
    Companions,
    GuestName,
    GuestInput,
    InputLabel,
    GuestInputText,
} from './RSVPElements'

type AttendantProps = {
    attendance: any
    handleAttendance: any
    user: User
}
const Attendant: FC<AttendantProps> = (props) => {
    const { attendance, handleAttendance, user } = props
    const companion = user.guestId && (
        <>
            <GuestName>GUEST NAME</GuestName>
            <GuestInput
                type="text"
                value={attendance[user.id]?.name || ''}
                onChange={(e) => handleAttendance(user.id, e.target.value)}
            />
        </>
    )
    return (
        <Companions>
            {companion || <GuestName>{user.name}</GuestName>}
            <InputLabel>
                <GuestInput
                    type="radio"
                    checked={attendance[user.id]?.attend === true}
                    onChange={() => handleAttendance(user.id, true)}
                />
                <GuestInputText>Will attend</GuestInputText>
            </InputLabel>

            <InputLabel>
                <GuestInput
                    type="radio"
                    checked={attendance[user.id]?.attend === false}
                    onChange={() => handleAttendance(user.id, false)}
                />
                <GuestInputText>Declines With regret</GuestInputText>
            </InputLabel>
        </Companions>
    )
}

export default Attendant
