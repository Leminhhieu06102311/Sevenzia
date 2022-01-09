// slider 
window.addEventListener("load", function() {
    const prevBtn = document.querySelector('.slider__btn-prev')
    const nextBtn = document.querySelector('.slider__btn-next')
    const mainSlide = document.querySelector('.slider__main')
    const dots = document.querySelectorAll('.slider__dots-item')
    const imgItems = document.querySelectorAll('.slider__main-item')
    const widthImg = imgItems[0].offsetWidth;
    var index = 0;
    let positionX = 0;
    var counter = 0;
    setInterval(function(){
        dots[counter].click();
        counter++;
        if(counter > 2) {
            counter = 0;
        }
    },5000)
    nextBtn.addEventListener("click",function() {
        handleChangeSlide(1)
    })
    prevBtn.addEventListener("click",function() {
        handleChangeSlide(-1)
    })
    dots.forEach(function(item,indexId){
        item.addEventListener("click",function(e){
            dots.forEach(function(el){
                el.classList.remove('active')
            })
            const slideIndex = e.target.dataset.id;
            item.classList.add('active')
            positionX = -1 * slideIndex * widthImg;
            mainSlide.style.transform = `translate(${positionX}px)`;
            index = slideIndex;
            // console.log(`chi so : ${positionX}`)
            // console.log(`slide index: ${slideIndex}`)
            // console.log(`index : ${index}`)
        })
    })
    function handleChangeSlide(direction) {
        if (direction === 1) {
            if (index >= 2)
            return;
            // console.log(`index : ${index}`)
            positionX -= widthImg;
            mainSlide.style.transform = `translateX(${positionX}px)`
            // console.log("next-slide", positionX)
            index++;
        } else if (direction === -1) {
            if(index <= 0)
            return;
            positionX += widthImg;
            mainSlide.style.transform = `translateX(${positionX}px)`
            // console.log("prev-slide", positionX)
            index--;
            // console.log(`index : ${index}`)
        }
        dots.forEach(function(el){
            el.classList.remove('active')
        })
        dots[index].classList.add('active')
    }
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

var userHeaderMobile = document.querySelector('.icon-mobile')
var subUserMobile = document.querySelector('.user-sub-mobile')
userHeaderMobile.onclick = function() {
    userHeaderMobile.classList.toggle('fa-times')
    subUserMobile.classList.toggle('user-active')
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