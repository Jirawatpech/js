function ctof(celsios){
    var ctemp = celsios
    var  ctofahar = ctemp* 9 / 5+32
    var message = ctemp + "is"+ ctofahar
    console.log(message)
}

var x = "asdasdasd"
console.log(x.length)

var mycar =[
    "asd",
    "asdss",
    "xczxc"
]
console.log(mycar.length)
console.log(mycar[2])


document.getElementById("grade").innerHTML=mycar.pop()
document.getElementById("grade").innerHTML=mycar.push("tae")
document.getElementById("grade").innerHTML=mycar.shift()
document.getElementById("grade").innerHTML=mycar.unshift("john")


document.getElementById("grade").innerHTML=mycar.toString()
document.getElementById("grade").innerHTML=mycar.join("-")


var arry=[
    "fack",
    "duck",
    "shit"
]
var arry2=["fuck","you"]

var b =arry.concat(arry2)


var mynum = [
    1,2,3,4,5
]
var mystring = "jirawat"
var mytrue= true
var myfalse = false
var mynone = null
var myundifine


var myObj={
    frist:"jirawat",
    last:"pechphan",
    fullname:function(){
        return this.frist+" "+this.last
    }
}
console.log(myObj.fullname())



