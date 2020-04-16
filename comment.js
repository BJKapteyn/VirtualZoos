let submitButton = document.getElementById('submitButton');
let textArea = document.getElementById('textArea');
let newestComment = document.getElementById('newestComment');
let colorGradient = 255;

submitButton.addEventListener('click', grabText);

let commenter = "TackyHats"

function grabText() {
    colorGradient -= 50;
    if(colorGradient > 0) {
        let rgba = "rgb(" + colorGradient + ", 255, 255)"
    }
    let insideText = textArea.value;
    let paraElement = document.createElement('p');
    paraElement.className = 'youCommented';
    paraElement.innerText = commenter + " says:" + insideText;
    
    newestComment.appendChild(paraElement);
    paraElement.style.color = rgba;
}