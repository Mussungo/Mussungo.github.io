ScrollReveal({
  distance: '60px',
  duration: 1500,
  delay: 50
})

ScrollReveal().reveal('.title, .skills-wrapper', {
  delay: 400,
  origin: 'bottom'
})
ScrollReveal().reveal('.card', { delay: 400 })
ScrollReveal().reveal('.left-transit', { delay: 400, origin: 'left' })
ScrollReveal().reveal('.right-transit', { delay: 400, origin: 'right' })

setTimeout(() => {
  let elements = document.querySelectorAll('.bar-val')
  for (let element of elements) {
    element.classList.add('test')
    element.firstChild.style.opacity = 1
  }
}, 1500)

let areas = document.querySelectorAll('.p')
let skill_wrapper = document.querySelector('.skills-wrapper')
let skill_wrapper2 = document.querySelector('.skills-wrapper.l')

for (let area of areas) {
  area.addEventListener('click', () => {
    if (area.textContent == 'Front End') {
      skill_wrapper.style.display = 'grid'
      skill_wrapper2.style.display = 'none'
      ScrollReveal().reveal('.skills-wrapper', {
        delay: 400,
        origin: 'bottom'
      })
    } else {
      skill_wrapper2.style.display = 'grid'
      skill_wrapper.style.display = 'none'

      ScrollReveal().reveal('.title, .skills-wrapper.l', {
        delay: 400,
        origin: 'bottom'
      })
    }
  })
}
