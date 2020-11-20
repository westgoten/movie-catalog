import SearchBar from './SearchBar'
import '../style/Header.css'

function Header() {
	return (
		<header className='header'>
			<div className='logo'>
				<i className='fas fa-film logo-icon'></i>
				<span className='logo-text'>Movie Catalog</span>
			</div>
			<SearchBar />
			<div></div>
		</header>
	)
}

export default Header
