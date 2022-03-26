const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');
currentSlide = document.querySelectorAll('.showcase');
current = 0;


// clear the UI
function resetUI(){
    currentSlide.forEach(showCase => {
        showCase.style.display = 'none'
    });
}

// reset the UI

function init(){
    resetUI()

    currentSlide[0].style.display = "grid"
}

init()


// slide right
function slideLeft(){
    resetUI()
    currentSlide[current - 1].style.display = 'grid'
    current--
}

arrowLeft.addEventListener('click', () =>{
    if (current === 0){
        current = currentSlide.length
    }

    slideLeft()
})



function slideRight(){
    resetUI()
    currentSlide[current + 1].style.display = 'grid'
    current++
}

arrowRight.addEventListener('click', () =>{
    if (current === currentSlide.length - 1){
        current = - 1
    }

    slideRight()

})


// togglr for mobile menu


const open = document.querySelector(".open")
const close = document.querySelector(".close")
const nav = document.querySelector(".nav__bar ul")


open.addEventListener('click', ()=>{
    nav.classList.add('active')
    open.classList.add('active')
})

close.addEventListener('click', ()=>{
    nav.classList.remove('active')
    open.classList.remove('active')
})