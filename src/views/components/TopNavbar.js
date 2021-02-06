import { Link } from 'react-router-dom'
import useScreenSize from '../../utils/hooks/useScreenSize'
import SideNavbar from './SideNavbar'
import { MEDIUM_WIDTH } from '../../utils/consts/screenSizes'
import { WATCHLIST_PATH, AUTH_PATH } from '../../utils/consts/routePaths'

function TopNavbar() {
	const isScreenSizeMedium = useScreenSize(MEDIUM_WIDTH)

	return (
		<nav className='top-navbar'>
			{isScreenSizeMedium ? (
				<SideNavbar />
			) : (
				<>
					<Link to={WATCHLIST_PATH} className='top-navbar-item'>
						MY WATCHLIST
					</Link>
					<Link to={AUTH_PATH} className='top-navbar-item'>
						SIGN IN
					</Link>
				</>
			)}
		</nav>
	)
}

export default TopNavbar
