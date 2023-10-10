/**
 * Initializes the app when the page is fully loaded.
 * 
 * Instead placing the code outside of a function, this ensures that all expected
 * DOM elements are loaded and available. It is a good practice in Javascript, 
 * and might prevent some funky errors.
 */
function create(imagesrc, link, innertext){
  // Render the first item: Slave-I
  const shipList = document.getElementById('ships');
  const articleElement = document.createElement('article');
  articleElement.className = 'card m-2 p-2';
  // Media layout object
  const mediaDiv = document.createElement('div');
  mediaDiv.className = 'media';
  articleElement.appendChild(mediaDiv);
  // Media-left section
  const mediaLeftDiv = document.createElement('div');
  mediaLeftDiv.className = 'media-left';
  mediaDiv.appendChild(mediaLeftDiv);
  // The paragraph that contains the image inside the media-left
  const paragraphElement = document.createElement('p');
  paragraphElement.className = 'image is-64x64';
  mediaLeftDiv.appendChild(paragraphElement);
  // The image element itself
  const imageElement = document.createElement('img');
  imageElement.src = imagesrc;
  paragraphElement.appendChild(imageElement);
  // Media-content section
  const mediaContentDiv = document.createElement('div');
  mediaContentDiv.className = 'media-content';
  mediaDiv.appendChild(mediaContentDiv);
  // The div that holds the link
  const contentDiv = document.createElement('div');
  contentDiv.className = 'content';
  mediaContentDiv.appendChild(contentDiv);
  // The link to the fandom page
  const linkElement = document.createElement('a');
  linkElement.href = link;
  linkElement.innerHTML = innertext;
  contentDiv.appendChild(linkElement);
  // Append the Slave-I article to the list
  shipList.appendChild(articleElement);
}

 window.addEventListener('load', function() {
  create('assets/img/slave-i.jpg', 'https://starwars.fandom.com/nl/wiki/Millennium_Falcon'  , 'Slave-1');
  create('assets/img/millenium-falcon.jpg', 'https://starwars.fandom.com/nl/wiki/Millennium_Falcon', 'Millennium Falcon');
  create('assets/img/independence.jpg', 'https://starwars.fandom.com/nl/wiki/Independence', 'Independence');
  create('assets/img/executor.jpg', 'https://starwars.fandom.com/nl/wiki/Executor', 'Executor');
});


