import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SEARCH_PATH } from '../../utils/consts/routePaths'
import { OPENED, NONE } from '../../utils/consts/componentAttributes'
import OpacityLayer from './OpacityLayer'

function MobileSearchBar() {
	const history = useHistory()

	const [isSearchOpen, setSearchOpen] = useState(false)
	const [inputText, setInputText] = useState('')

	return (
		<>
			<div
				className='mobile-search-bar'
				{...(isSearchOpen ? OPENED : NONE)}>
				{isSearchOpen ? (
					<div className='mobile-search-bar-content'>
						<div
							className='mobile-search-bar-go-back'
							onClick={closeSearchBar}>
							<i className='fas fa-arrow-left mobile-search-bar-go-back-icon'></i>
						</div>
						<input
							className='mobile-search-bar-input'
							type='text'
							onChange={handleInput}
							value={inputText}
							onKeyDown={handleConfirmation}
							autoFocus
						/>
						<div
							className='mobile-search-bar-search'
							onClick={search}>
							<i className='fas fa-search mobile-search-bar-search-icon'></i>
						</div>
					</div>
				) : (
					<i
						className='fas fa-search mobile-search-bar-icon'
						onClick={openSearchBar}></i>
				)}
			</div>
			{isSearchOpen ? <OpacityLayer onClick={closeSearchBar} /> : null}
		</>
	)

	function closeSearchBar() {
		setSearchOpen(false)
	}

	function handleInput(event) {
		setInputText(event.target.value)
	}

	function handleConfirmation(event) {
		if (event.keyCode === 13) search()
	}

	function search() {
		if (inputText.length > 0) {
			closeSearchBar()
			history.push(`${SEARCH_PATH}/${encodeURIComponent(inputText)}/1`)
		}
	}

	function openSearchBar() {
		setSearchOpen(true)
	}
}

export default MobileSearchBar
