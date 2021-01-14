import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import '../style/css/MoviesCard.css'

function MoviesCard({ movie }) {
	const genreList = useShallowEqualSelector((state) => state.genres.genreList)

	return (
		<div className='movies-card'>
			<img
				src={movie.posterFullPath}
				alt='Movie poster'
				className='movies-card-image'
			/>
			<div className='movies-card-overview'>
				<span className='movies-card-name'>{movie.title}</span>
				<span className='movies-card-genres'>
					{getMovieGenreNameList()}
				</span>
				<div className='movies-card-rating-border'>
					<span className='movies-card-rating'>
						{movie.voteAverage}
					</span>
				</div>
			</div>
		</div>
	)

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
