

function displayCard(){
    var doc = document.getElementById("display-card1")
    doc.style.top = "133px";
    doc.style.visibility = "visible";
    doc.style.opacity = "1";
}

// function hideCard() {
//     var doc = document.getElementById("display-card1")
//     doc.style.top = "100px";
//     doc.style.visibility = "hidden";
//     doc.style.opacity = "0";
//     // console.log("Hello")
// }

// function displayCard2(){
//     var doc = document.getElementById("display-card2")
//     doc.style.top = "133px";
//     doc.style.visibility = "visible";
//     doc.style.opacity = "1";
// }

// function hideCard2(){
//     var doc = document.getElementById("display-card2")
//     doc.style.top = "100px";
//     doc.style.visibility = "hidden";
//     doc.style.opacity = "0";
//     // console.log("Hello")
// }

// function displayCard3(){
//     var doc = document.getElementById("display-card3")
//     doc.style.top = "133px";
//     doc.style.visibility = "visible";
//     doc.style.opacity = "1";
// }

// function hideCard3(){
//     var doc = document.getElementById("display-card3")
//     doc.style.top = "100px";
//     doc.style.visibility = "hidden";
//     doc.style.opacity = "0";
//     // console.log("Hello")
// }

// function displayCard4(){
//     var doc = document.getElementById("display-card4")
//     doc.style.top = "133px";
//     doc.style.visibility = "visible";
//     doc.style.opacity = "1";
// }

// function hideCard4(){
//     var doc = document.getElementById("display-card4")
//     doc.style.top = "100px";
//     doc.style.visibility = "hidden";
//     doc.style.opacity = "0";
//     // console.log("Hello")
// }

// function displayCard5(){
//     var doc = document.getElementById("display-card5")
//     doc.style.top = "133px";
//     doc.style.visibility = "visible";
//     doc.style.opacity = "1";
// }

// function hideCard5(){
//     var doc = document.getElementById("display-card5")
//     doc.style.top = "100px";
//     doc.style.visibility = "hidden";
//     doc.style.opacity = "0";
//     // console.log("Hello")
// }

// function displayCard6(){
//     var doc = document.getElementById("display-card6")
//     doc.style.top = "133px";
//     doc.style.visibility = "visible";
//     doc.style.opacity = "1";
// }

// function hideCard6(){
//     var doc = document.getElementById("display-card6")
//     doc.style.top = "100px";
//     doc.style.visibility = "hidden";
//     doc.style.opacity = "0"
//     // console.log("Hello")
// }

// function displayCard7(){
//     var doc = document.getElementById("display-card7")
//     doc.style.top = "133px";
//     doc.style.visibility = "visible";
//     doc.style.opacity = "1";
// }

// function hideCard7(){
//     var doc = document.getElementById("display-card7")
//     doc.style.top = "100px";
//     doc.style.visibility = "hidden";
//     doc.style.opacity = "0";
//     // console.log("Hello")
// }

// function displayCard8(){
//     var doc = document.getElementById("display-card8")
//     doc.style.top = "133px";
//     doc.style.visibility = "visible";
//     doc.style.opacity = "1";
// }

// function hideCard8(){
//     var doc = document.getElementById("display-card8")
//     doc.style.top = "100px";
//     doc.style.visibility = "hidden";
//     doc.style.opacity = "0";
//     // console.log("Hello")
// }


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
function hideImageCard1(){
    var doc=document.getElementsByClassName(".name_hove1")
    doc.style.visibility="hidden";
    doc.style.opacity="0";
}

function displayImageCard2(){
    var doc=document.getElementsByClassName(".name_hove2");
    doc.style.visibility="visible";
    doc.style.opacity="1";
}
function hideImageCard2(){
    var doc=document.getElementsByClassName(".name_hove2")
    doc.style.visibility="hidden";
    doc.style.opacity="0";
}

function displayImageCard3(){
    var doc=document.getElementsByClassName(".name_hove3");
    doc.style.visibility="visible";
    doc.style.opacity="1";
}
function hideImageCard3(){
    var doc=document.getElementsByClassName(".name_hove3")
    doc.style.visibility="hidden";
    doc.style.opacity="0";
}

function displayImageCard4(){
    var doc=document.getElementsByClassName(".name_hove4");
    doc.style.visibility="visible";
    doc.style.opacity="1";
}
function hideImageCard4(){
    var doc=document.getElementsByClassName(".name_hove4")
    doc.style.visibility="hidden";
    doc.style.opacity="0";
}

function displayImageCard5(){
    var doc=document.getElementsByClassName(".name_hove5");
    doc.style.visibility="visible";
    doc.style.opacity="1";
}
function hideImageCard5(){
    var doc=document.getElementsByClassName(".name_hove5")
    doc.style.visibility="hidden";
    doc.style.opacity="0";
}

// function clicked(){
//     var element = document.getElementById('next');
//     element.scrollLeft =  element.scrollLeft + 30 
// }