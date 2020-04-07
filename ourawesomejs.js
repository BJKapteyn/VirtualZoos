(function() {
    let date = new Date();
    let year = date.getFullYear();

    let copyright = document.getElementById('copyright');

    copyright.innerText = year;

    console.log("hey there");
})();

window.onscroll = function() {
    this.sticky();
}
let youDidIt = document.getElementById('youDidIt');
let navBar = document.getElementById('nav');
let navBarOffsetTop = navBar.offsetTop;

function sticky() {
    if(window.pageYOffset >= navBarOffsetTop){
        youDidIt.style.display = "block";
        navBar.classList.add("navStick");
    } else {
        navBar.classList.remove("navStick");
    }
    
};



window.onscroll = function() {
    this.sticky();
}