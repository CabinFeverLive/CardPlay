const apiKey = "5e2edc5a0e28d8ec2dcb845536af0d68";
const pvtApiKey = "d0f3055ba17fb13b0b0d473575e7c8d4ca22d949";

const searchCharUrl = `http://gateway.marvel.com/v1/public/`;

function getCharacter() {
  const ts = new Date().getTime();
  let hash = MD5(`${ts}${pvtApiKey}${apiKey}`);

  const charInput = encodeURI(
    document.getElementById("search-character").value
  );

  const BASE_URL = "https://gateway.marvel.com/v1/public/characters";

  let urlString = `${BASE_URL}?name=${charInput}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  //console.log("searching for", charInput);
  //console.log("fetch:", urlString);

  fetch(urlString)
    .then(response => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
 
      let template = "";
 
      // Examine the text in the response
      response.json().then(jsonData => {
        //console.log(jsonData.data.results);
        const charId = jsonData.data.results[0].id;
        //console.log(charId);

        if (jsonData.data.results.length < 1) {
          // No results display
          template += `<div><h2>${charInput} was not found!</h2></div>`;
        } else {
          for (let index = 0; index < jsonData.data.results.length; index++) {
            //add jsonData.data.results[0].name via html
            // http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg
            template += `<img class="bio Picture" src='${jsonData.data.results[index].thumbnail.path}/portrait_incredible.${jsonData.data.results[index].thumbnail.extension}'>`;
            template += `<div class ="character-content">
              <div class="character-name"><h1>${jsonData.data.results[index].name}</h1></div>
                <div class="bio Description"><h3>${jsonData.data.results[index].description}</h3></div>
                <div class="character-comics">
                  <h4>Comics:${jsonData.data.results[index].comics.available}</h4>
                  <h4>Series:${jsonData.data.results[index].series.available}</h4>
                  <h4>Events:${jsonData.data.results[index].events.available}</h4>
                  <h4>Stories:${jsonData.data.results[index].stories.available}</h4>
                </div>
              </div>`
          }
          // display results
        }

        fetch( 
          `${BASE_URL}/${charId}/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`
        )
          .then(res => res.json())
          .then(json => {
            let arr = json.data.results
            template += `<div class="wrappingDiv">`
            for (let index = 0; index < 9; index++) {
              // if(){}
              // else{}
              template += `
                <img  class='relatedComics' src='${arr[index].thumbnail.path}/portrait_medium.${arr[index].thumbnail.extension}'>`
                
            //console.log("comics", data)
              console.log(arr)
            }
            template += `</div>`;
                       $("#searchResults").html(template);
          });

        // $("#searchResults").html(template);

        // Example to get the character info...
        //console.log(jsonData.data.results[0].name);
        //console.log(jsonData.data.results[0].description);
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}

function watchForm() {
  $("#search").submit(event => {
    event.preventDefault();
    getCharacter();
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
