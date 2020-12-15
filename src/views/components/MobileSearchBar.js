import { useState } from 'react'
import { OPENED, NONE } from '../../utils/consts/componentAttributes'
import '../style/css/MobileSearchBar.css'

function MobileSearchBar() {
	const [isSearchOpen, setSearchOpen] = useState(false)

	return (
		<div
			className='mobile-search-bar'
			onClick={openSearchBar}
			{...(isSearchOpen ? OPENED : NONE)}>
			<i
				className='fas fa-search mobile-search-bar-icon'
				{...(isSearchOpen ? OPENED : NONE)}></i>
		</div>
	)

	function openSearchBar() {
		console.log('isSearchOpen: ' + isSearchOpen)
		setSearchOpen(true)
	}

	function closeSearchBar() {
		setSearchOpen(false)
	}
}

export default MobileSearchBar
