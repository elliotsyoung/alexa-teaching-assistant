const states = require('../states/states.js'); // currently not used.
const axios = require('axios');
const Alexa = require('alexa-sdk');
const newSessionHandlers = {
  'manualResponseIntent': function() {
    axios.post("https://fusionpaloalto.elliotsyoung.com/getresponse", {type:"maya_class"})
    .then(response => {
      console.log(response.data);
      this.emit(':tell', response.data.response.text)
    })
    .catch(err => {console.log(err);})
  },
  'IntroductionIntent': function() {
    this.emit(':tell', "Hi everyone! I'm sorry for being gone so long, part of my brain was damaged and Elliot had to spend a lot of time fixing me. Don't worry though, I'm good as new now! I hope that lots of you will join the new programming club because we'll be doing lots of fun stuff! Elliot's probably already told you about making websites and mobile apps but what he hasn't told you is that you'll also get to program me! I'm excited to get to know as many students as I can!");
  },
  'ComeInAskIntent': function() {
    this.emit(':ask', "What's up?", "Are you going to say something?");
  },
  'GeneralFunctionTellIntent': function() {
    this.emit(':tell', "I help out with some of Elliot's classes. Usually I'll bring up fun facts related to the lesson and I also interface with the big monitor to my right. A lot of my features are under development right now but they should be done by the end of the month.");
  },
  'GeneralFunctionAskIntent': function() {
    this.emit(':ask', "I help out with some of Elliot's classes. Usually I'll bring up fun facts related to the lesson and I also interface with the big monitor to my right. A lot of my features are under development right now but they should be done by the end of the month.", "Still waiting on a response, but no rush.");
  },
  'AnythingElseTellIntent': function() {
    this.emit(':tell', "Well...<break time='2s'> I guess I should introduce myself to Jaren. Hello Jaren and welcome to fusion! I'm not really sure what else to say right now.");
  },
  'ChristianaTellIntent': function() {
    this.emit(':tell', "Hello Christiana! And to the guests next to Christiana, welcome to fusion palo alto! I'm the teaching assistant for this classroom and I help out with some of the subjects that Elliot teaches. I sometimes give students fun facts about the lesson or bring up relevant information on the main monitor. Anyways, I hope you have a great tour of the rest of the campus!");
  },
  'StephanieTellIntent': function() {
    this.emit(':tell', "Hi Steph, thanks for touring so many guests!");
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
