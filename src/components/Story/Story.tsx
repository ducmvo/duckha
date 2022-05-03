import React from 'react'
import styled from 'styled-components'

import InfoSection from '@components/InfoSection'

export const storyData = {
	id: 'discover',
	lightBg: true,
	lightText: false,
	lighttextDesc: false,
	topLine: 'Our story so far',
	headline: 'Catch up as we begin the next chapter!',
	description: 'Hold on, our story timeline is being developed...',
	buttonLabel: 'Learn More',
	imgStart: true,
	img: '/assets/images/story.jpeg',
	alt: 'lovers',
	dark: false,
	primary: false,
	darkText: true
}

const Story = () => {
	return <InfoSection {...storyData} />
}

export default Story
