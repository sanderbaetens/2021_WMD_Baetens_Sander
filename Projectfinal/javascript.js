/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

let input = document.querySelector('#search');
let button = document.querySelector('#startsearch');
let apiOutput = document.querySelector('table tbody');
let localStorageOutput = document.getElementById('newplaylist');
let table = document.querySelector('table');
let jsondata;
let notfound;
let answerTrackname = document.getElementById('trackname');
let answerArtistname = document.getElementById('artistname');
let submitbutton = document.getElementById('submitbutton');
let playlistinput = document.getElementById('playlistinput');

let privateplaylistoutput = ``;

if (localStorage.playlist) {
  // console.log(JSON.parse(localStorage.playlist));
  privateplaylist = JSON.parse(localStorage.playlist);
  let counter = 0;
  privateplaylist.forEach((playlists) => {
    privateplaylistoutput += `
    <tr>
            <td>${playlists.trackName}</td>
            <td>${playlists.artistName}</td>
            <td class="album">${playlists.collectionName}</td>
            <td class="removeFromPlaylist"><i class="fa fa-minus removebutton" data-counter="${counter}"></i></td>
            </tr>
    `;
    counter++;
  });
  if (localStorageOutput) {
    localStorageOutput.innerHTML = privateplaylistoutput;
  }
} else {
  // document.getElementById('nolocalstorage').innerHTML = 'No playlist has been created.';
}

table.addEventListener('click', (e) => {
  let x = JSON.parse(localStorage.playlist);
  let song = x[e.target.getAttribute('data-counter')];
  if (!e.target.classList.contains('removebutton')) {
    return;
  }
  removeFromPlaylist(song);
  location.reload();
});

function removeFromPlaylist(song) {
  let playlist;
  if (localStorage.playlist) {
    playlist = JSON.parse(localStorage.playlist);
    playlist.pop(song);
    localStorage.playlist = JSON.stringify(playlist);
  } else {
    playlist=[];
    playlist.pop(song);
    localStorage.playlist = JSON.stringify(playlist);
  };
}

button.addEventListener('click', (e) => {
  apiItunes();
});

function apiItunes() {
  let url = 'https://itunes.apple.com/search?term=' + input.value;
  fetch(url)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        jsondata = json;
        let itunesapioutput = ``;
        notfound = input.value;
        if (jsondata.results.length === 0) {
          playlistinput.classList.add('onzichtbaar');
          apiOutput.innerHTML = itunesapioutput;
          document.getElementById('noresult').innerHTML = notfound +=' does not match anything in our database';
          return;
        }
        let teller = 0;
        json.results.forEach((result) => {
          itunesapioutput += `          
          <tr>
            <td>${result.trackName}</td>
            <td>${result.artistName}</td>
            <td class="album">${result.collectionName}</td>
            <td class="addToPlaylist"><i class="fa fa-plus addbutton" data-number="${teller}"></i></td>
            </tr>
          `;
          teller++;
        });
        apiOutput.innerHTML = itunesapioutput;
      })
      .catch((error) => {
        console.log(error);
        document.getElementById('errormessage').innerHTML = 'Please try another artist';
      });
};

table.addEventListener('click', (e) => {
  let song = jsondata.results[e.target.getAttribute('data-number')];
  if (!e.target.classList.contains('addbutton')) {
    return;
  }
  saveToLocalStorage(song);
});

function saveToLocalStorage(song) {
  let playlist;
  if (localStorage.playlist) {
    playlist = JSON.parse(localStorage.playlist);
    playlist.push(song);
    localStorage.playlist = JSON.stringify(playlist);
  } else {
    playlist=[];
    playlist.push(song);
    localStorage.playlist = JSON.stringify(playlist);
  };
}


