var slides = document.querySelectorAll('.slider__img')
var btns = document.querySelectorAll('.btn')
let currentSlide = 1;

        var manualNav = function(manual) {
            slides.forEach(function(slide) {
                slide.classList.remove('active')
            })
            btns.forEach(function(slide) {
                slide.classList.remove('active')
            })
            slides[manual].classList.add('active')
            btns[manual].classList.add('active')
        }
        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                manualNav(i);
                currentSlide = i;
            })
        })

// search header 
var searchHeader = document.querySelector('.fa-search')
var subSearch = document.querySelector('.sub-search')
searchHeader.onclick = function() {
    searchHeader.classList.toggle('fa-times')
    subSearch.classList.toggle('active-search')
}
var userHeader = document.querySelector('.fa-user-plus')
var subUser = document.querySelector('.user-sub')
userHeader.onclick = function() {
    userHeader.classList.toggle('fa-times')
    subUser.classList.toggle('user-active')
}
// show menu overlay
var overlaySub = document.querySelectorAll('.overlay-click')


for (var key in overlaySub) {
    var listItem = overlaySub[key];

    listItem.onclick = function() {
        this.classList.toggle('overlay-active')
        
    }
}

// show overlay
var overlay = document.querySelector('.overlay-hidden')
function showOverlay() {
    overlay.style.display = 'block';
    document.querySelector('.header__nav-list-overlay').style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
}

function hideOverlay() {
    overlay.style.display = 'none';
    document.querySelector('.header__nav-list-overlay').style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0% 100%)';

}