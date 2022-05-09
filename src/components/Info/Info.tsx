import CountDown from '@components/CountDown'
import React from 'react'
import {
    Row,
    Column,
    Title,
    Content,
    Media,
    Img,
    MediaContent,
    MediaImg,
} from './InfoElements'
const Info = () => {
    return (
        <div>
            <Row skew={true}>
                <Column skew={true}>
                    <CountDown />
                </Column>
            </Row>
            <Row skew={false}>
                <Column skew={false}>
                    <Title>Info</Title>
                    <Content>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Rerum consectetur facilis laboriosam cum soluta.
                        Facilis eos, eveniet repellendus eius saepe perferendis!
                        Dolores minus ratione accusantium? Et modi mollitia,
                        temporibus hic voluptate nulla architecto atque
                        asperiores, exercitationem repellendus at? In esse
                        debitis aspernatur fuga error quae dolorum harum sit!
                        Voluptatibus, quos.
                    </Content>
                    <Content>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Rerum consectetur facilis laboriosam cum soluta.
                        Facilis eos, eveniet repellendus eius saepe perferendis!
                        Dolores minus ratione accusantium? Et modi mollitia,
                        temporibus hic voluptate nulla architecto atque
                        asperiores, exercitationem repellendus at? In esse
                        debitis aspernatur fuga error quae dolorum harum sit!
                        Voluptatibus, quos.
                    </Content>
                </Column>
            </Row>

            <Row skew={true}>
                <Column skew={true}>
                    <Media>
                        <MediaImg>
                            <Img
                                src="/assets/images/story.jpg"
                                alt="story"
                                layout="fill"
                            />
                        </MediaImg>
                        <MediaContent>
                            <Title>Story</Title>
                            <Content>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Rerum consectetur facilis
                                laboriosam cum soluta. Facilis eos, eveniet
                                repellendus eius saepe perferendis! Dolores
                                minus ratione accusantium? Et modi mollitia,
                                temporibus hic voluptate nulla architecto atque
                                asperiores, exercitationem repellendus at? In
                                esse debitis aspernatur fuga error quae dolorum
                                harum sit! Voluptatibus, quos.
                            </Content>
                        </MediaContent>
                    </Media>
                </Column>
            </Row>
        </div>
    )
}

export default Info
