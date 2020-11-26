import { NavLink } from 'react-router-dom'
import '../style/css/SideNavbar.css'

function SideNavbar() {
	return (
		<nav className='side-navbar'>
			<i className='fas fa-times side-navbar-close-button'></i>
			<NavLink
				exact
				to='/'
				className='side-navbar-item'
				activeClassName='side-navbar-item-selected'>
				MOVIES
			</NavLink>
			<NavLink
				exact
				to='/watchlist'
				className='side-navbar-item'
				activeClassName='side-navbar-item-selected'>
				MY WATCHLIST
			</NavLink>
			<NavLink
				exact
				to='/auth'
				className='side-navbar-item'
				activeClassName='side-navbar-item-selected'>
				SIGN IN
			</NavLink>
		</nav>
	)
}

export default SideNavbar
