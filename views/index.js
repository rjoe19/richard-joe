var header = require('./partials/header')
var tweetContainer = require('./tweet-container.js')

function render (data) {
  console.log('THIS IS THE DATA', data)
  return `
    ${header()}
  `
}

module.exports = render
