var router = require('express').Router()
var Twitter = require('twitter');
var dotenv = require('dotenv');

//load environmental variables:
dotenv.load();
// console.log(process.env.TWITTER_API_KEY)
// console.log(process.env.TWITTER_API_SECRET)
// console.log(process.env.TWITTER_ACCESS_TOKEN)
// console.log(process.env.TWITTER_TOKEN_SECRET)
// successfully logs all keys/secrets/tokens from .env file for testing purposes

router.get('/', (req, res) => {
  // setup twitter API client call:
  var twitterClient = new Twitter({
        consumer_key: process.env.TWITTER_API_KEY,
        consumer_secret: process.env.TWITTER_API_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.TWITTER_TOKEN_SECRET
      })

  twitterClient.get('search/tweets', {q:'%23wod', lang: 'en'}, function(error, tweets, response) {
    if (error) {
      console.log('ERROR RETRIEVING TWEETS', error);
    }
    else  {
    //  console.log('THIS IS THE RESPONSE', response)
    //  console.log('THESE ARE THE TWEETS', tweets)
     res.render('index', tweets)
    }
  });
})

module.exports = router
