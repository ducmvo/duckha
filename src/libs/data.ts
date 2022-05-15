import { getTextDate } from './utils'
type IPageSections = {
    [id: string]: string[]
}

const TheWeddingDay = 'August 25, 2022 18:00:00'

export const BigDay = new Date(TheWeddingDay)
const [date, hour] = getTextDate(BigDay)

export const nameTag = 'duckha'
export const names = 'Duc & Kha'
export const location = 'Hue, Vietnam'
export const venue = 'Vinpearl Hotel Hue'
export const hall = 'Dragon Hall'

// HOMEPAGE CONTENT
export const homeSections: IPageSections = {
    Info: [
        `Those lines that I before have writ do lie, 
        Ev'n those that said I could not love you dearer. 
        Yet then my judgment knew no reason why 
        My most full flame should afterwards burn clearer.`,
        `Love comforteth like sunshine after rain, 
        But lust's effect is tempest after sun;
        Love's gentle spring doth always fresh remain, 
        Lust's winter comes ere summer half be done. 
        Love surfeits not; lust like a glutton dies; 
        Love is all truth; lust full of forged lies.`,
    ],
    Story: [
        `No sooner met but they looked, 
        no sooner looked but they loved, 
        no sooner loved but they sighed, 
        no sooner sighed but they asked one another the reason, 
        no sooner knew the reason but they sought the remedy; 
        and in these degrees have they made a pair of stairs to marriage.`,
        `In the spring time, the only pretty ring time, 
        When birds do sing, hey ding a ding, ding: 
        Sweet lovers love the spring.`,
    ],
}

// RSVP PAGE CONTENT
export const rsvpSections: IPageSections = {
    Rsvp: [
        'ARE YOU ABLE TO ATTEND?',
        'SPECIAL REQUEST?',
        'Will attend',
        'Declines with regret',
    ],
    Reception: [date, hour, venue, hall],
    Attire: ['Semi-Formal', '(AKA Dressy Casual, or Cocktail)'],
    Gallery: ['Have photos with us? please share!! ❤'],
}
export const attireColors = [
    '#d6b6a7',
    '#cbab9e',
    '#58765e',
    '#d78241',
    '#a54400',
]

export const sectionHome = Object.keys(homeSections)
export const sectionRSVP = Object.keys(rsvpSections)
