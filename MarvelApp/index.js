const apiKey = '5e2edc5a0e28d8ec2dcb845536af0d68';
const pvtApiKey = 'd0f3055ba17fb13b0b0d473575e7c8d4ca22d949';

const searchCharUrl = `http://gateway.marvel.com/v1/public/`;


function getCharacter(){
    const ts = new Date().getTime
    const charInput = document.getElementById("search-character").value;
    console.log(charInput);

    let hash = (MD5(`${ts}${pvtApiKey}${apiKey}`))
    
    //fetch and url + apiKey call goes within here
    //getCharacter can then be a call back in display character, also comics in which character is featured in.

    //https://gateway.marvel.com:443/v1/public/characters?name=ironmy=

    // let urlString = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&name=${charInput}&apikey=${apiKey}&hash=${pvtApiKey}`

    let urlString = `http://gateway.marvel.com/v1/public/characters?name=${charInput}&ts=${ts}&apikey=${apiKey}&hash=${hash}`

    console.log('fetching...', urlString)

    fetch(urlString)
     .then(response => response.json())
     .then(stuff => {
       console.log(stuff)
     })
}


function watchForm() {
  $('#search').submit(event => {
    event.preventDefault();
    getCharacter();
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});