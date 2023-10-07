const username = window.prompt("Please enter your name");
const age = window.prompt("Please enter your age");
document.getElementById("username").innerHTML = `${username}`;
document.getElementById("age").innerHTML = `${age}`;
warningBackground = 'box has-background-warning';

if (age >= 18) {
  const height = window.prompt("Please enter your height");
  const weight = window.prompt("Please enter your weight");
  document.getElementById("height").innerHTML = `${height}`;
  document.getElementById("weight").innerHTML = `${weight}`;
  const bmi = weight / (height ** 2)
  if (bmi < 18.5) {
    document.getElementById("advice-text").innerHTML = (`Your BMI is: ${bmi}` + "</br>" + "You are under weight" + "</br>" + "Start with a personal trainer");
    document.getElementById("advice-card").className = warningBackground;
  }
  else if (bmi < 25) {
    document.getElementById("advice-text").innerHTML = (`Your BMI is: ${bmi}` + "</br>" + "You are normal weight" + "</br>" + "Start with any programme");
    document.getElementById("advice-card").className = 'box has-background-success';
  }
  else if (bmi < 30) {
    document.getElementById("advice-text").innerHTML = (`Your BMI is: ${bmi}` + "</br>" + "You are slightly over weight" + "</br>" + "Start with cardio training");
    document.getElementById("advice-card").className = warningBackground;
  }
  else {
    document.getElementById("advice-text").innerHTML = (`Your BMI is: ${bmi}` + "</br>" + "You are obese" + "</br>" + "Start with a personal trainer");
    document.getElementById("advice-card").className = 'box has-background-danger';
  }
} else {
  document.getElementById("advice-text").innerHTML = `Sorry ${username}, you are not old enough to get a proper advice from us;`;
  document.getElementById("advice-card").className = 'box has-background-grey-light';
}



