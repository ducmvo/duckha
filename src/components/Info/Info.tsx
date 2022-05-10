import { FC } from 'react'
import Section from '@components/Section'
import { sectionID } from '@libs/data'
type InfoProps = {
    id?: string
}
const Info: FC<InfoProps> = (props) => {
    const { id } = props
    return (
        <Section title={sectionID[0]} id={sectionID[0]}>
            <p>
                Chúng tôi đã đạt tới độ cao rất lớn trong khí quyển vì bầu trời
                tối đen và các vì sao không còn lấp lánh. Ảo giác về đường chân
                trời khiến đám mây ảm đạm bên dưới lõm xuống và chiếc xe như
                trôi bồng bềnh giữa quả cầu khổng lồ tăm tối.
            </p>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                consectetur facilis laboriosam cum soluta. Facilis eos, eveniet
                repellendus eius saepe perferendis! Dolores minus ratione
                accusantium? Et modi mollitia, temporibus hic voluptate nulla
                architecto atque asperiores, exercitationem repellendus at? In
                esse debitis aspernatur fuga error quae dolorum harum sit!
                Voluptatibus, quos.
            </p>
        </Section>
    )
}

export default Info
