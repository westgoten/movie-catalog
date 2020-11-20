import { useRef, useState, useEffect } from 'react'
import '../style/SearchBar.css'

function SearchBar() {
	const [isSearchOpen, setSearchOpen] = useState(false)
	const [inputText, setInputText] = useState('')
	const inputRef = useRef(null)

	useEffect(() => {
		const input = inputRef.current
		const app = document.querySelector('.app')
		const searchBar = document.querySelector('.search-bar')
		const searchBarChildren = searchBar.querySelectorAll('*')

		input.addEventListener('focus', handleInputFocus)
		app.addEventListener('click', handleAppClick)

		function handleInputFocus() {
			setSearchOpen(true)
		}
		function handleAppClick(event) {
			if (searchBar === event.target) return
			for (const childElement of searchBarChildren)
				if (childElement === event.target) return
			setSearchOpen(false)
		}

		return () => {
			input.removeEventListener('focus', handleInputFocus)
			app.removeEventListener('click', handleAppClick)
		}
	})

	function handleInput(event) {
		setInputText(event.target.value)
	}

	function closeSearchBar() {
		setInputText('')
		setSearchOpen(false)
	}

	function openSearchBar() {
		inputRef.current.focus()
	}

	return (
		<div
			className={`search-bar ${isSearchOpen ? 'opened-search-bar' : ''}`}>
			<input
				ref={inputRef}
				className='search-input'
				type='text'
				placeholder='Search movies by title'
				value={inputText}
				onChange={handleInput}
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
}

export default SearchBar
