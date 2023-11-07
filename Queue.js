let myArray = [1,2,3,4];
function push(value) {
   myArray.length++;
   myArray[myArray.length-1] = value;
 }
function shift(){
    myArray[0] = null;
    for(let i = 0; i < myArray.length - 1; i++){
        let temp;
        myArray[i] = temp;
        myArray[i] = myArray[i+1];
        myArray[i+1] = temp;
    }
    myArray.length--;
}
push(10);
shift();
console.log(myArray);

