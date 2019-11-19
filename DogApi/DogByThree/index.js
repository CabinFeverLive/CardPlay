'use strict';

function getDogImage() {
  const dogValue = document.getElementById("dogNumber").value
  console.log(dogValue)

  const url = `https://dog.ceo/api/breeds/image/random/${dogValue}`;
  fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
    
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  let html = "";
  for (let i = 0; i < responseJson.message.length; i++ ){
      html += `<img src="${responseJson.message[i]}" class="results-dog">`
    }
  $('.results-img').html(html)
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});