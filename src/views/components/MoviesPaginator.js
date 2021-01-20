import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getDefaultMovieFilter from '../../utils/getDefaultMovieFilter'

function MoviesPaginator({ pagination, match }) {
	const movieFilter = match.params.movieFilter
	const page = Number(match.params.page)
	const [paginator, setPaginator] = useState({
		pages: [],
		start: 0,
		current: 0,
		end: 9
	})

	useEffect(() => {
		const pages = []
		for (let i = 1; i <= pagination.totalPages; i++) pages.push(i)
		setPaginator((state) => ({ ...state, pages }))
	}, [pagination.totalPages])

	return (
		<div className='paginator'>
			<Link to='/' className='page-link'>
				<i className='fas fa-angle-double-left'></i>
			</Link>
			<Link to='/' className='page-link'>
				<i className='fas fa-angle-left'></i>
			</Link>
			{createPageLinks()}
			<Link to='/' className='page-link'>
				<i className='fas fa-angle-right'></i>
			</Link>
			<Link to='/' className='page-link'>
				<i className='fas fa-angle-double-right'></i>
			</Link>
		</div>
	)

	function createPageLinks() {
		const pageLinks = []
		for (
			let i = paginator.pages[paginator.start];
			i <= paginator.pages[paginator.end];
			i++
		) {
			pageLinks.push(
				<Link
					key={i}
					to={`/${
						movieFilter ? movieFilter : getDefaultMovieFilter()
					}/${i}`}
					className={
						'page-link' +
						(i === paginator.pages[paginator.current]
							? ' page-link-active'
							: '')
					}>
					{i}
				</Link>
			)
		}
		return pageLinks
	}
}

export default MoviesPaginator
