import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import Loader from './Loader'
import { VISIBLE, NONE } from '../../utils/consts/componentAttributes'
import { NO_RATING } from '../../utils/consts/movieRating'
import { POSTER_SIZE, ORIGINAL_SIZE } from '../../utils/consts/imageSizes'
import intersectionObserver from '../../utils/intersectionObserver'
import { MOVIE_DETAILS_PATH } from '../../utils/consts/routePaths'

function MoviesCard({ movie }) {
	const imageRef = useRef(null)
	const [hasImage, setHasImage] = useState(false)
	const [hasFullyLoaded, setHasFullyLoaded] = useState(false)

	const imagesConfig = useShallowEqualSelector(
		(state) => state.configuration.imagesConfig
	)

	const genreList = useShallowEqualSelector((state) => state.genres.genreList)

	useEffect(() => {
		const image = imageRef.current
		if (image) {
			intersectionObserver.observe(image)
			return () => intersectionObserver.unobserve(image)
		}
	}, [])

	return (
		<div className='movies-card'>
			<Link
				to={`${MOVIE_DETAILS_PATH}/${movie.id}`}
				className='movies-card-image-link'>
				{hasFullyLoaded ? null : (
					<Loader className='movies-card-loader' />
				)}
				<img
					ref={imageRef}
					data-src={getPosterFullPath(movie)}
					alt='Movie poster'
					className='movies-card-image'
					onLoad={handleImageOnLoad}
					onError={handleImageOnError}
					{...(hasFullyLoaded ? (hasImage ? VISIBLE : NONE) : NONE)}
				/>
				<div
					className='movies-card-image-placeholder'
					{...(hasFullyLoaded ? (hasImage ? NONE : VISIBLE) : NONE)}>
					<i className='fas fa-image movies-card-image-placeholder-icon'></i>
				</div>
			</Link>
			<div className='movies-card-overview'>
				<span className='movies-card-name'>
					<Link
						to={`${MOVIE_DETAILS_PATH}/${movie.id}`}
						className='movies-card-link'>
						{movie.title}
					</Link>
				</span>
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
		setHasFullyLoaded(true)
		setHasImage(true)
	}

	function handleImageOnError() {
		setHasFullyLoaded(true)
		setHasImage(false)
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

	function getPosterFullPath(movie) {
		if (imagesConfig) {
			if (imagesConfig.posterSizes.includes(POSTER_SIZE))
				return imagesConfig.baseUrl + POSTER_SIZE + movie.posterPath
			return imagesConfig.baseUrl + ORIGINAL_SIZE + movie.posterPath
		}
	}
}

export default MoviesCard
