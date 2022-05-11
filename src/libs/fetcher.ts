const fetcher = async (...args: [string, any]) => {
    return fetch(...args).then((res) => res.json())
}

export const uploadImage = async (image: any, userId: number) => {
    const url = '/api/image'
    // Get S3 secured upload URL
    let res = await fetch(url)
    const { imgUrl } = await res.json()

    // Upload to S3
    await fetch(imgUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: image,
    })

    // save uploaded Image to database
    const img = imgUrl.split('?')[0]
    const data = { imgUrl: img, userId: userId }
    res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
    })

    // return public S3 image url
    return img
}

export default fetcher
