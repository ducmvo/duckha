import Section from '@components/Section'
import { homeSections } from '@libs/data'
import Image from 'next/image'
import React, { FC } from 'react'
import Gallery from '@components/Gallery/Gallery'
import Render from '@components/HOC/Render'

import {
    ImgWrap,
    ImgWrapMobile,
    SectionWrap,
    StoryContainer,
    Text,
} from './StoryElements'
type StoryProps = {
    id: string
}
const getUrl = (name: string) =>
    `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/seattle/${name}`

const photos: { src: string; width: number; height: number }[] = []
const horizontalImages = [1, 14]
const ordersImages = [7, 4, 17, 2, 8, 6, 5, 3, 9, 10, 11, 12, 13, 15, 16, 1, 14]
for (let i of ordersImages) {
    const photo = {
        src: getUrl(`seattle${i}.jpg`),
        width: 2,
        height: 3,
    }
    if (horizontalImages.includes(i)) {
        photo.width = 3
        photo.height = 2
    }
    photos.push(photo)
}

const Story: FC<StoryProps> = (props) => {
    const { id } = props
    return (
        <Section id={id}>
            <Section title={id} noPadding>
                {homeSections[id].map((s, i) => (
                    <Text key={i}>{s}</Text>
                ))}
            </Section>

            <Section noPadding>
                <Render client>
                    <ImgWrap>
                        {/* https://github.com/neptunian/react-photo-gallery */}
                        <Gallery
                            // @ts-ignore: Modified react-photo-gallery with nextjs/image
                            photos={photos}
                            direction="column"
                            columns={4}
                            margin={1}
                        />
                    </ImgWrap>
                </Render>
                <Render client>
                    <ImgWrapMobile>
                        <Gallery
                            // @ts-ignore: Modified react-photo-gallery with nextjs/image
                            photos={photos}
                            direction="column"
                            columns={2}
                            margin={1}
                        />
                    </ImgWrapMobile>
                </Render>
            </Section>
        </Section>
    )
}

export default Story
