import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import { ORIGINAL_SIZE, POSTER_SIZE } from '../../utils/consts/imageSizes'
import '../style/css/MoviesCard.css'

function MoviesCard({ movie }) {
	const imagesConfig = useShallowEqualSelector(
		(state) => state.configuration.imagesConfig
	)
	const genreList = useShallowEqualSelector((state) => state.genres.genreList)

	return (
		<div className='movies-card'>
			<img
				src={getPosterFullPath()}
				alt='Movie poster'
				className='movies-card-image'
			/>
			<div className='movies-card-overview'>
				<span className='movies-card-name'>{movie.title}</span>
				<span className='movies-card-genres'>
					{getMovieGenreNameList()}
				</span>
			</div>
			<div className='movies-card-rating-border'>
				<span className='movies-card-rating'>{movie.voteAverage}</span>
			</div>
		</div>
	)

	function getPosterFullPath() {
		if (imagesConfig) {
			if (imagesConfig.posterSizes.includes(POSTER_SIZE))
				return imagesConfig.baseUrl + POSTER_SIZE + movie.posterPath
			return imagesConfig.baseUrl + ORIGINAL_SIZE + movie.posterPath
		}
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
