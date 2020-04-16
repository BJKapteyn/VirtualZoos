let navBar = document.getElementById('nav');
let navBarOffsetTop = navBar.offsetTop;

function sticky() {
    if(window.pageYOffset >= navBarOffsetTop){
        navBar.classList.add("navStick");
    } else {
        navBar.classList.remove("navStick");
    }
}
window.onscroll = function() {
    sticky();
}
