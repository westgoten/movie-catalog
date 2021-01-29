function Loader({ className }) {
	return (
		<div
			className={'loader-container' + (className ? ' ' + className : '')}>
			<div className='loader'></div>
		</div>
	)
}

export default Loader
