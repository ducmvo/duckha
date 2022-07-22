import Section from '@components/Section'
import { homeSections } from '@libs/data'
import Image from 'next/image'
import React, { FC } from 'react'
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
const Story: FC<StoryProps> = (props) => {
    const { id } = props
    return (
        <Section id={id}>
            {/* <StoryContainer> */}
            {/* <SectionWrap> */}
            <Section title={id} noPadding>
                {homeSections[id].map((s, i) => (
                    <Text key={i}>{s}</Text>
                ))}

                <ImgWrap>
                    <Image
                        src="https://ducandkha-wedding-images-bucket.s3.us-west-2.amazonaws.com/seattle-photos.jpg"
                        alt="story"
                        priority
                        width={833}
                        height={925}
                        layout="responsive"
                    />
                </ImgWrap>

                <ImgWrapMobile>
                    <Image
                        src="https://ducandkha-wedding-images-bucket.s3.us-west-2.amazonaws.com/seattle-photos-1.jpg"
                        alt="story"
                        priority
                        width={386}
                        height={854}
                        layout="responsive"
                        style={{ marginBottom: '5px' }}
                    />

                    <Image
                        src="https://ducandkha-wedding-images-bucket.s3.us-west-2.amazonaws.com/seattle-photos-2.jpg"
                        alt="story"
                        priority
                        width={365}
                        height={786}
                        layout="responsive"
                    />
                </ImgWrapMobile>
            </Section>
            {/* </SectionWrap> */}

            {/* </StoryContainer> */}
        </Section>
    )
}

export default Story
