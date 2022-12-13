const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
let currentImg = 0
const button0 = document.querySelector('#button-0')
const button1 = document.querySelector('#button-1')
const button2 = document.querySelector('#button-2')
const button3 = document.querySelector('#button-3')
const button4 = document.querySelector('#button-4')
const button5 = document.querySelector('#button-5')
let image = document.querySelector('.image')
let pre = document.querySelector('.previous')
let next = document.querySelector('.next')
image.src = images[currentImg]
button0.innerHTML = '●'

const buttons = [
    button0,
    button1,
    button2,
    button3,
    button4,
    button5,
]
pre.onclick = function() {
    if (currentImg > 0) {
        currentImg--
    }  else {
        currentImg = 5 
    }  
    viewedImg()
}
next.onclick = function() {
   nextImg()
}

function viewedImg() {
    image.src = images[currentImg]
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = '○'
    } buttons[currentImg].innerHTML = '●'
}

button0.onclick = function() {
    currentImg = 0
    viewedImg() 
}

button1.onclick = function() {
    currentImg = 1
    viewedImg() 
}

button2.onclick = function() {
    currentImg = 2
    viewedImg() 
}

button3.onclick = function() {
    currentImg = 3
    viewedImg() 
}

button4.onclick = function() {
    currentImg = 4
    viewedImg() 
}

button5.onclick = function() {
    currentImg = 5
    viewedImg() 
}

function nextImg()  {
    if (currentImg < 5) {
        currentImg++
    } else {
        currentImg = 0
    }  
    viewedImg()
} 

window.setInterval(nextImg,3000)

let slideshow = document.querySelector('.slideshow')
let controls = document.querySelector('.controls')
pre.style.display = next.style.display = controls.style.display = 'none'
slideshow.addEventListener('mouseover', function() {
    pre.style.display = next.style.display = controls.style.display = 'inline-block'
}) 
slideshow.addEventListener('mouseout', function() {
    pre.style.display = next.style.display = controls.style.display = 'none'
}) 