function MoviesDetailsOverview() {
	return (
		<div className='movies-details-overview'>
			<img
				src='https://image.tmdb.org/t/p/w300/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg'
				alt='Movie poster'
			/>
			<div className='movies-details-overview-content-wrapper'>
				<div className='movies-details-overview-content'>
					<h1 className='movies-details-overview-title'>
						Wonder Woman 1984
					</h1>
					<p className='movies-details-overview-tagline'>
						A new era of wonder begins.
					</p>
					<button className='movies-details-overview-button'>
						<i className='fas fa-bookmark'></i>
						<span className='movies-details-overview-button-text'>
							Add to watchlist
						</span>
					</button>
					<p className='movies-details-overview-description'>
						Wonder Woman comes into conflict with the Soviet Union
						during the Cold War in the 1980s and finds a formidable
						foe by the name of the Cheetah.
					</p>
					<p className='movies-details-overview-genres'>
						Genres:
						<span className='movies-details-overview-genre'>
							Fantasy
						</span>
					</p>
				</div>
				<div className='movies-details-overview-facts'>
					<span>
						<i class='far fa-calendar-alt movies-details-overview-facts-icon'></i>
						Release date: 15.12.2020
					</span>
					<span>
						<i class='far fa-clock movies-details-overview-facts-icon'></i>
						Duration: 2h 32m
					</span>
					<span>
						<i class='far fa-money-bill-alt movies-details-overview-facts-icon'></i>
						Budget: $200,000,000
					</span>
				</div>
			</div>
		</div>
	)
}

export default MoviesDetailsOverview
