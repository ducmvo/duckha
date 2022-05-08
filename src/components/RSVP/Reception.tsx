import { BigDay, days, months } from '@libs/data'
import { RSVPContent, RSVPInfo, RSVPTitle } from './RSVPElements'

const Reception = () => {
    const date = `${days[BigDay.getDay()]} ${
        months[BigDay.getMonth()]
    } ${BigDay.getDate()}, ${BigDay.getFullYear()} `
    const hour = `${
        BigDay.getHours() > 12 ? BigDay.getHours() - 12 : BigDay.getHours()
    }:${BigDay.getMinutes()}${BigDay.getMinutes() < 10 && 0} ${
        BigDay.getHours() > 12 ? 'PM' : 'AM'
    }`
    return (
        <RSVPInfo>
            <RSVPTitle>Reception</RSVPTitle>
            <RSVPContent>{date}</RSVPContent>
            <RSVPContent>{hour}</RSVPContent>
            <RSVPContent>VinPearl Hotel Hue</RSVPContent>
            <RSVPContent>Dragon Theater</RSVPContent>
        </RSVPInfo>
    )
}

export default Reception
