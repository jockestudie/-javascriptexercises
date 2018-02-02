let color = {
    1: 'red',
    2: 'green',
    3: 'pink',
    4: 'yellow'
};


let colorInput = prompt("Please choose a number between 1 and 4");
document.getElementById("colorid").innerHTML = color[colorInput];