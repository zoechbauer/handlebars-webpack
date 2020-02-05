// class version does not work

// class HttpClass {
//   constructor() {
//     this.myTemplate = require('../../scripts/myTemplate.hbs');
//     this.ourRequest = new XMLHttpRequest();
//     this.getPetsData();
//   }

//   getPetsData() {
//     console.log('getPetsData started');
//     this.ourRequest.open(
//       'GET',
//       'https://learnwebcode.github.io/json-example/pets-data.json'
//     );
//     this.ourRequest.onload = function() {
//       if (this.ourRequest.status >= 200 && this.ourRequest.status < 400) {
//         var data = JSON.parse(this.ourRequest.responseText);
//         createHTML(data);
//       } else {
//         console.log('We connected to the server, but it returned an error.');
//       }
//     };

//     this.ourRequest.onerror = function() {
//       console.log('Connection error');
//     };

//     this.ourRequest.send();
//   }

//   createHTML(petsData) {
//     var petsContainer = document.getElementById('pets-container');
//     console.log('petsContainer', petsContainer);
//     petsContainer.innerHTML = this.myTemplate(petsData);
//   }
// }
