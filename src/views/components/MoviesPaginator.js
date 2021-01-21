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
import { SMALL_WIDTH } from '../../utils/consts/screenSizes'
import { SMALL, BIG } from '../../utils/consts/paginatorSize'
import { FIRST } from '../../utils/consts/componentAttributes'

function MoviesPaginator({ pagination, match }) {
	const dispatch = useDispatch()
	const history = useHistory()
	const paginator = useShallowEqualSelector((state) => state.movies.paginator)

	const totalPages = pagination ? pagination.totalPages : 0
	const movieFilter = match.params.movieFilter
		? match.params.movieFilter
		: getDefaultMovieFilter()
	const page = match.params.page ? Number(match.params.page) : 1

	const isScreenSizeSmall = useScreenSize(SMALL_WIDTH)

	useEffect(() => {
		dispatch(initializePaginator(totalPages))
	}, [totalPages])

	useEffect(() => {
		const paginatorSize = isScreenSizeSmall ? SMALL : BIG
		dispatch(setPaginatorSize(paginatorSize, totalPages))
	}, [isScreenSizeSmall, totalPages])

	useEffect(() => {
		dispatch(changeCurrentPage(page, totalPages))
	}, [page, totalPages])

	return (
		<div className='paginator'>
			<button
				className={
					'paginator-button-control' +
					(page > 1 ? '' : ' paginator-button-disabled')
				}
				onClick={goToFirstPage}
				{...FIRST}>
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
			{createPageLinks()}
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
		if (page > 1) history.push(`/${movieFilter}/${1}`)
	}

	function goToPreviousPage() {
		if (page > 1) history.push(`/${movieFilter}/${page - 1}`)
	}

	function createPageLinks() {
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
		history.push(`/${movieFilter}/${pageNumber}`)
	}

	function goToNextPage() {
		if (page < totalPages) history.push(`/${movieFilter}/${page + 1}`)
	}

	function goToLastPage() {
		if (page < totalPages) history.push(`/${movieFilter}/${totalPages}`)
	}
}

export default MoviesPaginator
