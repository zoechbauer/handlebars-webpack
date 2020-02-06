import '../styles/styles.css';

// class version does not work!!!

// import Http from './modules/HttpClass';
// import CalculateAge from './modules/calculateAge';
// new Http();
// new CalculateAge();

// used for webpack-dev-server
if (module.hot) {
  module.hot.accept();
}

var myTemplate = require('./myTemplate.hbs');

fetch('https://learnwebcode.github.io/json-example/pets-data.json', {
  method: 'GET',
  headers: {}
})
  .then(resp => resp.json())
  .then(data => createHTML(data))
  .catch(err => {
    console.log('We connected to the server, but it returned an error.');
    console.log(err);
  });

function createHTML(petsData) {
  var petsContainer = document.getElementById('pets-container');
  console.log('petsContainer', petsContainer);
  petsContainer.innerHTML = myTemplate(petsData);
}

// // original version
// var ourRequest = new XMLHttpRequest();
// ourRequest.open(
//   'GET',
//   'https://learnwebcode.github.io/json-example/pets-data.json'
// );
// ourRequest.onload = function() {
//   if (ourRequest.status >= 200 && ourRequest.status < 400) {
//     var data = JSON.parse(ourRequest.responseText);
//     createHTML(data);
//   } else {
//     console.log('We connected to the server, but it returned an error.');
//   }
// };

// ourRequest.onerror = function() {
//   console.log('Connection error');
// };

// ourRequest.send();
