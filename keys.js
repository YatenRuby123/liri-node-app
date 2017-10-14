console.log('this is loaded');

var twitterKeys = {
    consumer_key: 'MsjNVjHbCiNcH9iIdUsusu8v5',
    consumer_secret: 'vEDoyIuIdTvCzZLbD8Ydy3ws2n30kIboCy53oozBf4hmhRRXeQ',
    access_token_key: '917262316294438912 - aFIVnQsGSGgkvkITV26Fm8HVEhhroe4',
    access_token_secret: 'j9hzgpBplgNuO1RPngpQeWyK316126FuCgiITRjghJ9b0',
}

module.exports = twitterKeys;

// var  Twitter  =  require('twitter'); 
// var  client  =  new  Twitter({  
//     consumer_key:  process.env.TWITTER_CONSUMER_KEY,
//       consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//       access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//       access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// }); 
// var  params  =   { screen_name:   'nodejs' };
// client.get('statuses/user_timeline',  params,  function(error,  tweets,  response)  {  
//     if  (!error)  {     console.log(tweets);   }
// });