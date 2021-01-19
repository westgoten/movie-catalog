import MoviesCard from './MoviesCard'

function MoviesGrid({ movieList }) {
	return (
		<div className='movies-grid'>
			{movieList.map((movie) => (
				<MoviesCard key={movie.id} movie={movie} />
			))}
		</div>
	)
}

export default MoviesGrid
