import '../style/css/MoviesCard.css'

function MoviesCard() {
	return (
		<div className='movies-card'>
			<img alt='Movie poster' className='movies-card-image' />
			<div className='movies-card-overview'>
				<span className='movies-card-name'>Jiu Jitsu</span>
				<span className='movies-card-genres'>Action, Thriller</span>
				<div>
					<span></span>
				</div>
			</div>
		</div>
	)
}

export default MoviesCard
