document.addEventListener('click', (event) => {
  if (!event.target.matches('.showHTML')) return
  event.preventDefault()
  event.target.nextElementSibling.style.display = 'block'
  event.target.style.display = 'none'
}, false)

function initDocs() {
  const navAccordions = document.querySelectorAll('.nsw-docs-nav__list')

  navAccordions.forEach((list) => {
  	const button = list.previousElementSibling.querySelector('button')

	button.addEventListener('click', (event) => {
	  if (list.classList.contains('is-open')) {
      	button.classList.remove('is-open')
	  	list.classList.remove('is-open')
	  } else {
      	button.classList.add('is-open')
	  	list.classList.add('is-open')
	  }
	}, false)    
  })

  const navLinks = document.querySelectorAll('.nsw-docs-nav a')
  var currentURL = window.location.pathname

  if (currentURL == '/') currentURL = '/home/index.html'

  navLinks.forEach((link) => {
  	var linkURL = link.getAttribute('href')
    if (linkURL == '/') linkURL = '/home/index.html'

  	if (currentURL.match(linkURL)) {
	  	link.classList.add('is-active')

  		if(!link.parentNode.classList.contains('nsw-docs-nav__title')) {
  			const list = link.closest('ul')
  			const button = list.previousElementSibling.querySelector('button')

      	button.classList.add('is-open')
        button.classList.add('is-active')
		  	list.classList.add('is-open')
  		}
  	}
  })
}

initDocs();