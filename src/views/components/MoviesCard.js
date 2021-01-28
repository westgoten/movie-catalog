import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import {
	VISIBLE,
	INVISIBLE,
	NONE
} from '../../utils/consts/componentAttributes'
import { NO_RATING } from '../../utils/consts/movieRating'
import { POSTER_SIZE, ORIGINAL_SIZE } from '../../utils/consts/imageSizes'

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
			const observer = createObserver()
			observer.observe(image)
			return () => observer.disconnect()
		}
	}, [])

	return (
		<div className='movies-card' {...(hasFullyLoaded ? VISIBLE : NONE)}>
			<Link to='/' className='movies-card-image-link'>
				<img
					ref={imageRef}
					data-src={getPosterFullPath(movie)}
					alt='Movie poster'
					className='movies-card-image'
					onLoad={handleImageOnLoad}
					onError={handleImageOnError}
					{...(hasImage ? VISIBLE : NONE)}
				/>
				<div
					className='movies-card-image-placeholder'
					{...(hasImage ? INVISIBLE : NONE)}>
					<i className='fas fa-image movies-card-image-placeholder-icon'></i>
				</div>
			</Link>
			<div className='movies-card-overview'>
				<span className='movies-card-name'>
					<Link to='/' className='movies-card-link'>
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
		if (imagesConfig.posterSizes.includes(POSTER_SIZE))
			return imagesConfig.baseUrl + POSTER_SIZE + movie.posterPath
		return imagesConfig.baseUrl + ORIGINAL_SIZE + movie.posterPath
	}
}

function createObserver() {
	return new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.setAttribute('src', entry.target.dataset.src)
				observer.unobserve(entry.target)
			}
		})
	})
}

export default MoviesCard
