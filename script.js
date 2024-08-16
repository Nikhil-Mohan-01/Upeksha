let slideIndex = 0;
let slideTimeout;

showSlides();

function plusSlides(n) {
    clearTimeout(slideTimeout);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(slideTimeout);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n === undefined) {
        slideIndex++;
    } else {
        slideIndex = n;
    }

    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

    slideTimeout = setTimeout(showSlides, 10000); // Change image every 5 seconds
}

// connect to google sheets

const scriptURL = 'https://script.google.com/macros/s/AKfycbx_-qPhbgnTdTvQyEwPPUndlRSG86pjcHyswAcgwnoetqA5fQJZdMgRDV-YMJ_dIvRFag/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 2000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})