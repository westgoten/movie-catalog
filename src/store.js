import moviesReducer from './reducers/moviesReducer'
import genresReducer from './reducers/genresReducer'
import configurationReducer from './reducers/configurationReducer'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

const combinedReducers = {
	movies: moviesReducer,
	genres: genresReducer,
	configuration: configurationReducer
}

const store = configureStore(
	{ reducer: combinedReducers },
	getDefaultMiddleware(),
	true
)

export default store
