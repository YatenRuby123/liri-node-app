var action = process.argv[2];
var nodeArgs = process.argv;
var value = "";


for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        value = value + "+" + nodeArgs[i];
    } else {
        value = value + nodeArgs[i];
    }
}

switch (action) {
    case 'my-tweets':
        twitter();
        break;

    case 'spotify-this-song':
        spotify();
        break;

    case 'movie-this':
        imdb();
        break;

    case 'do-what-it-says':
        dwis();
        break;
}

function twitter() {

    var fs = require('fs');
    var twitterKey = require('./keys.js');
    var Twitter = require('twitter');
    var client = new Twitter(twitterKey.twitterKeys);

    var params = { screen_name: value, count: 20 };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log("=============================================");
            console.log("Here are the most recent tweets");
            for (var i = 0; i < tweets.length; i++) {
                console.log("_____________________________________________");
                console.log("Tweeted on: " + tweets[i].created_at);
                console.log(tweets[i].text);
            }
        }
    });
}


function spotify() {

    if (value != false) {
        var spotify = require('spotify');
        spotify.search({
            type: 'track',
            query: value + '&limit=1&'
        }, function(error, data) {
            if (error) {
                console.log('Error occurred: ' + error);
                return;
            }
            console.log("---------------------------------------------------");
            console.log(" ");
            console.log("The song you entered was " + value + ".");
            console.log(" ");
            console.log("Here is the infromation you requested!");
            console.log(" ");
            console.log("Track Title: " + data.tracks.items[0].name);
            console.log(" ");
            console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
            console.log(" ");
            console.log("Preview URL: " + data.tracks.items[0].preview_url);
            console.log(" ");
            console.log("---------------------------------------------------");
        });
    } else {
        {
            var spotify = require('spotify');
            spotify.search({
                type: 'track',
                query: 'ace+of+base+sign' + '&limit=1&'
            }, function(error, data) {
                if (error) {
                    console.log('Error occurred: ' + error);
                    return;
                }

                console.log("---------------------------------------------------");
                console.log(" ");
                console.log("Since you didnt enter a song here is the following: ");
                console.log(" ");
                console.log("Track Title: " + data.tracks.items[0].name);
                console.log(" ");
                console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
                console.log(" ");
                console.log("Preview URL: " + data.tracks.items[0].preview_url);
                console.log(" ");
                console.log("---------------------------------------------------");
            });
        }
    }
}

function imdb() {
    var request = require('request');
    request('http://www.omdbapi.com/?t=' + value + '&y=&plot=short&tomatoes=true&r=json', function(error, response, body) {

        if (value != false) {
            console.log("======================================================================");
            console.log("The movie's name is: " + JSON.parse(body).Title);
            console.log("");
            console.log("The movie was released in: " + JSON.parse(body).Year);
            console.log("");
            console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
            console.log("");
            console.log("This movie was produced in the: " + JSON.parse(body).Country);
            console.log("");
            console.log("The language for this movie is in: " + JSON.parse(body).Language);
            console.log("");
            console.log("The movie's Plot: " + JSON.parse(body).Plot);
            console.log("");
            console.log("The movie's Actor's: " + JSON.parse(body).Actors);
            console.log("");
            console.log("");
            console.log("The Rotten Tomato rating is: " + JSON.parse(body).tomatoRating);
            console.log("");
            console.log("The Rotten Tomato URL is: " + JSON.parse(body).tomatoURL);
            console.log("");
        } else {
            var request = require('request');
            request('http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&tomatoes=true&r=json', function(error, response, body) {
                console.log("======================================================================");
                console.log("The movie's name is: " + JSON.parseJson(body).Title);
                console.log("");
                console.log("The movie was released in: " + JSON.parse(body).Year);
                console.log("");
                console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
                console.log("");
                console.log("This movie was produced in the: " + JSON.parse(body).Country);
                console.log("");
                console.log("The language for this movie is in: " + JSON.parse(body).Language);
                console.log("");
                console.log("The movie's Plot: " + JSON.parse(body).Plot);
                console.log("");
                console.log("The movie's Actor's: " + JSON.parse(body).Actors);
                console.log("");
                console.log("The Rotten Tomato rating is: " + JSON.parse(body).tomatoRating);
                console.log("");
                console.log("The Rotten Tomato URL is: " + JSON.parse(body).tomatoURL);
                console.log("");
            });
        }
    });
}

function dwis() {
    var fs = require('fs');

    fs.readFile("random.txt", "utf8", function(error, data) {
        data = data.split(',');
        var command;
        var parameter;

        if (data.length == 2) {
            command = data[0];
            parameter = data[1];
        }
        parameter = parameter.replace('"', '');
        parameter = parameter.replace('"', '');
        switch (command) {
            case 'my-tweets':
                value = parameter;
                twitter();
                break;

            case 'spotify-this-song':
                value = parameter;
                spotify();
                break;
            case 'movie-this':
                value = parameter;
                imdb();
                break;
        }
    });
}