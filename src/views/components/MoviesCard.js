import '../style/css/MoviesCard.css'

function MoviesCard({ movie }) {
	return (
		<div className='movies-card'>
			<img alt='Movie poster' className='movies-card-image' />
			<div className='movies-card-overview'>
				<span className='movies-card-name'>{movie.title}</span>
				<span className='movies-card-genres'>
					{movie.genres.join(', ')}
				</span>
			</div>
			<div className='movies-card-rating-border'>
				<span className='movies-card-rating'>{movie.voteAverage}</span>
			</div>
		</div>
	)
}

export default MoviesCard
