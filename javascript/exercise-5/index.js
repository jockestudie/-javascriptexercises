function isEven(n) {
    return n % 2 == 0;
}

for (let i = 0; i <= 10; i++ ){
    if (isEven(i)){
        console.log(i + " is even")
    }
    else{
        console.log(i + " is odd")
    }
}
