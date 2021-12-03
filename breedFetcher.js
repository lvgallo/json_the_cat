const request = require('request');
const fs = require('fs');

const breedName = process.argv[2];
const apiURL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const apiBreedNameSearchURL = apiURL + breedName;
// breedName as argument
// print short description of breed


const breedSearch = function(breedName, apiBreedNameSearchURL) {
  request(apiBreedNameSearchURL, (error, response, body) => { //url = apiBreedNameSearchURL
    if (error) {
      console.log(`REQUEST FAILED: ${error.code}`);
      return;
    }
    const data = JSON.parse(body); //converting info - string in object JSON.parse
  
    if (data.length === 0) { // breed is not found - does not provide info to body
      error = ('Breed is not found.');
      console.log(error);
      return;
    } else {
      console.log(data[0].description);
      return;
    }
  });
};

breedSearch(breedName,apiBreedNameSearchURL);

