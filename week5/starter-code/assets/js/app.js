/**
 * This is the entire list of quirky music videos. It calls `buildInitialPlaylist()`
 * to initialize its video list to keep the top section readable.
 * 
 * WARNING: do not change or delete this code
 */
const database = {
  title: '80s Extravaganza database',
  videos: buildInitialPlaylist(),
  author: 'BugSlayer'
};

/**
 * Initializes the app when the page is fully loaded.
 * 
 * Instead placing the code outside of a function, this ensures that all expected
 * DOM elements are loaded and available. It is a good practice in Javascript, 
 * and might prevent some funky errors.
 */
window.addEventListener('load', function () {
  // TODO Add awesome code here
  const input = document.getElementById("add-button");
  const sumOfPlaytime = 0;
  const gettingElementsFromPlaylist = document.getElementById("playlist");
  for (let i = 0; i < database.videos.length; i++) {
    printingElements(gettingElementsFromPlaylist, i);
  }
  sumOfDuration(sumOfPlaytime);
  input.addEventListener("click", () => {
    gettingValues(sumOfPlaytime);
  });
});

function printingElements(getter, index) {
  const div = document.createElement("div");
  const id = div.innerHTML = `${database.videos[index].videoId}, ${database.videos[index].duration}, ${database.videos[index].artist}, ${database.videos[index].title}.`;
  div.className = "column is-8 card m-2 p-2 media-right";
  getter.appendChild(div);
}

// TODO Add other awesome code here
function gettingValues(sum) {
  const id = document.getElementById("video-id").value;
  const videoArtist = document.getElementById("artist").value;
  const videoTitle = document.getElementById("title").value;
  const videoDuration = document.getElementById("duration").value;
  console.log(`${id}, ${videoArtist}, ${videoTitle}, ${videoDuration}`);
  addToPlayDatabase(id, videoDuration, videoArtist, videoTitle);
}

function sumOfDuration(sum) {
  for (let i = 0; i < database.videos.length; i++) {
    sum += database.videos[i].duration;
  }
  const totalMinutes = Math.floor(sum / 60);

  
  document.getElementById("airtime").innerHTML = `${hours}:${minutes}`;
}
/**
 * 
 * @param {*} id getting values of id
 * @param {*} videoDuration getting values of duration
 * @param {*} videoArtist getting values of artist name
 * @param {*} videoTitle getting values of title of the song
 * and then pushing them to the playlist(=buildInitialPlaylist())
 */
function addToPlayDatabase(id, videoDuration, videoArtist, videoTitle) {
  let playlist = buildInitialPlaylist();
  const newElements = {
    videoId: id,
    duration: parseInt(videoDuration),
    artist: videoArtist,
    title: videoTitle
  };
  playlist.push(newElements);
  console.log(playlist);
}
/**
 * Helper function that generates an array of quirky 80s videos. It is used to 
 * create the database 
 * 
 * WARNING - DO NOT REMOVE OR CHANGE this function in any way! It is used in 
 *           more ways than you can think of
 * 
 * @returns an Array that contains data about some quirky 80s videos 
 */
function buildInitialPlaylist() {
  return [
    { videoId: 'UMPC8QJF6sI', duration: 224, artist: 'Visage', title: 'Fade to Grey' },
    { videoId: 'aGSKrC7dGcY', duration: 280, artist: 'Depeche Mode', title: 'Enjoy the Silence' },
    { videoId: 'RZ2oXzrnti4', duration: 223, artist: 'The Specials', title: 'Ghost Town' },
    { videoId: 'xJeWySiuq1I', duration: 297, artist: 'Ultravox', title: 'Vienna' },
    { videoId: 'ijxk-fgcg7c', duration: 634, artist: 'The Cure', title: 'Lullaby' },
    { videoId: 'd5XJ2GiR6Bo', duration: 204, artist: 'Orchestral Manouvres in the Dark', title: 'Enola Gay' },
    { videoId: 'W8r-tXRLazs', duration: 201, artist: 'The Buggles', title: 'Video Killed The Radio Star' },
    { videoId: 'zuuObGsB0No', duration: 210, artist: 'Joy Division', title: 'Love Will Tear Us Apart' },
    { videoId: 'XZVpR3Pk-r8', duration: 180, artist: 'Soft Cell', title: 'Tainted Love' },
    { videoId: 'Y4QbJRAWvRU', duration: 222, artist: 'Yellow', title: 'The Race' },
    { videoId: 'ZhIsAZO5gl0', duration: 238, artist: 'Kiss', title: 'I Was Made For Lovin\' You' },
    { videoId: 'qeMFqkcPYcg', duration: 214, artist: 'Eurithmics', title: 'Sweet Dreams (Are Made Of This)' },
    { videoId: 'Urw-iutHw5E', duration: 360, artist: 'Falco', title: 'Jeanny' },
    { videoId: 'GEnx9xS79Lc', duration: 219, artist: 'Kraftwerk', title: 'The Model' },
    { videoId: 'ZCb6sHeC7ac', duration: 221, artist: 'The Clash', title: 'Rock the Casbah' },
    { videoId: 'LQiOA7euaYA', duration: 247, artist: 'Talking Heads', title: 'Road to Nowhere' },
    { videoId: 'sTsVJ1PsnMs', duration: 219, artist: 'Righeira', title: 'Vamos a la playa' },
    { videoId: 'OJWJE0x7T4Q', duration: 345, artist: 'Peter Gabriel', title: 'Sledgehammer' },
    { videoId: 'Yem_iEHiyJ0', duration: 250, artist: 'Frankie Goes To Hollywood', title: 'Relax' },
    { videoId: 'M43wsiNBwmo', duration: 253, artist: 'Duran Duran', title: 'The Wild Boys' },
    { videoId: '8Mp1t-26bKk', duration: 270, artist: 'Grace Jones', title: 'Slave To The Rhythm' },
    { videoId: 'XfR9iY5y94s', duration: 221, artist: 'Men at Work', title: 'Down Under' },
    { videoId: 'pHCdS7O248g', duration: 295, artist: 'Blondie', title: 'Rapture' },
    { videoId: 'NZnryZ5rDbs', duration: 206, artist: 'David Bowie', title: 'Blue Jean' },
    { videoId: '9GMjH1nR0ds', duration: 248, artist: 'New Order', title: 'Blue Monday' },
    { videoId: 'vmwMhjbThKg', duration: 241, artist: 'Orchestral Manouvres in the Dark', title: 'Maid Of Orleans' },
    { videoId: 'ZCOSPtyZAPA', duration: 260, artist: 'The Cult', title: 'She Sells Sanctuary' },
    { videoId: 'H9tEvfIsDyo', duration: 236, artist: 'Prince and The Revolution', title: 'Kiss' },
    { videoId: 'lLLL1KxpYMA', duration: 210, artist: 'Madness', title: 'Night Boat to Cairo' },
    { videoId: '4F9DxYhqmKw', duration: 257, artist: 'Enigma', title: 'Sadeness - Part I' },
    { videoId: 'c_Bv8UkzW7g', duration: 265, artist: 'Alice Cooper', title: 'How You Gonna See Me Now' },
    { videoId: 'pllRW9wETzw', duration: 416, artist: 'Kate Bush', title: 'Cloudbusting' }
  ];
}
// http://127.0.0.1:5500/week5/starter-code/