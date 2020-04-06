(function() {
    let date = new Date();
    let year = date.getFullYear();

    let copyright = document.getElementById('copyright');

    copyright.innerText = year;

    console.log("hey there");
})();