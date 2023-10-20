/**
 * This is the dataset of quirky music videos that you are required to use in this 
 * exam. 
 * 
 * For more details, see the `dataset.js` file
 */
const database = quirkyVideoDatabaseObject;
/**
 * Window load event handler. Initializes the app when the page is fully loaded.
 * 
 * NOTE: Add all initialization code in this function
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
    gettingValues();

  });
});
//TODO add other code here
function printingElements(getter, index) {
  const article = document.createElement('article');
  article.className = 'card m-2 p-2';
  // Create the inner structure
  const mediaDiv = document.createElement('div');
  mediaDiv.className = 'media';
  const mediaLeftDiv = document.createElement('div');
  mediaLeftDiv.className = 'media-left';
  const imageElement = document.createElement('p');
  imageElement.className = 'image is-64x64';
  const img = document.createElement('img');
  img.src = `https://img.youtube.com/vi/${database.videos[index].videoId}/0.jpg`;
  imageElement.appendChild(img);
  mediaLeftDiv.appendChild(imageElement);
  const mediaContentDiv = document.createElement('div');
  mediaContentDiv.className = 'media-content';
  const contentDiv = document.createElement('div');
  contentDiv.className = 'content';
  const link = document.createElement('a');
  link.href = `https://youtu.be/${database.videos[index].videoId}`;
  const strong = document.createElement('strong');
  strong.textContent = `${database.videos[index].artist} - ${database.videos[index].title}`;
  link.appendChild(strong);
  contentDiv.appendChild(link);
  mediaContentDiv.appendChild(contentDiv);
  const mediaRightDiv = document.createElement('div');
  mediaRightDiv.className = 'media-right';
  const timeSpan = document.createElement('span');
  timeSpan.className = 'has-text-grey-light';
  timeSpan.textContent = '3:52';
  mediaRightDiv.appendChild(timeSpan);
  // Build the structure
  mediaDiv.appendChild(mediaLeftDiv);
  mediaDiv.appendChild(mediaContentDiv);
  mediaDiv.appendChild(mediaRightDiv);
  article.appendChild(mediaDiv);
  // Append the article to the container
  getter.appendChild(article);


  /**const div = document.createElement("div");
  const id = div.innerHTML = `${database.videos[index].videoId}, ${database.videos[index].duration}, ${database.videos[index].artist}, ${database.videos[index].title}.`;
  div.className = "column is-8 card m-2 p-2 media-right";
  getter.appendChild(div);*/
}
function gettingValues() {
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
  const hours = Math.floor(sum / 3600);
  const minutes = Math.floor((sum - (hours * 3600)) / 60);
  const seconds = sum - (hours * 3600) - (minutes * 60);
  document.getElementById("airtime").innerHTML = `${hours}:${minutes}:${seconds}`;
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
  const newElements = {
    videoId: id,
    duration: parseInt(videoDuration),
    artist: videoArtist,
    title: videoTitle
  };
  quirkyVideoDatabaseObject.videos.push(newElements);
  console.log(database);
}
// http://127.0.0.1:5500/week5/starter-code/