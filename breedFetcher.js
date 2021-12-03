const request = require('request');
//const fs = require('fs');


const fetchBreedDescription = function(breedName, callback) {
  const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(apiURL, (error, response, body) => { //url = apiBreedNameSearchURL
    if (!error) {
      const data = JSON.parse(body); //converting info - string in object JSON.parse
      
      if (data.length === 0) { // breed is not found - does not provide info to body
        callback('Breed is not found.', null);
      } else {
        callback(null, data[0].description);
      }
    
    } else {
      callback(error.code, null);
    }
  });
};


module.exports = { fetchBreedDescription };