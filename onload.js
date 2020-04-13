window.onscroll = function() {
    this.sticky();
}

function sticky() {
    if(window.pageYOffset >= navBarOffsetTop){
        navBar.classList.add("navStick");
    } else {
        navBar.classList.remove("navStick");
    }
};

(function () {
    let date = new Date();
    let year = date.getFullYear();
    let copyright = document.getElementById('copyright');

    copyright.innerText = year;

    console.log("hey there");
})();