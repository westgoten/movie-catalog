import moviesReducer from './reducers/moviesReducer'
import { configureStore } from '@reduxjs/toolkit'

const combinedReducers = {
	movies: moviesReducer
}

const store = configureStore({ reducer: combinedReducers })

export default store
