

function displayCard(){
    var doc = document.getElementById("display-card1")
    doc.style.top = "133px";
    doc.style.visibility = "visible";
    doc.style.opacity = "1";
}

function hideCard() {
    var doc = document.getElementById("display-card1")
    doc.style.top = "100px";
    doc.style.visibility = "hidden";
    doc.style.opacity = "0";
    // console.log("Hello")
}

function displayCard2(){
    var doc = document.getElementById("display-card2")
    doc.style.top = "133px";
    doc.style.visibility = "visible";
    doc.style.opacity = "1";
}

function hideCard2(){
    var doc = document.getElementById("display-card2")
    doc.style.top = "100px";
    doc.style.visibility = "hidden";
    doc.style.opacity = "0";
    // console.log("Hello")
}

function displayCard3(){
    var doc = document.getElementById("display-card3")
    doc.style.top = "133px";
    doc.style.visibility = "visible";
    doc.style.opacity = "1";
}

function hideCard3(){
    var doc = document.getElementById("display-card3")
    doc.style.top = "100px";
    doc.style.visibility = "hidden";
    doc.style.opacity = "0";
    // console.log("Hello")
}

function displayCard4(){
    var doc = document.getElementById("display-card4")
    doc.style.top = "133px";
    doc.style.visibility = "visible";
    doc.style.opacity = "1";
}

function hideCard4(){
    var doc = document.getElementById("display-card4")
    doc.style.top = "100px";
    doc.style.visibility = "hidden";
    doc.style.opacity = "0";
    // console.log("Hello")
}

function displayCard5(){
    var doc = document.getElementById("display-card5")
    doc.style.top = "133px";
    doc.style.visibility = "visible";
    doc.style.opacity = "1";
}

function hideCard5(){
    var doc = document.getElementById("display-card5")
    doc.style.top = "100px";
    doc.style.visibility = "hidden";
    doc.style.opacity = "0";
    // console.log("Hello")
}

function displayCard6(){
    var doc = document.getElementById("display-card6")
    doc.style.top = "133px";
    doc.style.visibility = "visible";
    doc.style.opacity = "1";
}

function hideCard6(){
    var doc = document.getElementById("display-card6")
    doc.style.top = "100px";
    doc.style.visibility = "hidden";
    doc.style.opacity = "0"
    // console.log("Hello")
}

function displayCard7(){
    var doc = document.getElementById("display-card7")
    doc.style.top = "133px";
    doc.style.visibility = "visible";
    doc.style.opacity = "1";
}

function hideCard7(){
    var doc = document.getElementById("display-card7")
    doc.style.top = "100px";
    doc.style.visibility = "hidden";
    doc.style.opacity = "0";
    // console.log("Hello")
}

function displayCard8(){
    var doc = document.getElementById("display-card8")
    doc.style.top = "133px";
    doc.style.visibility = "visible";
    doc.style.opacity = "1";
}

function hideCard8(){
    var doc = document.getElementById("display-card8")
    doc.style.top = "100px";
    doc.style.visibility = "hidden";
    doc.style.opacity = "0";
    // console.log("Hello")
}


let currentIndex = 0;
const slides = document.querySelectorAll('.silder_bar img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

showSlide(currentIndex);

setInterval(nextSlide, 2000);

function displayImageCard(val){
    currentIndex = val
    nextSlide()
}


// function clicked(){
//     var element = document.getElementById('next_slide');
//     element.scrollLeft =  element.scrollLeft + 30 
// }

function clicked(){
    var element = document.getElementById('next_slide');
    element.scrollLeft =  element.scrollLeft + 200 
    console.log(element.scrollLeft)

}

function prevClicked(){
    var element = document.getElementById('next_slide');
    element.scrollLeft =  element.scrollLeft - 200 
    console.log(element.scrollLeft)

}

// Get the button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
