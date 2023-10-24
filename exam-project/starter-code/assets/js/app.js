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
function init() {
  //TODO initialize the application here
  const getElementsFromLaps = document.getElementById('laps');
  let sum = 0;
  const getFastestLap = document.getElementById('fastest');
  const dropdown = document.getElementById('driver');
  console.log(racedata);
  for (let i = 0; i < racedata.length; i++) {
    addingElementsToList(getElementsFromLaps, sum, racedata, i);
    //console.log(racedata[i].name);
    addDriversToDropdown(dropdown, racedata, i);
  }
  addFastestLap(getFastestLap, racedata);
}
// REgister the `init` function on the load event (when the DOM is ready). 
window.addEventListener('load', init);

const button = document.getElementById('submit');
function pressedButton() {
  const driverNumber = document.getElementById('driver').value;
  const driverTime = parseFloat(document.getElementById('lapTime').value);
  //console.log(driverTime);
  if (driverTime < 60) {
    window.alert("Please enter bigger number");
  }
  // pushing value of the lap to a certain object in the array(index starts from 0)
  racedata[driverNumber-1].laps.push(driverTime);
}
button.addEventListener('click', pressedButton);
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
function addFastestLap(getter, arrayofElements) {
  let smallestValue = 0;
  let driver = '';
  const fastestDriver = document.createElement('td');
  const fastestTime = document.createElement('td');
  for (let i = 0; i < arrayofElements.length; i++) {
    for (let j = 0; j < arrayofElements[i].laps.length; j++) {
      if (smallestValue < arrayofElements[i].laps[j]) {
        smallestValue = arrayofElements[i].laps[j];
        driver = arrayofElements[i].name;
      }
    }
  }
  //console.log(driver);
  fastestDriver.innerHTML = driver;
  fastestTime.innerHTML = format(smallestValue);
  fastestTime.className = 'time';
  getter.appendChild(fastestDriver);
  getter.appendChild(fastestTime);
}
/**
 * ******************** NOTICE **************************
 * The methods below are provided for your convenience.
 * You're allowed to use them, but this is not mandatory.
 * ******************************************************
 */
// FUNCTION, WHICH ARE NOT THAT IMPORTANT TO THE FUNCTIONALITY OF THE CODE
function format(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  if (seconds < 10) {
    return `${minutes}:0${seconds.toFixed(3)}`;
  }
  return `${minutes}:${seconds.toFixed(3)}`;
}
function addDriversToDropdown(getter, arrayofElements, index) {
  const option = document.createElement('option');
  option.innerHTML = arrayofElements[index].name;
  option.value = arrayofElements[index].carNumber;
  //console.log(option.value);
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
