
let person = prompt("Please enter your fullname");
person = person.split(' ');
document.getElementById("first").innerHTML = person[0].toLowerCase();
document.getElementById("last").innerHTML = person[1].toUpperCase();