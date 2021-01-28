const intersectionObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.setAttribute('src', entry.target.dataset.src)
			observer.unobserve(entry.target)
		}
	})
})

export default intersectionObserver
