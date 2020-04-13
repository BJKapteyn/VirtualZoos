let navBar = document.getElementById('nav');
let navBarOffsetTop = navBar.offsetTop;


let buttons = {
    previousButton: document.getElementById('leftButton'),
    nextButton: document.getElementById('rightButton')
};

let carouselCells = {
    leftCell: document.getElementById('leftPic'),
    mainCell: document.getElementById('mainPic'),
    rightCell: document.getElementById('rightPic')
};

buttons.previousButton.addEventListener('click', previousPicture);
buttons.nextButton.addEventListener('click', nextPicture);
carouselCells.leftCell.addEventListener('click', previousPicture);
carouselCells.rightCell.addEventListener('click', nextPicture);

function previousPicture() {
    let leftCellSrc = carouselCells.leftCell.src;
    let mainCellSrc = carouselCells.mainCell.src;
    let rightCellSrc = carouselCells.rightCell.src;

    let indexOfLeftCell = pictureArray.indexOf(leftCellSrc);
    let indexOfMainCell = pictureArray.indexOf(mainCellSrc);
    let indexOfRightCell = pictureArray.indexOf(rightCellSrc);

    if(indexOfLeftCell == 0) {
        indexOfLeftCell = pictureArray.length - 1;
        indexOfMainCell--;
        indexOfRightCell--;
    } else if(indexOfMainCell == 0) {
        indexOfLeftCell--;
        indexOfMainCell = pictureArray.length - 1;
        indexOfRightCell--;
    } else if(indexOfRightCell == 0) {
        indexOfLeftCell--;
        indexOfMainCell--;
        indexOfRightCell = pictureArray.length - 1;
    } else {
        indexOfLeftCell--;
        indexOfMainCell--;
        indexOfRightCell--;
    }

    carouselCells.leftCell.src = pictureArray[indexOfLeftCell];
    carouselCells.mainCell.src = pictureArray[indexOfMainCell];
    carouselCells.rightCell.src = pictureArray[indexOfRightCell];
}

function nextPicture() {
    let leftCellSrc = carouselCells.leftCell.src;
    let mainCellSrc = carouselCells.mainCell.src;
    let rightCellSrc = carouselCells.rightCell.src;

    let indexOfLeftCell = pictureArray.indexOf(leftCellSrc);
    let indexOfMainCell = pictureArray.indexOf(mainCellSrc);
    let indexOfRightCell = pictureArray.indexOf(rightCellSrc);

    if(indexOfLeftCell == pictureArray.length - 1) {
        indexOfLeftCell = 0;
        indexOfMainCell++;
        indexOfRightCell++;
    } else if(indexOfMainCell == pictureArray.length - 1) {
        indexOfLeftCell++;
        indexOfMainCell = 0;
        indexOfRightCell++;
    } else if(indexOfRightCell == pictureArray.length - 1) {
        indexOfLeftCell++;
        indexOfMainCell++;
        indexOfRightCell = 0;
    } else {
        indexOfLeftCell++;
        indexOfMainCell++;
        indexOfRightCell++;
    }

    carouselCells.leftCell.src = pictureArray[indexOfLeftCell];
    carouselCells.mainCell.src = pictureArray[indexOfMainCell];
    carouselCells.rightCell.src = pictureArray[indexOfRightCell];
}

let pictureArray = [
    'file:///D:/Side%20projects/VirtualZoos/pics/Beast_Wellington_FLATCROP.jpg',
    'file:///D:/Side%20projects/VirtualZoos/pics/DR_Optmic_FLATCROP.jpg',
    'file:///D:/Side%20projects/VirtualZoos/pics/Killzentine_FLATCROP.jpg',
    'file:///D:/Side%20projects/VirtualZoos/pics/Knifey_FLATCROP.jpg',
    'file:///D:/Side%20projects/VirtualZoos/pics/Mr_Mean_FLATCROP.jpg',
    'file:///D:/Side%20projects/VirtualZoos/pics/One_Shoegore_FLATCROP.jpg',
    'file:///D:/Side%20projects/VirtualZoos/pics/Rex_Bamboo_FLAT.jpg',
    'file:///D:/Side%20projects/VirtualZoos/pics/S_Word_FLATCROP.jpg'
];

window.onload = function() {
    carouselCells.leftCell.src = pictureArray[0];
    carouselCells.mainCell.src = pictureArray[1];
    carouselCells.rightCell.src = pictureArray[2];
}
