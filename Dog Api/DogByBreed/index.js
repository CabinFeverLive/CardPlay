'use strict';

function getDogImage() {
  const dogBreedInput = document.getElementById("dogBreed").value.toLowerCase();
  console.log(dogBreedInput)
  fetch(`https://dog.ceo/api/breed/${dogBreedInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status === 'error'){
        console.log('Dog breed is not found')
      }
      //  show error message
      else {
        displayResults(responseJson)
      }
      //  displayResults()
      // displayResults(responseJson))
    }) 
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}