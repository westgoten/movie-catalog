import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	initializePaginator,
	changeCurrentPage
} from '../../actions/moviesActions'
import getDefaultMovieFilter from '../../utils/getDefaultMovieFilter'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'

function MoviesPaginator({ pagination, match }) {
	const dispatch = useDispatch()
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
			{page > 1 ? (
				<>
					<Link to={`/${movieFilter}/${1}`} className='page-link'>
						<i className='fas fa-angle-double-left'></i>
					</Link>
					<Link
						to={`/${movieFilter}/${page - 1}`}
						className='page-link'>
						<i className='fas fa-angle-left'></i>
					</Link>
				</>
			) : null}
			{createPageLinks()}
			{page < pagination.totalPages ? (
				<>
					<Link
						to={`/${movieFilter}/${page + 1}`}
						className='page-link'>
						<i className='fas fa-angle-right'></i>
					</Link>
					<Link
						to={`/${movieFilter}/${pagination.totalPages}`}
						className='page-link'>
						<i className='fas fa-angle-double-right'></i>
					</Link>
				</>
			) : null}
		</div>
	)

	function createPageLinks() {
		const pageLinks = []
		for (
			let pageNumber = paginator.pages[paginator.start];
			pageNumber <= paginator.pages[paginator.end];
			pageNumber++
		) {
			pageLinks.push(
				<Link
					key={pageNumber}
					to={`/${movieFilter}/${pageNumber}`}
					className={
						'page-link' +
						(pageNumber === paginator.pages[paginator.currentIndex]
							? ' page-link-active'
							: '')
					}>
					{pageNumber}
				</Link>
			)
		}
		return pageLinks
	}
}

export default MoviesPaginator
