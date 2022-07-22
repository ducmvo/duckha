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
    Info: [`Vui lòng phản hồi trước 01.08.2022`],
    Story: [
        '“Anh muốn ghé núi Crystal để trượt tuyết”',
        '12.2013',
        `Đó là lí do Đức đưa ra khi Kha hỏi vì sao anh phải xa xôi lặn lội từ Houston, Texas lên Seattle, Washington ngay giữa mùa đông. Nhưng thật ra, Đức đang có những dự định khác`,
        `Lời hẹn trượt tuyết mãi không thực hiện được cho tới vài năm gần đây. Trong khoảng thời gian đó, Đức và Kha đã cũng trải nghiệm cùng nhau rất nhiều cái mới. Lần đầu đi leo núi với 1 chai nước suối, đôi giày cao gót và máy chụp kĩ thuật số. Lần đầu cắm trại với độc một chiếc mền dưới rất nhiều tuyết và đá lạnh buổi sớm. Lần đầu trượt tuyết đi lạc giữa dày đặc sương đêm. Và rất nhiều các chuyến đi xuyên nước Mĩ. `,
        `Kha vụng về nhưng nhiệt huyết, bộp chộp nhưng nhanh nhẩu thông tin. `,
        `Đức trầm tính như ông cụ, nhưng chắc chắn, kĩ tính và vững chải. `,
        `Và Mây nữa. Mây là con mèo nhỏ nhận nuôi giữa tâm dịch. Vì bộ lông với những vệt xám như mây Seattle, nơi mọi thứ bắt đầu và vẫn đang tiếp diễn.`,
    ],
}

// RSVP PAGE CONTENT
export const rsvpSections: IPageSections = {
    Rsvp: [
        'PHẢN HỒI THAM DỰ?',
        'YÊU CẦU ĐẶC BIỆT?',
        'Sẽ tham dự',
        'Từ chối trong tiếc nuối',
    ],
    Reception: [date, hour, venue, hall],
    Attire: ['Formal'],
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
