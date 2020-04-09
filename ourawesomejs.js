let navBar = document.getElementById('nav');
let navBarOffsetTop = navBar.offsetTop;

let buttons = {
    previousButton: document.getElementById('leftButton'),
    nextButton: document.getElementById('rightButton')
};

let carouselCells = {
    leftCell: document.getElementById('leftCell'),
    mainCell: document.getElementById('mainCell'),
    rightCell: document.getElementById('rightCell')
};

let pictureArray = [
    'pics\\Beast_Wellington_FLATCROP.jpg',
    'pics\\DR_Optmic_FLATCROP.jpg',
    'pics\\Killzentine_FLATCROP.jpg',
    'pics\\Knifey_FLATCROP.jpg',
    'pics\\Mr_Mean_FLATCROP.jpg',
    'pics\\One_Shoegore_FLATCROP.jpg',
    'pics\\Rex_Bamboo_FLAT.jpg',
    'pics\\S_Word_FLATCROP.jpg'
];

(function () {
    debugger;
    let date = new Date();
    let year = date.getFullYear();

    let copyright = document.getElementById('copyright');

    copyright.innerText = year;

    console.log("hey there");
})();

window.onload = function() {
    carouselCells.leftCell.src = pictureArray[0];
    carouselCells.mainCell.src = pictureArray[1];
    carouselCells.rightCell.src = pictureArray[3];
}

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
