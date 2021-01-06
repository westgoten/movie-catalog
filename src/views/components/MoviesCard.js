import '../style/css/MoviesCard.css'

function MoviesCard() {
	return (
		<div className='movies-card'>
			<img alt='Movie poster' className='movies-card-image' />
			<div className='movies-card-overview'>
				<span className='movies-card-name'>Jiu Jitsu</span>
				<span className='movies-card-genres'>Action, Thriller</span>
			</div>
			<div className='movies-card-rating-border'>
				<span className='movies-card-rating'>7.7</span>
			</div>
		</div>
	)
}

export default MoviesCard
