

  var x = document.getElementById("h1")
x.addEventListener('click',showinformation.bind(event,x),false);
var y = document.getElementById("p1");
y.addEventListener('click',showinformation.bind(event,y),false);
var z = document.getElementById("p2");
z.addEventListener('click',showinformation.bind(event,z),false);
var g = document.getElementById("h2")
g.addEventListener('click',showinformation(event,g),true)
function showinformation(a,ele)
{
  alert(a.innerHTML);
}