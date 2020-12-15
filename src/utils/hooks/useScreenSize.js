import { useState, useEffect } from 'react'

function useScreenSize(screenSize) {
	const [isScreenFit, setScreenFit] = useState(false)

	useEffect(handleMediaQuery)

	function handleMediaQuery() {
		const mediaQueryList = window.matchMedia(`(max-width: ${screenSize})`)
		if (mediaQueryList.matches) setScreenFit(true)
		else setScreenFit(false)

		return addMediaQueryEventListener(mediaQueryList)
	}

	function addMediaQueryEventListener(mediaQueryList) {
		mediaQueryList.addEventListener('change', handleScreenWidthMatch)

		function handleScreenWidthMatch(event) {
			if (event.matches) setScreenFit(true)
			else setScreenFit(false)
		}

		return () =>
			mediaQueryList.removeEventListener('change', handleScreenWidthMatch)
	}

	return isScreenFit
}

export default useScreenSize
