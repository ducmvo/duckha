import Navbar from '@components/Navbar'
import Sidebar from '@components/Sidebar'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useToggle } from '@hooks'
import HeroSection from '@components/HeroSection'
import InfoSection from '@components/InfoSection'
import {
	homeObjOne,
	homeObjThree,
	homeObjTwo
} from '@components/InfoSection/Data'
import Services from '@components/Services'
import Footer from '@components/Footer'

const Home: NextPage = () => {
	const [isOpen, setIsOpen] = useToggle(false)
	const toggleSideBar = () => setIsOpen(!isOpen)

	return (
		<>
			<Head>
				<title>Duc & Kha</title>
			</Head>
			<Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
			<Navbar toggleSideBar={toggleSideBar} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<Services />
			<InfoSection {...homeObjThree} />

			<Footer />
		</>
	)
}

export default Home
