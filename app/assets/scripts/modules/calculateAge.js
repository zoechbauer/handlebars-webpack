module.exports = function(birthYear) {
  let age = new Date().getFullYear() - birthYear;

  if (age > 0) {
    return age + ' years old';
  } else {
    return 'Less than a year old';
  }
};

// class version does not work
//
// class CalculateAge {
//   constructor(birthYear) {
//     this.calcAge(birthYear);
//   }

//   calcAge(birthYear) {
//     let age = new Date().getFullYear() - this.birthYear;

//     if (age > 0) {
//       return age + ' years old';
//     } else {
//       return 'Less than a year old';
//     }
//   }
// }

// export default CalculateAge;
