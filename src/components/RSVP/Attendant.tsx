import { User } from '@prisma/client'
import { FC } from 'react'
import {
    Companions,
    GuestInput,
    GuestInputText,
    GuestName,
    InputLabel,
} from './RSVPElements'

type AttendantProps = {
    attendance: any
    handleUserInput: any
    user: User
    acceptLabel?: string
    declineLabel?: string
}
const Attendant: FC<AttendantProps> = (props) => {
    const {
        attendance,
        handleUserInput,
        user,
        acceptLabel = 'Attend',
        declineLabel = 'Decline',
    } = props
    const companion = user.guestId && (
        <>
            <GuestName>GUEST NAME</GuestName>
            <GuestInput
                id="name"
                type="input"
                value={attendance[user.id]?.name || ''}
                onChange={(e) => handleUserInput(user.id, e.target.value, e)}
            />
        </>
    )
    return (
        <Companions>
            {companion || <GuestName>{user.name}</GuestName>}
            <InputLabel>
                <GuestInput
                    id="attendance"
                    type="radio"
                    checked={attendance[user.id]?.attend === true}
                    onChange={(e) => handleUserInput(user.id, true, e)}
                />
                <GuestInputText>{acceptLabel}</GuestInputText>
            </InputLabel>

            <InputLabel>
                <GuestInput
                    id="attendance"
                    type="radio"
                    checked={attendance[user.id]?.attend === false}
                    onChange={(e) => handleUserInput(user.id, false, e)}
                />
                <GuestInputText>{declineLabel}</GuestInputText>
            </InputLabel>
        </Companions>
    )
}

export default Attendant
