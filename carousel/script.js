function Class(id) {
    return document.getElementsByClassName(id)
}

function Id(id) {
    return document.getElementById(id)
}

for (let i = 0; i < Class('product').length; i++){

    console.log('js')
    let pill = Class('product')[i]
    pill.onclick = () => {
        Id('popup').classList.add('active')
    }

    Id('click').onclick = () => {
        Id('popup').classList.remove('active')
    }
}


/////////////////


var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}