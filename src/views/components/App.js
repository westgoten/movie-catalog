import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchConfiguration } from '../../actions/configurationActions'
import { fetchGenres } from '../../actions/genresActions'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchConfiguration())
		dispatch(fetchGenres())
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
