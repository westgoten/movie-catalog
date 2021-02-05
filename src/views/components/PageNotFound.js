import Warning from './Warning'
import { PAGE_NOT_FOUND } from '../../utils/consts/errorMessages'

function PageNotFound() {
	return <Warning message={PAGE_NOT_FOUND} />
}

export default PageNotFound
