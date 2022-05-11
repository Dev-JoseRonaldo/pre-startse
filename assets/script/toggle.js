let show = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = document.querySelector('.menu-toggle')

const buttonsToggle = document.querySelectorAll(
  'header .content-header .menu-section nav ul li'
)

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'

  menuSection.classList.toggle('on', show)
  show = !show
})

/*
for (let i = 0; i < buttonsToggle.length; i++) {
  if (show) {
    buttonsToggle[i].addEventListener('click', () => {
      document.body.style.overflow = show ? 'hidden' : 'initial'

      menuSection.classList.toggle('on', show)
    })
  }
}
*/
