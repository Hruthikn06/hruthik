let currentSlide=0;

function showSlide()
{
    const wrapper = document.querySelector('.slider-wrapper')
    const slideWidth = document.querySelector('.slider-slide').clientWidth;
    wrapper.style.transform = `translateX(${-currentSlide * slideWidth}px)`;

}

function prevSlide(){
    if (currentSlide > 0)
    {
        currentSlide--;
    }

else{
    currentSlide = 1;
}
showSlide();
}

function nextSlide(){
    if (currentSlide < 1)
    {
        currentSlide++;
    }

else{
    currentSlide = 0;
}
showSlide();
}