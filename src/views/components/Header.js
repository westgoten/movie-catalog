import SearchBar from './SearchBar'
import TopNavbar from './TopNavbar'
import '../style/css/Header.css'

function Header() {
	return (
		<header className='header'>
			<div className='logo'>
				<i className='fas fa-film logo-icon'></i>
				<span className='logo-text'>Movie Catalog</span>
			</div>
			<SearchBar />
			<TopNavbar />
		</header>
	)
}

export default Header
