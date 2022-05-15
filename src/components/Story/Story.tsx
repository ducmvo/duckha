import Section from '@components/Section'
import { homeSections } from '@libs/data'
import Image from 'next/image'
import React, { FC } from 'react'
import { ImgWrap, SectionWrap, StoryContainer, Text } from './StoryElements'
type StoryProps = {
    id: string
}
const Story: FC<StoryProps> = (props) => {
    const { id } = props
    return (
        <Section skew noPadding id={id}>
            <StoryContainer>
                <ImgWrap>
                    <Image
                        src="/assets/images/story.jpg"
                        alt="story"
                        width={299}
                        height={299}
                    />
                </ImgWrap>
                <SectionWrap>
                    <Section title={id} noPadding>
                        {homeSections[id].map((s, i) => (
                            <Text key={i}>{s}</Text>
                        ))}
                    </Section>
                </SectionWrap>
            </StoryContainer>
        </Section>
    )
}

export default Story
