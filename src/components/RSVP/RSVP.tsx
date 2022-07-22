import Render from '@components/HOC/Render'
import GuestImage from '@components/Image'
import { useUser } from '@hooks/useAuth'
import { sectionRSVP } from '@libs/data'
import React from 'react'
import Attire from './Attire'
import Form from './Form'
import Response from './Response'
import Reception from './Reception'
import { Container } from './RSVPElements'

const RSVP = () => {
    const user = useUser()
    if (!user) return <Response />
    return (
        <Render client>
            <Container>
                <Form id={sectionRSVP[0]} />
                <Reception id={sectionRSVP[1]} />
                <Attire id={sectionRSVP[2]} />
                <GuestImage id={sectionRSVP[3]} />
            </Container>
        </Render>
    )
}

export default RSVP
