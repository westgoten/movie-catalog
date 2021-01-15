import { useState } from 'react'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import { VISIBLE, NONE } from '../../utils/consts/componentAttributes'
import { NO_RATING } from '../../utils/consts/movieRating'
import '../style/css/MoviesCard.css'

function MoviesCard({ movie }) {
	const [hasFullyLoaded, setFullyLoaded] = useState(false)
	const genreList = useShallowEqualSelector((state) => state.genres.genreList)

	return (
		<div className='movies-card' {...(hasFullyLoaded ? VISIBLE : NONE)}>
			<div className='movies-card-image-container'>
				{movie.posterFullPath ? (
					<img
						src={movie.posterFullPath}
						alt='Movie poster'
						className='movies-card-image'
						onLoad={handleImageOnLoad}
					/>
				) : (
					<div className='movies-card-image-placeholder'>
						<i className='fas fa-exclamation-triangle movies-card-image-placeholder-icon'></i>
						<p className='movies-card-image-placeholder-text'>
							No image
						</p>
					</div>
				)}
			</div>
			<div className='movies-card-overview'>
				<span className='movies-card-name'>{movie.title}</span>
				<span className='movies-card-genres'>
					{getMovieGenreNameList()}
				</span>
				<div className='movies-card-rating-border'>
					<span className='movies-card-rating'>
						{movie.voteAverage === 0
							? NO_RATING
							: movie.voteAverage}
					</span>
				</div>
			</div>
		</div>
	)

	function handleImageOnLoad() {
		setFullyLoaded(true)
	}

	function getMovieGenreNameList() {
		return genreList
			.filter((genre) => {
				for (const genreID of movie.genreIDs) {
					if (genre.id === genreID) return true
				}
				return false
			})
			.map((genre) => genre.name)
			.join(', ')
	}
}

export default MoviesCard
