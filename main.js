window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showBackToTopOnScroll()

  activeMenuCurrentSection(home)
  activeMenuCurrentSection(menu)
  activeMenuCurrentSection(delivery)
  activeMenuCurrentSection(about)
  activeMenuCurrentSection(contact)
}

function openMenu() {
  const page = document.querySelector('body')

  page.classList.add('menu-expended')

  document.querySelector('.close-menu').style.display = 'initial'
  document.querySelector('.open-menu').style.display = 'none'
}

function closeMenu() {
  const page = document.querySelector('body')

  page.classList.remove('menu-expended')

  document.querySelector('.open-menu').style.display = 'initial'
  document.querySelector('.close-menu').style.display = 'none'
}

function showBackToTopOnScroll() {
  scrollY >= 580
    ? backToTop.classList.add('show')
    : backToTop.classList.remove('show')
}

function activeMenuCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(
    `.menu ul li a[href*=${sectionId}]`
  )

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 800
}).reveal(
  `#home, 
  #home img, 
  #home .stats, 
  #menu, 
  #menu header, 
  #menu .flavor, 
  #delivery, 
  #delivery header, 
  #delivery .content .button,
  #about,
  #about header,
  #about .content,
  #contact,
  #contact header,
  #contact .content`
)

ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000
}).reveal(`#delivery .content img`)
