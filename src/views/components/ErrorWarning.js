import PageNotFound from './PageNotFound'
import Warning from './Warning'
import { NO_SEARCH_RESULTS } from '../../utils/consts/errorMessages'

function ErrorWarning({ requestError, query }) {
	return requestError && !requestError.errors ? (
		<Warning
			message={
				requestError.status_message
					? requestError.status_message
					: requestError
			}
		/>
	) : query ? (
		<Warning message={NO_SEARCH_RESULTS} />
	) : (
		<PageNotFound />
	)
}

export default ErrorWarning
