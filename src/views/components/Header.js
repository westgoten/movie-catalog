import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import TopNavbar from './TopNavbar'
import SideNavbar from './SideNavbar'
import { MEDIUM_WIDTH } from '../../utils/consts/screenSizes'
import '../style/css/Header.css'

function Header() {
	const [navbar, setNavbar] = useState(<TopNavbar />)

	useEffect(addMediaQueryEventListener)

	function addMediaQueryEventListener() {
		const mediaQueryList = window.matchMedia(`(max-width: ${MEDIUM_WIDTH})`)
		mediaQueryList.addEventListener('change', handleViewportWidthMatch)

		function handleViewportWidthMatch(event) {
			if (event.matches) setNavbar(<SideNavbar />)
			else setNavbar(<TopNavbar />)
		}

		return () =>
			mediaQueryList.removeEventListener(
				'change',
				handleViewportWidthMatch
			)
	}

	return (
		<header className='header'>
			<div className='logo'>
				<i className='fas fa-film logo-icon'></i>
				<span className='logo-text'>Movie Catalog</span>
			</div>
			<SearchBar />
			{navbar}
		</header>
	)
}

export default Header
