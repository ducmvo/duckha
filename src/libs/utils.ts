const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]
export const getTextFromDate = (inputDate: Date) => {
    const day = days[inputDate.getDay()]
    const date = `${inputDate.getDate()}`
    const month = months[inputDate.getMonth()]
    const year = `${inputDate.getFullYear()}`
    const hour = `${
        inputDate.getHours() > 12
            ? inputDate.getHours() - 12
            : inputDate.getHours()
    }:${inputDate.getMinutes()}${inputDate.getMinutes() < 10 && 0} ${
        inputDate.getHours() > 12 ? 'PM' : 'AM'
    }`
    return [day, date, month, year, hour]
}
export const getTextDate = (inputDate: Date) => {
    const [day, date, month, year, hour] = getTextFromDate(inputDate)
    // dddd MMMM DD, YYYY
    const fullDate = `${day} ${month} ${date}, ${year}`

    return [fullDate, hour]
}
