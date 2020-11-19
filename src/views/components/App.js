import { useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import * as api from '../../api/apiMovieDB'
import '../style/App.css'

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

			<Switch>
				<Route path='/test'>
					<Link to='/'>Bye</Link>
				</Route>
				<Route path='/'>
					<Link to='/test'>Hi</Link>
				</Route>
			</Switch>

			<Footer />
		</div>
	)
}

export default App
