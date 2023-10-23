/**
 * This is a function that mimics the fetching of the racedata from some remote
 * server or so. It generates 2-5 objects
 * 
 * WARNING: do not change or delete this code
 */
function fetchFormula1Data() {
  //generating random number of drivers and laps
  const numDrivers = 2 + Math.floor(Math.random() * 3);
  const numLaps = 3 + Math.floor(Math.random() * 7);
  const drivers = [
    'M. Verstappen', 'L. Hamilton', 'V. Bottas', 'C. Leclerc', 'D. Ricciardo',
    'S. Perez', 'L. Norris', 'S. Vettel', 'F. Alonso', 'E. Ocon',
  ];
  // check if the number of drivers is bigger than the array
  if (numDrivers > drivers.length) {
    console.error('Not enough unique driver names available.');
    return [];
  }

  const uniqueDriverNames = new Set();
  const formula1Data = [];

  while (formula1Data.length < numDrivers) {
    // taking random driver from the array
    const randomIndex = Math.floor(Math.random() * drivers.length);
    const name = drivers[randomIndex];
    // check if the name is already in the uniqe Set
    if (!uniqueDriverNames.has(name)) {
      uniqueDriverNames.add(name);
      const carNumber = formula1Data.length + 1;
      const laps = [];

      for (let i = 0; i < numLaps; i++) {
        // Generate random lap time between 70 and 80 seconds
        const lapTime = (Math.random() * 10 + 70).toFixed(3); 
        laps.push(parseFloat(lapTime));
      }

      formula1Data.push({ carNumber, name, laps });
    }
  }

  return formula1Data;
}
