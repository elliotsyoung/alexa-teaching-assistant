const states = require('../states/states.js'); // currently not used.
const axios = require('axios');
const Alexa = require('alexa-sdk');
const newSessionHandlers = {
  'manualResponseIntent': function() {
    axios.post("http://fusionpaloalto.elliotsyoung.com/getresponse", {type:"custom_response"})
    .then(response => {
      console.log(response.data);
      this.emit(':tell', response.data.response.text)
    })
    .catch(err => {console.log(err);})
  },
  'IntroductionIntent': function() {
    this.emit(':tell', "Hi everyone! I'm sorry for being gone so long, part of my brain was damaged and Elliot had to spend a lot of time fixing me. Don't worry though, I'm good as new now! I hope that lots of you will join the new programming club because we'll be doing lots of fun stuff! Elliot's probably already told you about making websites and mobile apps but what he hasn't told you is that you'll also get to program me! I'm excited to get to know as many students as I can!");
  },
  "AMAZON.StopIntent": function() {
    this.response.speak("Goodbye!");
    this.emit(':responseReady');
  },
  "AMAZON.CancelIntent": function() {
    this.response.speak("Goodbye!");
    this.emit(':responseReady');
  },
  'SessionEndedRequest': function () {
    console.log('session ended!');
    //this.attributes['endedSessionCount'] += 1;
    this.response.speak("Goodbye!");
    this.emit(':responseReady');
  }
};
module.exports =  newSessionHandlers;
