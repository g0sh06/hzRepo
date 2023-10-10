// This array represents the weights of the 9 balls
let ballArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];
// Ask for the oddball (the ball that will be heavier) and make the corresponding 
// ball in the array heavier
// This way, the user input is not stored in any variable so you can't cheat this way
ballArray[prompt('Select the oddball [0-8]', 3)] = 1.2;

let sum1, sum2;
const arr1 = [], arr2 = [];
// loop for creating every element with the current number of i
for (let i = 0; i < ballArray.length; i++) {
  const item = document.createElement("div");
  const node = document.createTextNode(i);
  item.appendChild(node);
  item.className = "ball column box m-4 has-background-primary-light";
  const element = document.getElementById("ball-list").appendChild(item);
  // creating an array
  const list = document.getElementById("ball-list");
  const arrayOfElements = Array.from(list);
}
for (let i = 0; i < ballArray.length; i++) {
  arr1.push(ballArray[i]);
  arr2.push(ballArray[i + 3]);
}
for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
  sum2 += arr2[i];
}
if (sum1 === sum2) {
  // we know the ball is in group 3
  document.getElementById("left1").innerHTML = "[0, 1, 2]";
  document.getElementById("right1").innerHTML = "[3, 4, 5]";
  document.getElementById("result1").innerHTML = "balanced";
  document.getElementById("conclusion1").innerHTML = "oddball must be in [6, 7, 8]";
  if (ballArray[6] === ballArray[7]) {
    document.getElementById("left2").innerHTML = "[6]";
    document.getElementById("right2").innerHTML = "[7]";
    document.getElementById("result2").innerHTML = "balanced";
    document.getElementById("conclusion2").innerHTML = "oddball is [8]";
  }
  else if (ballArray[6] > ballArray[7]) {
    document.getElementById("left2").innerHTML = "[6]";
    document.getElementById("right2").innerHTML = "[7]";
    document.getElementById("result2").innerHTML = "left if heavier";
    document.getElementById("conclusion2").innerHTML = "oddball is [6]";
  }
  else if (ballArray[6] < ballArray[7]) {
    document.getElementById("left2").innerHTML = "[6]";
    document.getElementById("right2").innerHTML = "[7]";
    document.getElementById("result2").innerHTML = "right is heavier";
    document.getElementById("conclusion2").innerHTML = "oddball is [7]";
  }
}
if (sum1 > sum2) {
  // we know the ball is in group 1
  document.getElementById("left1").innerHTML = "[0, 1, 2]";
  document.getElementById("right1").innerHTML = "[3, 4, 5]";
  document.getElementById("result1").innerHTML = "left is heavier";
  document.getElementById("conclusion1").innerHTML = "oddball must be in [0, 1, 2]";

  if (ballArray[0] === ballArray[1]) {
    document.getElementById("left2").innerHTML = "[0]";
    document.getElementById("right2").innerHTML = "[1]";
    document.getElementById("result2").innerHTML = "balanced";
    document.getElementById("conclusion2").innerHTML = "oddball is [2]";
  }
  else if(ballArray[0] > ballArray[1]) {
    ddocument.getElementById("left2").innerHTML = "[0]";
    document.getElementById("right2").innerHTML = "[1]";
    document.getElementById("result2").innerHTML = "left if heavier";
    document.getElementById("conclusion2").innerHTML = "oddball is [0]";
  }
  else if(ballArray[0] < ballArray[1]) {
    document.getElementById("left2").innerHTML = "[0]";
    document.getElementById("right2").innerHTML = "[1]";
    document.getElementById("result2").innerHTML = "right is heavier";
    document.getElementById("conclusion2").innerHTML = "oddball is [1]";
  }

} else if (sum1 < sum2) {
  // "we know the ball is in group 2"
  document.getElementById("left1").innerHTML = "[0, 1, 2]";
  document.getElementById("right1").innerHTML = "[3, 4, 5]";
  document.getElementById("result1").innerHTML = "right is heavier";
  document.getElementById("conclusion1").innerHTML = "oddball must be in [3, 4, 5]";

  if (ballArray[3] === ballArray[4]) {
    document.getElementById("left2").innerHTML = "[3]";
    document.getElementById("right2").innerHTML = "[4]";
    document.getElementById("result2").innerHTML = "balanced";
    document.getElementById("conclusion2").innerHTML = "oddball is [5]";
  }
  else if (ballArray[3] > ballArray[4]) {
    document.getElementById("left2").innerHTML = "[3]";
    document.getElementById("right2").innerHTML = "[4]";
    document.getElementById("result2").innerHTML = "left if heavier";
    document.getElementById("conclusion2").innerHTML = "oddball is [3]";
  }
  else if (ballArray[3] < ballArray[4]) {
    document.getElementById("left2").innerHTML = "[3]";
    document.getElementById("right2").innerHTML = "[4]";
    document.getElementById("result2").innerHTML = "right is heavier";
    document.getElementById("conclusion2").innerHTML = "oddball is [4]";
  }

}
// http://127.0.0.1:5500/week3/starter-code/