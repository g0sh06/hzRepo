/**
 * This variable represents the entire list of race data. It calls the 
 * `fetchFormula1Data()` function that builds a (random) datastructure. You are
 * supposed to work with this variable in your project.
 * 
 * WARNING: do not change or delete this code
 */
const racedata = fetchFormula1Data();

/**
 * Initializes the app. This function is called when the page is fully loaded
 * (the window load event).
 */
const dropdown = document.getElementById('driver');
const getElementsFromLaps = document.getElementById('laps');
const sum = 0;
const getFastestLap = document.getElementById('fastest');
const fastestDriver = document.createElement('td');
const fastestTime = document.createElement('td');
const row = document.createElement('tr');
const tdnameDriver = document.createElement('td');
const tdLapTime = document.createElement('td');
/**
 * doing everything in that function
 */
function init() {

  console.log(racedata);
  for (let i = 0; i < racedata.length; i++) {
    addingElementsToList(getElementsFromLaps, sum, racedata, i);
    addDriversToDropdown(dropdown, racedata, i);
  }
  addFastestLap(fastestDriver, fastestTime, getFastestLap, racedata);
  button.addEventListener('click', pressedButton);
}
// Register the `init` function on the load event (when the DOM is ready). 
window.addEventListener('load', init);

const button = document.getElementById('submit');
/**
 * function when the button is pressed
 */
function pressedButton() {
  //getting values from user's inputs
  const driverNumber = document.getElementById('driver').value;
  const driverTime = parseFloat(document.getElementById('lapTime').value);
  const sumOfLapTimes = 0;
  const arrayOfLaps = [];
  if (driverTime < 60) {
    window.alert("Please enter bigger number");
  } else {
    // pushing value of the lap to a certain object in the array(index starts from 0)
    racedata[driverNumber - 1].laps.push(driverTime);
    for (let i = 0; i < racedata.length; i++) {
      addingElementsToList(getElementsFromLaps, sumOfLapTimes, racedata, i);
    }
    addFastestLap(fastestDriver, fastestTime, getFastestLap, racedata);
  }
}
/**
 * 
 * @param {*} getter takes elements from the DOM
 * @param {*} arrayofElements takes the database
 */
function addFastestLap(tdElement1, tdElement2, getter, arrayofElements) {
  let smallestValue = 0;
  let driver = '';
  const arrayOfLaps = [];
  for (let i = 0; i < arrayofElements.length; i++) {
    // determine the fastest lap of every driver
    const fastestLapTime = Math.min(...racedata[i].laps);
    // getting the index of the fastest lap
    const fastestLaptIndex = racedata[i].laps.indexOf(fastestLapTime);
    // adding 1 to the fastestLaptIndex, because we want real life index(in programming index starts from 0)
    const lapIndex = fastestLaptIndex + 1;
    // pushing everything into arrayOfLaps array with objects
    arrayOfLaps.push({ nameOfDriver: racedata[i].name, fastestLapTime, lapIndex });
  }
  arrayOfLaps.sort((first, seconds) => first.fastestLapTime - seconds.fastestLapTime);
  console.log(arrayOfLaps);
  if (arrayOfLaps.length > 0) {
    smallestValue = arrayOfLaps[0].fastestLapTime;
    driver = arrayOfLaps[0].nameOfDriver;
  }
  console.log(arrayOfLaps[0].fastestLapTime);
  tdElement1.innerHTML = driver;
  tdElement2.innerHTML = format(smallestValue);
  tdElement2.className = 'time';
  getter.appendChild(tdElement1);
  getter.appendChild(tdElement2);
}
/**
 * ******************** NOTICE **************************
 * The methods below are provided for your convenience.
 * You're allowed to use them, but this is not mandatory.
 * ******************************************************
 */
// FUNCTION, WHICH ARE NOT THAT IMPORTANT TO THE FUNCTIONALITY OF THE CODE
/**
 * 
 * @param {*} getter get elements from certain HTML tag
 * @param {*} sumOfElements the sum of laps
 * @param {*} arrayOfElements in our situation racedata array
 * @param {*} index = i
 */
function addingElementsToList(getter, sumOfElements, arrayOfElements, index) {
  const row = document.createElement('tr');
  const tdnameDriver = document.createElement('td');
  const tdLapTime = document.createElement('td');
  for (let j = 0; j < arrayOfElements[index].laps.length; j++) {
    sumOfElements += arrayOfElements[index].laps[j];
  }
  tdnameDriver.innerHTML = arrayOfElements[index].name;
  tdLapTime.innerHTML = format(sumOfElements);
  tdLapTime.className = 'time';
  row.appendChild(tdnameDriver);
  row.appendChild(tdLapTime);
  getter.appendChild(row);
  sumOfElements = 0;
}
/**
 * 
 * @param {*} time takes a numbers and transforms it into mm:ss.ss
 * @returns return the formatted number
 */
function format(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  if (seconds < 10) {
    return `${minutes}:0${seconds.toFixed(3)}`;
  }
  return `${minutes}:${seconds.toFixed(3)}`;
}
/**
 * 
 * @param {*} getter getting elements from the DOM
 * @param {*} arrayofElements database
 * @param {*} index points to the certain in the array
 */
function addDriversToDropdown(getter, arrayofElements, index) {
  const option = document.createElement('option');
  option.innerHTML = arrayofElements[index].name;
  option.value = arrayofElements[index].carNumber;
  getter.appendChild(option);
}
/**
 * Returns an object containing the values of the user input. The object is
 * structured as follows:
 *  - `carNumber` - holds the car number of the driver selected by the user.
 *    this is the `value` attribute of the selected `<option>`.
 *  - `lapTime` - holds the content of the lapTime input converted to a number
 * 
 * @returns an object containing the values of the user input
 */
function getUserInput() {
  return {
    // use `parseInt()` to convert a string into a number
    carNumber: parseInt(document.getElementById('driver').value),
    // use `parseFloat()` to convert a string into a number
    lapTime: parseFloat(document.getElementById('lapTime').value)
  };
}
