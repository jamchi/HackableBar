const functions = require('firebase-functions');
const {
  Octokit
} = require("@octokit/rest");

var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/database");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
const owner = "publika";
const repo = "HackableBar";

exports.merge = functions.https.onRequest((request, response) => {
  const octokit = new Octokit({
    auth: "686e2d7286d858472ddf78f5447ad225f39b66c1"
  });

  var firebaseConfig = {
    apiKey: "AIzaSyCxP1bT4Y20hdnnh9lj8UsoCnmWv5d10IY",
    authDomain: "publika-bar.firebaseapp.com",
    databaseURL: "https://publika-bar.firebaseio.com",
    projectId: "publika-bar",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.database().ref('/target_pull_number').once('value').then(function (snapshot) {
    var pull_number = snapshot.val();

    octokit.pulls.merge({
      owner,
      repo,
      pull_number: pull_number,
    }).then((result) => {
      response.send('Merged!!!');
    }).catch((error) => {
      response.send('Error: ' + error.status);
    });
  });
});
