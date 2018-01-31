/*var btn = document.getElementById("btn");

var paragraph = document.getElementsByTagName('p')[0];


btn.addEventListener("click",btnpress);
function btnpress() {
    paragraph.style.fontSize = '20px';
    paragraph.style.color = 'red';

    
}*/

/*let name = document.getElementById('name');
let lname = document.getElementById('Lname');
let btn = document.getElementById('btn');
let listener = function modal() {
    console.log(name.value);
    console.log(lname.value);

}

btn.addEventListener('click', listener);*/



/*let anchor = document.getElementById('anchor');
let btn = document.getElementById('btn');
let listener = function anc () {
    console.log(anchor.getAttribute('id'));
    console.log(anchor.getAttribute('hreflang'));
    console.log(anchor.getAttribute('target'));
    console.log(anchor.getAttribute('href'));
}
btn.addEventListener('click', listener);*/


/*function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}
function myFunction2(){
    document.getElementById("myTable").deleteRow(0);
};*/
/*function myFunction() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("demo").innerHTML = "Width: " + w + "<br>Height: " + h;
}*/
/*var txt = "";
txt += "<p>Total width/height: " + screen.width + "*" + screen.height + "</p>";
txt += "<p>Available width/height: " + screen.availWidth + "*" + screen.availHeight + "</p>";


document.getElementById("demo").innerHTML = txt;*/




let item = document.querySelector('input[type="text"]');
let value = document.querySelector('value');
item.addEventListener('keyup', runEvent);

function runEvent(e) {
    console.log(item);
    console.log(e.target.value);
};

