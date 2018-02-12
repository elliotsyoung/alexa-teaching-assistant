const Alexa = require('alexa-sdk');
const newSessionHandlers = require('./handlers/newSessionHandlers.js')
exports.handler = (event, context, callback) => {
  const alexa = Alexa.handler(event, context, callback);
  alexa.registerHandlers(newSessionHandlers);
  alexa.execute();
};
