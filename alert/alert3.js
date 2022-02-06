var x = document.getElementById("h1")
x.addEventListener('click',showinformation.bind(event,x),false);
var y = document.getElementById("p1");
y.addEventListener('click',showinformation.bind(event,y),false);
var z = document.getElementById("p2");
z.addEventListener('click',showinformation.bind(event,z),false);

function showinformation(a,ele)
{
  alert(a.innerHTML);
}