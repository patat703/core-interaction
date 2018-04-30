//https://www.behance.net/v2/projects/?q=photography%20graphic&client_id=RbEgyxFDwBZlOmDvWqayuwejUt3fADvb

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://www.behance.net/v2/projects/?q=photography%20graphic&client_id=RbEgyxFDwBZlOmDvWqayuwejUt3fADvb', true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
   console.log(data)
  } else {
    console.log('error');
  }
}

request.send();
