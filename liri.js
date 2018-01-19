require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


const dotEnv = require("dotenv").config();
var keyFile = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keyFile.spotify);
var Twitter = require('twitter');
var client = new Twitter(keyFile.twitter);
var userInput = process.argv[2];


var request = require("request");
var nodeArgs = process.argv;