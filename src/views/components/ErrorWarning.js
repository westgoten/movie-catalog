import PageNotFound from './PageNotFound'
import Warning from './Warning'

function ErrorWarning({ requestError }) {
	return requestError && !requestError.errors ? (
		<Warning
			message={
				requestError.status_message
					? requestError.status_message
					: requestError
			}
		/>
	) : (
		<PageNotFound />
	)
}

export default ErrorWarning
