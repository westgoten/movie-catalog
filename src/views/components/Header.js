import { useLayoutEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import useScreenSize from '../../utils/hooks/useScreenSize'
import MobileSearchBar from './MobileSearchBar'
import SearchBar from './SearchBar'
import TopNavbar from './TopNavbar'
import { SMALL_WIDTH } from '../../utils/consts/screenSizes'
import { INVISIBLE, NONE } from '../../utils/consts/componentAttributes'

function Header() {
	const [scrollYOffset, setScrollYOffset] = useState(0)
	const [isHeaderVisible, setHeaderVisible] = useState(true)
	const isScreenSizeSmall = useScreenSize(SMALL_WIDTH)
	const app = useRef(null)
	const header = useRef(null)

	useLayoutEffect(() => {
		app.current = document.querySelector('.app')
		header.current = app.current.querySelector('.header')
	}, [])

	useLayoutEffect(() => {
		const appNode = app.current
		const headerNode = header.current
		appNode.addEventListener('scroll', handleHeaderVisibility)

		function handleHeaderVisibility() {
			if (scrollYOffset > appNode.scrollTop) setHeaderVisible(true)
			else if (
				appNode.scrollTop >= headerNode.offsetHeight &&
				scrollYOffset < appNode.scrollTop
			)
				setHeaderVisible(false)
			setScrollYOffset(appNode.scrollTop)
		}

		return () =>
			appNode.removeEventListener('scroll', handleHeaderVisibility)
	})

	return (
		<>
			<header
				className='header'
				{...(isHeaderVisible ? NONE : INVISIBLE)}>
				<Link to='/' className='logo'>
					<i className='fas fa-film logo-icon'></i>
					<span className='logo-text'>Movie Catalog</span>
				</Link>
				{isScreenSizeSmall ? <MobileSearchBar /> : <SearchBar />}
				<TopNavbar />
			</header>
			<div className='header-placeholder'></div>
		</>
	)
}

export default Header
