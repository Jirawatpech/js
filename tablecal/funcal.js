function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0),cell2 = row.insertCell(1),cell3=row.insertCell(2),cell4 =row.insertCell(3);
    var total;
    flag = true;
    while (flag) {
      var value1 = prompt("Insert value1");
      if (!isNaN(value1)){
        var node = document.createTextNode(value1);
        value1 = parseInt(value1);
        cell1.appendChild(node);
        flag = false;
      }
    }

    flag = true;
    while (flag) {
    var operator = prompt("Insert operator");
    if (['+','-','%','*'].indexOf(operator)>=0) {
      node = document.createTextNode(operator);
      cell2.appendChild(node);
      flag = false;
    }
    }
    flag = true;
    while (flag) {
    var value2 = prompt("Insert value2");
    if(!isNaN(value2))
    node = document.createTextNode(value2);
    value2 = parseInt(value2);
    cell3.appendChild(node);
    flag = false;
    }

    total = res(value1,operator,value2);
    node = document.createTextNode(total);
    cell4.appendChild(node);

  }
  function res(x,o,y){
    sum = 0;
    if (o == '+')
      sum = x+y;
      else if (o == '-')
      sum = x-y;
      else if (o == '*' || o =='x' )
      sum = x*y;
      else if (o == '/' )
      sum = x/y
      else if (o == '%')
      sum = x%y;
      else {
        alert("operator error");
        return NaN;
      }
    return sum;

  }