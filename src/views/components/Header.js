import useScreenSize from '../../utils/hooks/useScreenSize'
import MobileSearchBar from './MobileSearchBar'
import SearchBar from './SearchBar'
import TopNavbar from './TopNavbar'
import { SMALL_WIDTH } from '../../utils/consts/screenSizes'
import '../style/css/Header.css'

function Header() {
	const isScreenSizeSmall = useScreenSize(SMALL_WIDTH)

	return (
		<header className='header'>
			<div className='logo'>
				<i className='fas fa-film logo-icon'></i>
				<span className='logo-text'>Movie Catalog</span>
			</div>
			{isScreenSizeSmall ? <MobileSearchBar /> : <SearchBar />}
			<TopNavbar />
		</header>
	)
}

export default Header
