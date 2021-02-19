import MoviesDetailsOverview from '../components/MoviesDetailsOverview'
import MoviesDetailsActors from '../components/MoviesDetailsActors'
import MoviesDetailsGallery from '../components/MoviesDetailsGallery'
import MoviesDetailsRecommendations from '../components/MoviesDetailsRecommendations'

function MoviesDetailsPage() {
	return (
		<div>
			<MoviesDetailsOverview />
			<MoviesDetailsActors />
			<MoviesDetailsGallery />
			<MoviesDetailsRecommendations />
		</div>
	)
}

export default MoviesDetailsPage
