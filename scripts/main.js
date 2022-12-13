function darkMode() {
    const para = document.getElementsByClassName("para");
    const rate = document.getElementsByClassName("ratebox");
    const border = document.getElementsByClassName("SelectImage");
    const element = document.body;
    element.className = "dark-mode";
    let imageMode = document.getElementById("Moist");
    imageMode.src = "images/MoistMeterAlt.png";
    document.getElementById("nav").style.backgroundColor = "#c80432";
    document.getElementById("foot").style.backgroundColor = "#c80432";

    if (document.getElementById("Contact") != null) {
        document.getElementById("Contact").style.backgroundColor = "#a81b1b";
        document.getElementById("Contact").style.borderColor = "#840000";
    }

    if (document.getElementById("poster") != null) {
        document.getElementById("poster").style.borderColor = "#840000";
    }

    document.getElementById("foot").style.color = "white";

    for (let i = 0; i < rate.length; i++) {
        rate[i].style.backgroundColor = "#a81b1b";
        rate[i].style.borderColor = "#840000";
    }

    for (let i = 0; i < para.length; i++) {
        para[i].style.backgroundColor = "#a81b1b";
    }

    for (let i = 0; i < border.length; i++) {
        border[i].style.borderColor = "#840000";
    }

    for (let i = 0; i < vid.length; i++) {
        vid[i].style.borderColor = "#c80432";
    }

}

function lightMode() {
    const para = document.getElementsByClassName("para");
    const rate = document.getElementsByClassName("ratebox");
    const border = document.getElementsByClassName("SelectImage");
    const element = document.body;
    element.className = "light-mode";
    let imageMode = document.getElementById("Moist");
    imageMode.src = "images/MoistMeter.png";
    document.getElementById("nav").style.backgroundColor = "#37fbcd";
    document.getElementById("foot").style.backgroundColor = "#37fbcd";

    if (document.getElementById("Contact") != null) {
        document.getElementById("Contact").style.backgroundColor = "#8be4ff";
        document.getElementById("Contact").style.borderColor = "#7bffff";
    }

    if (document.getElementById("poster") != null) {
        document.getElementById("poster").style.borderColor = "#7bffff";
    }

    document.getElementById("foot").style.color = "black";

    for (let i = 0; i < rate.length; i++) {
        rate[i].style.backgroundColor = "#8be4ff";
        rate[i].style.borderColor = "#7bffff";
    }

    for (let i = 0; i < para.length; i++) {
        para[i].style.backgroundColor = "#8be4ff";
    }

    for (let i = 0; i < border.length; i++) {
        border[i].style.borderColor = "#7bffff";
    }

    for (let i = 0; i < vid.length; i++) {
        vid[i].style.borderColor = "#7bffff";
    }
}

function search() {
    console.log('Start Search function');

    let input = document.Search.searchinput.value;
    console.log("search: " + input);
    input = input.toLowerCase();

    if (input == "sonic") {
        location.replace("Sonic.html")
    }

    if (input == "blackadam") {
        location.replace("BlackAdam.html")
    }

    if (input == "cyberpunk") {
        location.replace("Cyberpunk.html")
    }

    if (input == "about") {
        location.replace("About.html")
    }

    return false
}

function validateForm() {
    let fname = document.forms["myForm"]["fname"].value;
    if (fname == "") {
      alert("First name must be filled out");
      return false;
    }

    let lname = document.forms["myForm"]["lname"].value;
    if (lname == "") {
      alert("Last name must be filled out");
      return false;
    }

    let email = document.forms["myForm"]["email"].value;
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }

    return false
}

//slideshow functions

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) { 
        slideIndex = slides.length 
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" actives", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " actives";
}

/*
function sideBar() {
    const element = document.getElementById("Side");
    element.style.position
}

const images = [Sonic, BlackAdam, CyberPunk, GOW, BlackPanther, AOT];
const Sonic = ["images/Sonic.jpg", 70];
const BlackAdam = ["images/BlackAdam.jpg", 70];
const CyberPunk = ["images/CyberPunk.jpg", 90];
const GOW = ["images/GOW.jpg", 95];
const BlackPanther = ["images/BlackPanther.jpg", 70];
const AOT = ["images/AOT.jpg", 95];


function next() {

    let img1 = document.getElementById("pic1");
    let pic = document.getElementById("pic2").src;

    img1.src = pic;
    
    let hold = pic;
    do
    {
        let box = images[Math.floor(Math.random() * 6)];
        pic = box[0];

    } while (hold == pic);
    img2 = document.getElementById("pic2");
    img2.src = pic;

}*/

