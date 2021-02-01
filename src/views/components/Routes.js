import { Switch, Route, Link } from 'react-router-dom'
import MoviesRedirect from './MoviesRedirect'
import MoviesPage from '../pages/MoviesPage'
import PageNotFound from './PageNotFound'

function Routes() {
	return (
		<Switch>
			<Route exact path='/'>
				<MoviesPage />
			</Route>
			<Route exact path='/auth'>
				<Link to='/'>Auth page placeholder</Link>
			</Route>
			<Route exact path='/watchlist'>
				<Link to='/'>Watchlist page placeholder</Link>
			</Route>
			<Route exact path='/:movieFilter'>
				<MoviesRedirect />
			</Route>
			<Route exact path='/:movieFilter/:page'>
				<MoviesPage />
			</Route>
			<Route exact path='/search'>
				<MoviesRedirect />
			</Route>
			<Route exact path='/search/:query'>
				<MoviesRedirect />
			</Route>
			<Route exact path='/search/:query/:page'>
				<MoviesPage />
			</Route>
			<Route path='*'>
				<PageNotFound />
			</Route>
		</Switch>
	)
}

export default Routes
