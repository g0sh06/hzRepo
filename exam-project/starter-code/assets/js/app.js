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
  const getter = document.getElementById('laps');
  const getFastestLap = document.getElementById('fastest');
  const dropdown = document.getElementById('driver');
  let sum = 0;
  const arrayOfLaps = [];

  for (let i = 0; i < racedata.length; i++) {
    const row = document.createElement('tr');
    const tdnameDriver = document.createElement('td');
    const tdLapTime = document.createElement('td');
    addDriversToDropdown(dropdown, i, racedata);
    for (let j = 0; j < racedata[i].laps.length; j++) {
      sum += racedata[i].laps[j];
      arrayOfLaps.push({lap: racedata[i].laps[j], nameofDriver: racedata[i].name});
    }
    tdnameDriver.innerHTML = racedata[i].name;
    tdLapTime.innerHTML = format(sum);
    tdLapTime.className = 'time';
    row.appendChild(tdnameDriver);
    row.appendChild(tdLapTime);
    getter.appendChild(row);
    sum = 0;
  }
  
  console.log(arrayOfLaps);
  addFastestLap(getFastestLap, arrayOfLaps);
}

// REgister the `init` function on the load event (when the DOM is ready). 
window.addEventListener('load', init);
//TODO add other code here

function format(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  if (seconds < 10) {
    return `${minutes}:0${seconds.toFixed(2)}`;
  }
  return `${minutes}:${seconds.toFixed(2)}`;
}

function addDriversToDropdown(getElements, index, Array) {
  const options = document.createElement('option');
  options.innerHTML = Array[index].name;
  getElements.appendChild(options);
}

function addFastestLap(getValues, arrayofelements) {
  let smallestValue = 0;
  let nameDriver = '';
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  for(let i = 0; i < arrayofelements.length; i++){
    if(smallestValue < arrayofelements[i].lap){
      smallestValue = arrayofelements[i].lap;
      nameDriver = arrayofelements[i].nameofDriver;
    }
  }
  td1.innerHTML = nameDriver;
  td2.innerHTML = format(smallestValue);
  td2.className = 'time';
  getValues.appendChild(td1);
  getValues.appendChild(td2);

}

/**
 * ******************** NOTICE **************************
 * The methods below are provided for your convenience.
 * You're allowed to use them, but this is not mandatory.
 * ******************************************************
 */

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
