let currentSong = {};


/**
 * Function to get a random song from the API
 */
let getSong = () => {
    fetch('https://kareoke.p.rapidapi.com/v1/song/random')
    .then(jsonData => jsonData.json())
    .then(data => updateCurrentSong(data))
}

/**
 * Update current song with title and uri
 * @param {Object} song 
 */
let updateCurrentSong = (song) => {
    currentSong.title = song.spotify.title
    currentSong.id = song.spotify.id
    addSongToIframe();
}

/**
 * Function to update HTML with song
 */
let addSongToIframe = () => {
    document.getElementById("spotify-player").src = `https://open.spotify.com/embed/track/${currentSong.id}`;
}


// Event Listener to get song on initial page load
window.addEventListener("load", () => {
    getSong();
});
