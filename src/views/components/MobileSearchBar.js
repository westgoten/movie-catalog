import { useState } from 'react'
import { OPENED, NONE } from '../../utils/consts/componentAttributes'
import '../style/css/MobileSearchBar.css'

function MobileSearchBar() {
	const [isSearchOpen, setSearchOpen] = useState(false)

	return (
		<div className='mobile-search-bar' {...(isSearchOpen ? OPENED : NONE)}>
			{isSearchOpen ? (
				<div className='mobile-search-bar-content'>
					<div className='mobile-search-bar-go-back'>
						<i className='fas fa-arrow-left mobile-search-bar-go-back-icon'></i>
					</div>
					<input
						className='mobile-search-bar-input'
						type='text'
						autoFocus
					/>
					<div className='mobile-search-bar-search'>
						<i className='fas fa-search mobile-search-bar-search-icon'></i>
					</div>
				</div>
			) : (
				<i
					className='fas fa-search mobile-search-bar-icon'
					onClick={openSearchBar}></i>
			)}
		</div>
	)

	function openSearchBar() {
		setSearchOpen(true)
	}

	function closeSearchBar() {
		setSearchOpen(false)
	}
}

export default MobileSearchBar
