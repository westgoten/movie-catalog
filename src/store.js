import moviesReducer from './reducers/moviesReducer'
import genresReducer from './reducers/genresReducer'
import { configureStore } from '@reduxjs/toolkit'

const combinedReducers = {
	movies: moviesReducer,
	genres: genresReducer
}

const store = configureStore({ reducer: combinedReducers })

export default store
