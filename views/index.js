var header = require('./partials/header')
var tweetContainer = require('./tweet-container.js')

function render (data) {
  return `
    ${header()}
  `
}

module.exports = render
