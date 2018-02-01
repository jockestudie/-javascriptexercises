document.getElementById("square").addEventListener("click", function () {
    let num1 = prompt("Enter the number");
    let number = parseInt(num1, 10);
    let square;
    let n1;
    let isPositive = true;

    if(number === 0){
        document.getElementById("answer").innerHTML = "The square root of " + number
        + "is 0."

    }

    else if (number < 0){
        number = -number;
        isPositive = false;
    }

    //Algoritrm

    //let answer = Math.sqrt(input);

    
    square = number / 2;
    while(Math.abs(n1 - square) !== 0) {
        n1 = square;
        square = (n1 + (number/n1)) /2;
    }

    if(isPositive){
        document.getElementById("answer").innerHTML = "The square root of  " + number
        + " are " + "+" + square + " and -" + square ;
    }

    else {
        document.getElementById("answer").innerHTML = "The square root of  " + number
            + " are " + "+" + square + " i and -" + square + "i";
    }

});





