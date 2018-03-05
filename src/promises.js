'use strict';

function log(item){
  console.log(item);
}

function error(item) {
  console.error(item);
}

const movieList = document.getElementById('movies');

function addMovieToList(movie) {
  const item = document.createElement('img');
  item.src = movie.Poster;
  movieList.appendChild(item);
}

function getData(url) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.onload = function() {
      if(xhr.status === 200) {
        const json = JSON.parse(xhr.response);
        resolve(json.Search); 
      } else {
        reject(xhr.statusText);
      }
    }

    xhr.onerror = function(err) {
      reject(err);
    }

    xhr.send();
  }) 
}

const batman = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=49d6b4d8&s=batman`);
const superman = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=49d6b4d8&s=superman`);

// batman.then((movies) => movies.forEach((movie) => addMovieToList(movie)))
//   .catch(error)

// superman.then((movies) => movies.forEach((movie) => addMovieToList(movie)))
//   .catch(error)

Promise.race([batman, superman]).then((movies) => movies.forEach((movie) => addMovieToList(movie))).catch(error)