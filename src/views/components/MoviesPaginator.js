import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
	setPaginatorSize,
	initializePaginator,
	changeCurrentPage
} from '../../actions/moviesActions'
import getDefaultMovieFilter from '../../utils/getDefaultMovieFilter'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import useScreenSize from '../../utils/hooks/useScreenSize'
import { VERY_SMALL_WIDTH, SMALL_WIDTH } from '../../utils/consts/screenSizes'
import { VERY_SMALL, SMALL, BIG } from '../../utils/consts/paginatorSize'
import { INVISIBLE, NONE } from '../../utils/consts/componentAttributes'
import { SEARCH_PATH } from '../../utils/consts/routePaths'

function MoviesPaginator({ pagination, match, isInvisible }) {
	const dispatch = useDispatch()
	const history = useHistory()
	const paginator = useShallowEqualSelector((state) => state.movies.paginator)

	const totalPages = pagination ? pagination.totalPages : 0
	const movieFilter = match.params.movieFilter
		? match.params.movieFilter
		: getDefaultMovieFilter()
	const query = match.params.query
	const page = match.params.page ? Number(match.params.page) : 1

	const isScreenSizeVerySmall = useScreenSize(VERY_SMALL_WIDTH)
	const isScreenSizeSmall = useScreenSize(SMALL_WIDTH)

	useEffect(() => {
		dispatch(initializePaginator(totalPages))
		// eslint-disable-next-line
	}, [totalPages])

	useEffect(() => {
		const paginatorSize = isScreenSizeVerySmall
			? VERY_SMALL
			: isScreenSizeSmall
			? SMALL
			: BIG
		dispatch(setPaginatorSize(paginatorSize, totalPages))
		// eslint-disable-next-line
	}, [isScreenSizeVerySmall, isScreenSizeSmall, totalPages])

	useEffect(() => {
		dispatch(changeCurrentPage(page, totalPages))
		// eslint-disable-next-line
	}, [page, totalPages])

	return (
		<div className='paginator' {...(isInvisible ? INVISIBLE : NONE)}>
			<button
				className={
					'paginator-button-control' +
					(page > 1 ? '' : ' paginator-button-disabled')
				}
				onClick={goToFirstPage}>
				<i className='fas fa-angle-double-left'></i>
			</button>
			<button
				className={
					'paginator-button-control' +
					(page > 1 ? '' : ' paginator-button-disabled')
				}
				onClick={goToPreviousPage}>
				<i className='fas fa-angle-left'></i>
			</button>
			{createPageButtons()}
			<button
				className={
					'paginator-button-control' +
					(page < totalPages ? '' : ' paginator-button-disabled')
				}
				onClick={goToNextPage}>
				<i className='fas fa-angle-right'></i>
			</button>
			<button
				className={
					'paginator-button-control' +
					(page < totalPages ? '' : ' paginator-button-disabled')
				}
				onClick={goToLastPage}>
				<i className='fas fa-angle-double-right'></i>
			</button>
		</div>
	)

	function goToFirstPage() {
		if (page > 1) {
			if (query) {
				history.push(`${SEARCH_PATH}/${query}/${1}`)
			} else {
				history.push(`/${movieFilter}/${1}`)
			}
		}
	}

	function goToPreviousPage() {
		if (page > 1) {
			if (query) {
				history.push(`${SEARCH_PATH}/${query}/${page - 1}`)
			} else {
				history.push(`/${movieFilter}/${page - 1}`)
			}
		}
	}

	function createPageButtons() {
		const pageButtons = []
		for (
			let pageNumber = paginator.pages[paginator.start];
			pageNumber <= paginator.pages[paginator.end];
			pageNumber++
		) {
			pageButtons.push(
				<button
					key={pageNumber}
					className={
						'paginator-button' +
						(pageNumber === paginator.pages[paginator.currentIndex]
							? ' paginator-button-active'
							: '')
					}
					onClick={() => goToPage(pageNumber)}>
					{pageNumber}
				</button>
			)
		}
		return pageButtons
	}

	function goToPage(pageNumber) {
		if (query) {
			history.push(`${SEARCH_PATH}/${query}/${pageNumber}`)
		} else {
			history.push(`/${movieFilter}/${pageNumber}`)
		}
	}

	function goToNextPage() {
		if (page < totalPages) {
			if (query) {
				history.push(`${SEARCH_PATH}/${query}/${page + 1}`)
			} else {
				history.push(`/${movieFilter}/${page + 1}`)
			}
		}
	}

	function goToLastPage() {
		if (page < totalPages) {
			if (query) {
				history.push(`${SEARCH_PATH}/${query}/${totalPages}`)
			} else {
				history.push(`/${movieFilter}/${totalPages}`)
			}
		}
	}
}

export default MoviesPaginator
