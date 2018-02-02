var intervalID = window.setInterval(myCallback, 1000);

function myCallback() {
    document.getElementById("date").innerHTML = Date();
}