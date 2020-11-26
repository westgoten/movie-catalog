import { useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
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

			<main className='main'>
				<Switch>
					<Route path='/auth'>
						<Link to='/'>Auth page placeholder</Link>
					</Route>
					<Route path='/watchlist'>
						<Link to='/'>Watchlist page placeholder</Link>
					</Route>
					<Route path='/'>
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
				</Switch>
			</main>

			<Footer />
		</div>
	)
}

export default App
