import { Link } from 'react-router-dom'
import '../style/css/Menu.css'

function Menu() {
	return (
		<nav className='menu'>
			<Link to='/auth' className='menu-auth'>
				SIGN IN
			</Link>
		</nav>
	)
}

export default Menu
