// Uppgift 1
function upg1(){
    var h1Element = document.getElementById("test")
    h1Element.style.color = "red"
}

// Uppgift 2
function upg2(){
    document.getElementById("demo").innerHTML = "Hej"
}

// Uppgift 3
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function upg3(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(arr[i] * 5);
    }
    return result;
}

// Uppgift 4

function upg4(num1, num2) {
    return num1 * num2
}
  
// Uppgift 5

function upg5(){
    var inputField = document.getElementById("input-field");
    console.log(inputField.value);
}

upg1()
upg2()
console.log(upg3(myArray))
console.log(upg4(10, 10))
upg5()