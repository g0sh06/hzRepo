let username = window.prompt("Please enter your name");
let age = window.prompt("Please enter your age");

document.getElementById("username").innerHTML = `${username}`
document.getElementById("age").innerHTML = `${age}`

if(age >= 18){
    let height = window.prompt("Please enter your height");
    let weight = window.prompt("Please enter your weight");

    document.getElementById("height").innerHTML = `${height}`
    document.getElementById("weight").innerHTML = `${weight}`

    const bmi = weight / (height ** 2)
    if(bmi < 18.5){
        document.getElementById("advice-text").innerHTML = (`Your BMI is: ${bmi}` + "</br>" + "You are under weight" + "</br>" + "Start with a personal trainer")
        document.getElementById("advice-card").className = 'box has-background-warning'}
    if(bmi >= 18.5 && bmi < 24.999){
        document.getElementById("advice-text").innerHTML = (`Your BMI is: ${bmi}` + "</br>" + "You are normal weight" + "</br>" + "Start with any programme")
        document.getElementById("advice-card").className = 'box has-background-success'}
    if(bmi >= 25 && bmi < 29.999){
        document.getElementById("advice-text").innerHTML = (`Your BMI is: ${bmi}` + "</br>" + "You are slightly over weight" + "</br>" + "Start with cardio training")
        document.getElementById("advice-card").className = 'box has-background-warning'}
    if(bmi >= 30){
        document.getElementById("advice-text").innerHTML = (`Your BMI is: ${bmi}` + "</br>" + "You are obese" + "</br>" + "Start with a personal trainer")
        document.getElementById("advice-card").className = 'box has-background-danger'}
}else{
    document.getElementById("advice-text").innerHTML = `Sorry ${username}, you are not old enough to get a proper advice from us`
    document.getElementById("advice-card").className = 'box has-background-grey-light'
}



