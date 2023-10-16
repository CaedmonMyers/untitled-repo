
document.querySelector('moreButton').addEventListener('toggle', function (e) {
    var statusElement = document.getElementById('moreButtonStatus');
    if (this.open) {
        statusElement.innerText = "Hidden";
    } else {
        statusElement.innerText = "Shown";
    }
});


document.querySelector('lessButton').addEventListener('toggle', function (e) {
    var statusElement = document.getElementById('lessButtonStatus');
    if (this.open) {
        statusElement.innerText = "Hidden";
    } else {
        statusElement.innerText = "Shown";
    }
});
