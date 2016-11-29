function render (data) {
 return `
   <div id="tweet-container">
     ${renderTweets(data.tweets)}
   </div>
 `
}

function renderTweets (tweets) {
 var html = ''
 tweets.forEach((tweet) => {
   html += `
     <div class="tweet">
       <h1 class="tweet-text">${tweet.text}</h1>
       <h2 class="tweet-user">${tweet.user}</h2>
     </div>
   `
 })
 return html
}

module.exports = render
