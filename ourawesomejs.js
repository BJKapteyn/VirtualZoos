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
    debugger;
    //pull the source of the element find what index in pictureArray they are,
    //and put that into an array.
    let leftCellSrc = carouselCells.leftCell.src;
    let mainCellSrc = carouselCells.mainCell.src;
    let rightCellSrc = carouselCells.rightCell.src;

    let indexOfLeftCell = pictureArray.indexOf(leftCellSrc);
    let indexOfMainCell = pictureArray.indexOf(mainCellSrc);
    let indexOfRightCell = pictureArray.indexOf(rightCellSrc);

    let arrayOfIndexes = [indexOfLeftCell, indexOfMainCell, indexOfRightCell];
    let arrayOfSources = [leftCellSrc, mainCellSrc, rightCellSrc];

    for(i = 0; i < arrayOfIndexes.length; i++) {
        if(arrayOfIndexes[i] == 0) {
            arrayOfIndexes[i] = arrayOfIndexes.length - 1;

        } else {
            arrayOfIndexes[i]--;
        }
    }
    // if(indexOfLeftCell == 0) {
    //     indexOfLeftCell = pictureArray.length - 1;
    //     indexOfMainCell--;
    //     indexOfRightCell--;
    // } else if(indexOfMainCell == 0) {
    //     indexOfLeftCell--;
    //     indexOfMainCell = pictureArray.length - 1;
    //     indexOfRightCell--;
    // } else if(indexOfRightCell == 0) {
    //     indexOfLeftCell--;
    //     indexOfMainCell--;
    //     indexOfRightCell = pictureArray.length - 1;
    // } else {
    //     indexOfLeftCell--;
    //     indexOfMainCell--;
    //     indexOfRightCell--;
    // }

    carouselCells.leftCell.src = pictureArray[indexOfLeftCell];
    carouselCells.mainCell.src = pictureArray[indexOfMainCell];
    carouselCells.rightCell.src = pictureArray[indexOfRightCell];
}

function nextPicture() {
    debugger;
    let leftCellSrc = carouselCells.leftCell.src;
    let mainCellSrc = carouselCells.mainCell.src;
    let rightCellSrc = carouselCells.rightCell.src;

    let indexOfLeftCell = pictureArray.indexOf(leftCellSrc);
    let indexOfMainCell = pictureArray.indexOf(mainCellSrc);
    let indexOfRightCell = pictureArray.indexOf(rightCellSrc);

    let arrayOfIndexes = [indexOfLeftCell, indexOfMainCell, indexOfRightCell];
    let arrayOfSources = [leftCellSrc, mainCellSrc, rightCellSrc];

    for(i = 0; i < arrayOfIndexes.length; i++) {
        if(arrayOfIndexes[i] == pictureArray.length - 1) {
            arrayOfIndexes[i] = 0;
        } else {
            arrayOfIndexes[i]++;
        }
        arrayOfSources[i] = pictureArray[arrayOfIndexes[i]];
    }

    carouselCells.leftCell.src = arrayOfSources[0];
    carouselCells.mainCell.src = arrayOfSources[1];
    carouselCells.rightCell.src = arrayOfSources[2];
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
