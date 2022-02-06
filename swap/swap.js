var x = document.getElementById("h1")
x.addEventListener('click',showinformation.bind(event,x),false);
var xd = document.getElementById("h2")
xd.addEventListener('click',showinformation.bind(event,xd),false);
var y = document.getElementById("p1");
y.addEventListener('click',showinformation.bind(event,y),false);
var z = document.getElementById("p2");
z.addEventListener('click',showinformation.bind(event,z),false);

function showinformation(a,ele)
{
  alert(a.innerHTML);
}


document.getElementById('bt1').addEventListener('click',swap);
function swap(){
  swapT(document.getElementById('h1'),document.getElementById('h2'));
  swapT(document.getElementById('p1'),document.getElementById('p2'));
}

function swapT (m1,m2){

var temp = m1.innerHTML;
  m1.innerHTML=m2.innerHTML;
  m2.innerHTML = temp;
}
