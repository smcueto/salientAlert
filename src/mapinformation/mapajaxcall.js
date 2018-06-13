// const ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'https://api.mapbox.com/geocoding/v5/mapbox.places/24 Athens street, San Francisco.json?country=us&access_token=pk.eyJ1Ijoic21jdWV0byIsImEiOiJjamhsN3NqbXYzNjc3MzZwM3N2MDR1N3F4In0.zKRL_YpIG8DNww-MzDBnuA');
// ourRequest.onload = function () {
//   console.log(ourRequest.responseText);
// };

// ourRequest.send();


// after the user clicks submit on the form
function onSubmit (formData) {
    var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + formData.address + ', ' + formData.city + '.json'....etc
    myHttpRequest(url, 'GET')
    .then(function (res) {
     //create marker here using coordinates from res
    });
  }

  function getURL(address, city, token) {
    return 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + ', ' + city + '.json?country=us&access_token=' + token;
 }
 
 // define address, city and token earlier in the program
 
 const xhr = new XMLHttpRequest();
 xhr.open('GET', getURL(address, city, token));