
// This array represents the weights of the 9 balls
let ballArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];

// Ask for the oddball (the ball that will be heavier) and make the corresponding 
// ball in the array heavier
// This way, the user input is not stored in any variable so you can't cheat this way
//ballArray[prompt('Select the oddball [0-8]', 3)] = 1.2;
let sum1, sum2;
let arr1 = [], arr2 = [], arr3 = [];
for(let i = 0; i < ballArray.length; i++){
  const item = document.createElement("button");
  const textnode = document.createTextNode("1");
  item.appendChild(textnode);
  document.getElementById("ball-list").appendChild(node);
}
for (let i = 0; i < ballArray.length / 3; i++) {
  arr1.push(ballArray[i]);
  arr2.push(ballArray[i + 3]);
  arr3.push(ballArray[i + 6]);
}
for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
  sum2 += arr2[i];
}
if (sum1 == sum2) {
  //we know the ball is in group 3

}
if (sum1 > sum2) {
  //we know the ball is in group 1

} else if (sum1 < sum2) {
  //"we know the ball is in group 2"

}

