var x = document.getElementById("h1");
var y = document.getElementById("p1");
var z = document.getElementById("p2");
x.addEventListener('click',myFunction);
y.addEventListener('click',myFunction1);
z.addEventListener('click',myFunction2);
function myFunction() {
 alert(document.getElementById('h1').innerHTML);
}
function myFunction1() {
 alert(document.getElementById('p1').innerHTML);
}
function myFunction2() {
 alert(document.getElementById('p2').innerHTML);
}