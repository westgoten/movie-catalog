function Warning({ message }) {
	return (
		<div className='warning-container'>
			<i className='fas fa-exclamation-triangle warning-icon'></i>
			<p className='warning-message'>{message}</p>
			<a href='/' className='warning-go-back-link'>
				<span className='warning-go-back-text'>Go back to catalog</span>
				<i className='fas fa-long-arrow-alt-right'></i>
			</a>
		</div>
	)
}

export default Warning
