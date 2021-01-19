import { Link, NavLink, useRouteMatch } from 'react-router-dom'

function MoviesPaginator({ pagination }) {
	const match = useRouteMatch()
	const movieFilter = match.params.movieFilter

	return (
		<div className='paginator'>
			<Link>
				<i className='fas fa-angle-left'></i>
			</Link>
			{createPageLinks()}
			<Link>
				<i className='fas fa-angle-right'></i>
			</Link>
		</div>
	)

	function createPageLinks() {
		const pageLinks = []
		for (let i = 1; i <= 10; i++) {
			pageLinks.push(<NavLink to={`/${movieFilter}/${i}`}>{i}</NavLink>)
		}
		return pageLinks
	}
}

export default MoviesPaginator
