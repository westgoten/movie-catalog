import { Switch, Route, Link } from 'react-router-dom'
import MoviesRedirect from './MoviesRedirect'
import MoviesPage from '../pages/MoviesPage'
import MoviesDetailsPage from '../pages/MoviesDetailsPage'
import PageNotFound from './PageNotFound'
import {
	AUTH_PATH,
	WATCHLIST_PATH,
	SEARCH_PATH,
	MOVIE_DETAILS_PATH
} from '../../utils/consts/routePaths'

function Routes() {
	return (
		<Switch>
			<Route exact path='/'>
				<MoviesPage />
			</Route>
			<Route exact path={AUTH_PATH}>
				<Link to='/'>Auth page placeholder</Link>
			</Route>
			<Route exact path={WATCHLIST_PATH}>
				<Link to='/'>Watchlist page placeholder</Link>
			</Route>
			<Route exact path={SEARCH_PATH}>
				<MoviesRedirect />
			</Route>
			<Route exact path={`${SEARCH_PATH}/:query`}>
				<MoviesRedirect />
			</Route>
			<Route exact path={`${SEARCH_PATH}/:query/:page`}>
				<MoviesPage />
			</Route>
			<Route exact path={MOVIE_DETAILS_PATH}>
				<MoviesRedirect />
			</Route>
			<Route exact path={`${MOVIE_DETAILS_PATH}/:movieId`}>
				<MoviesDetailsPage />
			</Route>
			<Route exact path='/:movieFilter'>
				<MoviesRedirect />
			</Route>
			<Route exact path='/:movieFilter/:page'>
				<MoviesPage />
			</Route>
			<Route path='*'>
				<PageNotFound />
			</Route>
		</Switch>
	)
}

export default Routes
