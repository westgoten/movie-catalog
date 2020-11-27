import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SideNavbar from './SideNavbar'
import { MEDIUM_WIDTH } from '../../utils/consts/screenSizes'
import '../style/css/TopNavbar.css'

function TopNavbar() {
	const [isScreenBig, setScreenBig] = useState(true)

	useEffect(handleMediaQuery)

	function handleMediaQuery() {
		const mediaQueryList = window.matchMedia(`(max-width: ${MEDIUM_WIDTH})`)
		if (mediaQueryList.matches) setScreenBig(false)
		else setScreenBig(true)

		return addMediaQueryEventListener(mediaQueryList)
	}

	function addMediaQueryEventListener(mediaQueryList) {
		mediaQueryList.addEventListener('change', handleScreenWidthMatch)

		function handleScreenWidthMatch(event) {
			if (event.matches) setScreenBig(false)
			else setScreenBig(true)
		}

		return () =>
			mediaQueryList.removeEventListener('change', handleScreenWidthMatch)
	}

	return (
		<nav className='top-navbar'>
			{isScreenBig ? (
				<>
					<Link to='/watchlist' className='top-navbar-item'>
						MY WATCHLIST
					</Link>
					<Link to='/auth' className='top-navbar-item'>
						SIGN IN
					</Link>
				</>
			) : (
				<SideNavbar />
			)}
		</nav>
	)
}

export default TopNavbar
