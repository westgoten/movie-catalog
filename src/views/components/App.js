import { Switch, Route, Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import MoviesRedirect from './MoviesRedirect'
import MoviesPage from '../pages/MoviesPage'
import PageNotFound from './PageNotFound'
import '../style/css/App.css'

function App() {
	return (
		<div className='app'>
			<Header />
			<div className='header-placeholder'></div>
			<main className='main'>
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
					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</main>
			<Footer />
		</div>
	)
}

export default App
