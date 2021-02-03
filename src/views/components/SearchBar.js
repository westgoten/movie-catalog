import { useRef, useState, useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { SEARCH_PATH } from '../../utils/consts/routePaths'

function SearchBar() {
	const history = useHistory()
	const match = useRouteMatch(`${SEARCH_PATH}/:query`)
	const query = match ? match.params.query : null

	const [isSearchOpen, setSearchOpen] = useState(false)
	const [inputText, setInputText] = useState('')
	const inputRef = useRef(null)

	useEffect(() => {
		if (!query) clearInput()
	}, [query])

	function clearInput() {
		setInputText('')
	}

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
		const text = event.target.value
		setInputText(text)
		if (text.length > 0)
			history.push(`${SEARCH_PATH}/${encodeURIComponent(text)}/1`)
		else history.push('/')
	}

	function handleInputFocus() {
		setSearchOpen(true)
	}

	function closeSearchBar() {
		clearInput()
		setSearchOpen(false)
		history.push('/')
	}

	function openSearchBar() {
		inputRef.current.focus()
	}
}

export default SearchBar
