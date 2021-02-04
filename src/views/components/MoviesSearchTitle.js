function MoviesSearchTitle({ query }) {
	return (
		<div className='search-title-container'>
			<span className='search-title'>
				Search results for{' '}
				<span className='search-title-query'>' {query} '</span>
			</span>
		</div>
	)
}

export default MoviesSearchTitle
