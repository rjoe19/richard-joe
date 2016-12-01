var header = require('./partials/header')
var tweetContainer = require('./tweet-container.js')

function render (data) {
  console.log(data.statuses)
  return `
    ${header()}
  `
}

module.exports = render
