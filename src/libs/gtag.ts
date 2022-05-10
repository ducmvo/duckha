export const GA_MEASUREMENT_ID = process.env
    .NEXT_PUBLIC_GA_MEASUREMENT_ID as string

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: any) => {
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    })
}
type EventProps = { action: any; category: any; label: any; value: any }
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (params: EventProps) => {
    const { action, category, label, value } = params
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}
