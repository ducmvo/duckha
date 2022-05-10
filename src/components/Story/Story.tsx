import Section from '@components/Section'
import React, { FC } from 'react'
import Image from 'next/image'
import { ImgWrap, SectionWrap, StoryContainer } from './StoryElements'
import { sectionID } from '@libs/data'
type StoryProps = {
    id?: string
}
const Story: FC<StoryProps> = (props) => {
    const { id } = props
    return (
        <Section skew noPadding id={sectionID[1]}>
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
                    <Section title={sectionID[1]} noPadding>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Rerum consectetur facilis laboriosam cum soluta.
                        Facilis eos, eveniet repellendus eius saepe perferendis!
                        Dolores minus ratione accusantium? Et modi mollitia,
                        temporibus hic voluptate nulla architecto atque
                        asperiores, exercitationem repellendus at? In esse
                        debitis aspernatur fuga error quae dolorum harum sit!
                        Voluptatibus, quos.
                    </Section>
                </SectionWrap>
            </StoryContainer>
        </Section>
    )
}

export default Story
