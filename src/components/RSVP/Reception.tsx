import { BigDay, days, hall, months, sectionRSVP, venue } from '@libs/data'
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
            <RSVPTitle>{sectionRSVP[1]}</RSVPTitle>
            <RSVPContent>{date}</RSVPContent>
            <RSVPContent>{hour}</RSVPContent>
            <RSVPContent>{venue}</RSVPContent>
            <RSVPContent>{hall}</RSVPContent>
        </RSVPInfo>
    )
}

export default Reception
