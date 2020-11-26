import { Link } from 'react-router-dom'
import '../style/css/TopNavbar.css'

function TopNavbar() {
	return (
		<nav className='top-navbar'>
			<Link to='/watchlist' className='top-navbar-item'>
				MY WATCHLIST
			</Link>
			<Link to='/auth' className='top-navbar-item'>
				SIGN IN
			</Link>
		</nav>
	)
}

export default TopNavbar
