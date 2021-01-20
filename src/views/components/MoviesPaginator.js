import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
	initializePaginator,
	changeCurrentPage
} from '../../actions/moviesActions'
import getDefaultMovieFilter from '../../utils/getDefaultMovieFilter'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'

function MoviesPaginator({ pagination, match }) {
	const dispatch = useDispatch()
	const history = useHistory()
	const paginator = useShallowEqualSelector((state) => state.movies.paginator)

	const movieFilter = match.params.movieFilter
		? match.params.movieFilter
		: getDefaultMovieFilter()
	const page = match.params.page ? Number(match.params.page) : 1

	useEffect(() => {
		dispatch(initializePaginator())
	}, [])

	useEffect(() => {
		dispatch(changeCurrentPage(page))
	}, [page])

	return (
		<div className='paginator'>
			<button
				className={
					'paginator-button' +
					(page > 1 ? '' : ' paginator-button-disabled')
				}
				onClick={goToFirstPage}>
				<i className='fas fa-angle-double-left'></i>
			</button>
			<button
				className={
					'paginator-button' +
					(page > 1 ? '' : ' paginator-button-disabled')
				}
				onClick={goToPreviousPage}>
				<i className='fas fa-angle-left'></i>
			</button>
			{createPageLinks()}
			<button
				className={
					'paginator-button' +
					(page < pagination.totalPages
						? ''
						: ' paginator-button-disabled')
				}
				onClick={goToNextPage}>
				<i className='fas fa-angle-right'></i>
			</button>
			<button
				className={
					'paginator-button' +
					(page < pagination.totalPages
						? ''
						: ' paginator-button-disabled')
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
		const pageLinks = []
		for (
			let pageNumber = paginator.pages[paginator.start];
			pageNumber <= paginator.pages[paginator.end];
			pageNumber++
		) {
			pageLinks.push(
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
		return pageLinks
	}

	function goToPage(pageNumber) {
		history.push(`/${movieFilter}/${pageNumber}`)
	}

	function goToNextPage() {
		if (page < pagination.totalPages)
			history.push(`/${movieFilter}/${page + 1}`)
	}

	function goToLastPage() {
		if (page < pagination.totalPages)
			history.push(`/${movieFilter}/${pagination.totalPages}`)
	}
}

export default MoviesPaginator
