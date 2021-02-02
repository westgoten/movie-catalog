import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import fetchMoviesStartupData from '../../utils/fetchMoviesStartupData'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		fetchMoviesStartupData(dispatch)
		// eslint-disable-next-line
	}, [])

	return (
		<div className='app'>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App
