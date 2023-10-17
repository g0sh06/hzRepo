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
/** @param {*} randomPosition generating random position for the monsters */
function randomPosition(element) {
  element.style.position = "absolute";
  element.style.top = randomIntBetween(0, 700) + "px";
  element.style.left = randomIntBetween(0, 1500) + "px";
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
  const score = 0;
  processingMonsters(playfield, score);
});

/** @param {processingMonsters} - creating img in DOM and then appending a monster to it.*/
function processingMonsters(parent, counter) {
  for (const imageSrc of monsterImages) {
    const image = document.createElement("img");
    image.src = imageSrc;
    image.className = "playfield_item";
    randomPosition(image);
    parent.appendChild(image);
    image.addEventListener("click", () => {
      counter++;
      scoreCounter(counter);
      randomPosition(image);
    });
  }
}

/** @param {*} scoreCounter function for checking the score of the player */
function scoreCounter(counter) {
  const trophyList = document.getElementById("trophies");
  const trophy = document.createElement("span");
  switch (counter) {
  case 10:
    trophy.innerHTML = trophies[0];
    trophyList.appendChild(trophy);
    break;
  case 50:
    trophy.innerHTML = trophies[1];
    trophyList.appendChild(trophy);
    break;
  case 100:
    trophy.innerHTML = trophies[2];
    trophyList.appendChild(trophy);
    break;
  case 150:
    trophy.innerHTML = trophies[3];
    trophyList.appendChild(trophy);
    break;
  case 250:
    trophy.innerHTML = trophies[4];
    trophyList.appendChild(trophy);
    break;
  }
}
// http://127.0.0.1:5500/week4/
