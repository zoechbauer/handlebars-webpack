import '../styles/styles.css';

// class version does not work!!!

// import Http from './modules/HttpClass';
// import CalculateAge from './modules/calculateAge';
// new Http();
// new CalculateAge();

var myTemplate = require('./myTemplate.hbs');

var ourRequest = new XMLHttpRequest();
ourRequest.open(
  'GET',
  'https://learnwebcode.github.io/json-example/pets-data.json'
);
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log('We connected to the server, but it returned an error.');
  }
};

ourRequest.onerror = function() {
  console.log('Connection error');
};

ourRequest.send();

function createHTML(petsData) {
  var petsContainer = document.getElementById('pets-container');
  console.log('petsContainer', petsContainer);
  petsContainer.innerHTML = myTemplate(petsData);
}