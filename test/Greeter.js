var config = require('./config.json')
module.exports = function(){
  var greet = document.createElement('div')
  greet.classList += 'test'
  greet.textContent = config.greetText
  return greet
}