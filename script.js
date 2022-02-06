//model
const house = [
    {
        code :  "yiwue" ,
        name : "domain"
    },
    {
        code :"dd",
        name : "ssmain"
    }
]
const getFamily = housecode =>{
    switch(housecode){
        case "yiwue":
            return ["dave","vape"];
        case "dd":
            return ["daveee","veeape"]; 
    default:     
        return[];
    }
};

const creatopelemant= (text,value) =>{
    const element =document.createElement("option");
    element.textContent=text;
    element.value=value;
    return element;
}
const createulElement = text =>{
    const element= document.createElement("li");
    element.textContent = text;
    return element
}
const houseelement = document.querySelector("select");

//fill
house.forEach(house =>(
    houseelement.appendChild(creatopelemant(house.name,house.code))

))
    //controlercode
    function changer(housecode){
houseelement.addEventListener("change", e=>{
    const fams = getFamily(e.target.value);
    const famemlement = document.getElementById("family")

    famemlement.innerHTML="";
    fams.forEach(fam =>{
        famemlement.appendChild(createulElement(fam));
    })
}) 
}