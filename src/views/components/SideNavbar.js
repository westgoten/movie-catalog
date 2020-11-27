import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { none, visible } from '../../utils/consts/componentAttributes'
import '../style/css/SideNavbar.css'

function SideNavbar() {
	const [isNavbarOpen, setNavbarOpen] = useState(false)

	return (
		<>
			<i
				class='fas fa-bars side-navbar-menu-icon'
				onClick={openNavbar}></i>
			<nav className='side-navbar' {...(isNavbarOpen ? visible : none)}>
				<i
					className='fas fa-times side-navbar-close-button'
					onClick={closeNavbar}></i>
				<NavLink
					exact
					to='/'
					className='side-navbar-item'
					activeClassName='side-navbar-item-selected'
					onClick={closeNavbar}>
					MOVIES
				</NavLink>
				<NavLink
					exact
					to='/watchlist'
					className='side-navbar-item'
					activeClassName='side-navbar-item-selected'
					onClick={closeNavbar}>
					MY WATCHLIST
				</NavLink>
				<NavLink
					exact
					to='/auth'
					className='side-navbar-item'
					activeClassName='side-navbar-item-selected'
					onClick={closeNavbar}>
					SIGN IN
				</NavLink>
			</nav>
			<div
				className='side-navbar-opacity-layer'
				onClick={closeNavbar}
				{...(isNavbarOpen ? visible : none)}></div>
		</>
	)

	function openNavbar() {
		setNavbarOpen(true)
	}

	function closeNavbar() {
		setNavbarOpen(false)
	}
}

export default SideNavbar
