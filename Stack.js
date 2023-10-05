let myArray = [1,2];

function push(value) {
    myArray.length++;
    myArray[myArray.length-1] = value;
}
function pop(){
    myArray[myArray.length-1] = null;
    myArray.length--;
}
push(10)
push(11)
pop()
console.log(myArray)