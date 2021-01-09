import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import MoviesCard from './MoviesCard'
import '../style/css/MoviesGrid.css'

function MoviesGrid() {
	// TO DO: Move selector to MoviesPage
	const movieList = useShallowEqualSelector((state) => state.movies.movieList)
	const isRequestPending = useShallowEqualSelector(
		(state) => state.movies.isRequestPending
	)
	const requestError = useShallowEqualSelector(
		(state) => state.movies.requestError
	)

	return (
		<div className='movies-grid'>
			{movieList.map((movie) => (
				<MoviesCard key={movie.id} movie={movie} />
			))}
		</div>
	)
}

export default MoviesGrid
