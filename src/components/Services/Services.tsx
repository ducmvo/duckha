import React from 'react'
const Icon1 = '/assets/images/svg-1.svg'
const Icon2 = '/assets/images/svg-2.svg'
const Icon3 = '/assets/images/svg-3.svg'
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP
} from './ServiceElements'

const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Photo Library</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} height="160px" width="160px" />
					<ServicesH2>2014</ServicesH2>
					<ServicesP>We first met</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} height="160px" width="160px" />
					<ServicesH2>2015</ServicesH2>
					<ServicesP>Graduation and long distance</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} height="160px" width="160px" />
					<ServicesH2>2016</ServicesH2>
					<ServicesP>Seattle! Getting engaged</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon1} height="160px" width="160px" />
					<ServicesH2>2017</ServicesH2>
					<ServicesP>
						{"Kha's"} graduation and a lots of road trips
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} height="160px" width="160px" />
					<ServicesH2>2018</ServicesH2>
					<ServicesP>
						Moved in to new apartment. Trip to Zion National Park
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} height="160px" width="160px" />
					<ServicesH2>2019</ServicesH2>
					<ServicesP>
						Coffee lovers. Trip to Yellowstone National Park
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} height="160px" width="160px" />
					<ServicesH2>2020</ServicesH2>
					<ServicesP>We found May! Getting into snowboarding</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} height="160px" width="160px" />
					<ServicesH2>2021</ServicesH2>
					<ServicesP>
						Kha was officially a dentist! Trip to Bahamas.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} height="160px" width="160px" />
					<ServicesH2>2022</ServicesH2>
					<ServicesP>MSCS admission. Upcoming trip to Vietnam</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	)
}

export default Services
