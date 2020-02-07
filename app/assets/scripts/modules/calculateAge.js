module.exports = function(birthYear) {
  let age = new Date().getFullYear() - birthYear;

  if (age > 0) {
    return age + ' years old';
  } else {
    return 'Less than a year old';
  }
};
