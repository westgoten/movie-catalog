import { useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import MoviesRedirect from './MoviesRedirect'
import MoviesPage from '../pages/MoviesPage'
import PageNotFound from './PageNotFound'
import * as api from '../../api/apiMovieDB'
import '../style/css/App.css'

function App() {
	// Only for testing purposes
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await api.searchMovies('joão e maria')
				console.log(response.data)
			} catch (error) {
				console.log(error.message)
			}
		}
		fetchData()
	}, [])

	return (
		<div className='app'>
			<Header />
			<div className='header-placeholder'></div>
			<main className='main'>
				<Switch>
					<Route exact path='/'>
						<h1>Test</h1>
						<h1>Test</h1>
						<h1>Test</h1>
						<h1>Test</h1>
						<h1>Test</h1>
						<h1>Test</h1>
						<h1>Test</h1>
						<h1>Test</h1>
						<h1>Test</h1>
						<h1>Test</h1>
						<h1>Test</h1>
						<h1>Test</h1>
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
