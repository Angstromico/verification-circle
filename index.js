const slide = document.querySelector('.slide')
const slide1 = document.querySelector('.slide1')
const slide2 = document.querySelector('.slide2')
const slide3 = document.querySelector('.slide3')
const slide4 = document.querySelector('.slide4')
const slide5 = document.querySelector('.slide5')
const slide6 = document.querySelector('.slide6')
const slide7 = document.querySelector('.slide7')
const slide8 = document.querySelector('.slide8')
const slide9 = document.querySelector('.slide9')
const number = document.getElementById('number')
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const number3 = document.getElementById('number3')
let counter = 0
let counter2 = 0
const choseSlide = (slide, number) => {
  slide.addEventListener('click', () => {
    if (!slide.classList.contains('purple')) {
      slide.classList.add('purple')
      counter++
      number.innerHTML = `${counter}`
    } else {
      slide.classList.remove('purple')
      counter--
      number.innerHTML = `${counter}`
    }
  })
}
choseSlide(slide, number)
choseSlide(slide1, number1)
choseSlide(slide2, number1)
choseSlide(slide3, number2)
choseSlide(slide4, number2)
choseSlide(slide5, number2)
choseSlide(slide6, number2)
choseSlide(slide7, number2)
choseSlide(slide8, number2)
choseSlide(slide9, number2)
