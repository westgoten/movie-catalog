import { useRef, useState, useEffect } from 'react'

function SearchBar() {
	const [isSearchOpen, setSearchOpen] = useState(false)
	const [inputText, setInputText] = useState('')
	const inputRef = useRef(null)

	useEffect(addAppEventListener)

	function addAppEventListener() {
		const app = document.querySelector('.app')
		const searchBar = document.querySelector('.search-bar')
		const searchBarChildren = searchBar.querySelectorAll('*')

		app.addEventListener('click', handleClickOutsideSearchBar)

		function handleClickOutsideSearchBar(event) {
			if (searchBar === event.target) return
			for (const childElement of searchBarChildren)
				if (childElement === event.target) return

			setSearchOpen(false)
		}

		return () =>
			app.removeEventListener('click', handleClickOutsideSearchBar)
	}

	return (
		<div className={`search-bar ${isSearchOpen ? 'search-bar-open' : ''}`}>
			<input
				ref={inputRef}
				className='search-input'
				type='text'
				placeholder='Search movies by title'
				value={inputText}
				onChange={handleInput}
				onFocus={handleInputFocus}
			/>
			{isSearchOpen ? (
				<span className='search-icon-wrapper' onClick={closeSearchBar}>
					<i className='fas fa-times search-icon-close'></i>
				</span>
			) : (
				<span className='search-icon-wrapper' onClick={openSearchBar}>
					<i className='fas fa-search search-icon-open'></i>
				</span>
			)}
		</div>
	)

	function handleInput(event) {
		setInputText(event.target.value)
	}

	function handleInputFocus() {
		setSearchOpen(true)
	}

	function closeSearchBar() {
		setInputText('')
		setSearchOpen(false)
	}

	function openSearchBar() {
		inputRef.current.focus()
	}
}

export default SearchBar
