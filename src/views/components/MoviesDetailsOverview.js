function MoviesDetailsOverview() {
	return (
		<div className='movies-details-overview'>
			<img src='' alt='Movie poster' />
			<div className='movies-details-overview-content'>
				<h1>Movie Name</h1>
				<p>Tagline</p>
				<button>Add to my watchlist</button>
				<p>Description</p>
				<p>
					Genres: <span></span>
				</p>
				<div className='movies-details-overview-facts'>
					<p>Release date</p>
					<p>Duration</p>
					<p>Budget</p>
				</div>
			</div>
		</div>
	)
}

export default MoviesDetailsOverview
