import '../style/css/Footer.css'

function Footer() {
	return (
		<footer className='footer'>
			<p>
				© 2020, made with ❤️ by{' '}
				<a
					className='link'
					href='https://github.com/westgoten'
					target='_blank'
					rel='noopener noreferrer'>
					westgoten
				</a>
				. See source code{' '}
				<a
					className='link'
					href='https://github.com/westgoten/movie-catalog'
					target='_blank'
					rel='noopener noreferrer'>
					here
				</a>
			</p>
		</footer>
	)
}

export default Footer
