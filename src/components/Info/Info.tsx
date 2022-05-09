import { FC } from 'react'
import Section from '@components/Section'
type InfoProps = {
    id?: string
}
const Info: FC<InfoProps> = (props) => {
    const { id } = props
    return (
        <Section title="Info" id={id}>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                consectetur facilis laboriosam cum soluta. Facilis eos, eveniet
                repellendus eius saepe perferendis! Dolores minus ratione
                accusantium? Et modi mollitia, temporibus hic voluptate nulla
                architecto atque asperiores, exercitationem repellendus at? In
                esse debitis aspernatur fuga error quae dolorum harum sit!
                Voluptatibus, quos.
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
