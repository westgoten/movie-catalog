import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './views/components/App'
import reportWebVitals from './utils/reportWebVitals'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './views/style/css/index.css'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter forceRefresh={false}>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
