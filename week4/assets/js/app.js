/**
 * Constant that defines the trophies for each level
 */
const trophies = ['🍓', '🌽', '🧱', '🐴', '🏆'];

/**
 * Constant that defines the monsters within this game
 */
const monsterImages = [
  'assets/img/horns_skull.png',
  'assets/img/fire_horns.png',
  'assets/img/green_blob.png',
  'assets/img/pink_monster.png',
  'assets/img/red_zombie.png'
];
/**
 * a Helper function that returns a random integer number between and 
 * including the lower and upper limits
 * 
 * @param {*} lower the lower limit of the possible result
 * @param {*} upper the upper limit of the possible result
 * @returns a random integer number between and including the lower and upper
 *   limits
 */
function randomIntBetween(lower, upper) {
  return Math.round(lower + (upper - lower) * Math.random());
}
function randomPosition(element) {
  element.position = "absolute";
  element.top = randomIntBetween(0, 100) + "px";
  element.left = randomIntBetween(0, 100) + "px";
}
/**
 * Initializes the app when the page is fully loaded.
 * 
 * Instead placing the code outside of a function, this ensures that all expected
 * DOM elements are loaded and available. It is a good practice in Javascript, 
 * and might prevent some funky errors.
 */
window.addEventListener('load', function () {
  const playfield = document.getElementById("playfield");
  let counter = 0;
  // TODO do something with that `playfield`
  for (let imageSrc of monsterImages) {
    const image = document.createElement("img");
    image.src = imageSrc;
    playfield.appendChild(image);
    image.addEventListener("click", () => {
      counter++;
      if (counter++) {
        scoreCounter(counter);
        randomPosition(image);
      }
    });
  }

});
function scoreCounter(counter) {
  const trophy = document.getElementById("trophies");
  switch (counter) {
    case 10:
      trophy.innerHTML = trophies[0];
      break;
    case 50:
      trophy.innerHTML = trophies[1];
    case 100:
      trophy.innerHTML = trophies[2];
      break;
    case 150:
      trophy.innerHTML = trophies[3];
      break
    case 250:
      trophy.innerHTML = trophies[4];
      break;
  }
}
// http://127.0.0.1:5500/week4/
