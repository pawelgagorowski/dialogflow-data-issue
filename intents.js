'use strict';

require('dotenv').config({path: __dirname + '/../.env'});

const AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-central-1' });
const docClient = new AWS.DynamoDB.DocumentClient();

const { dialogflow, Suggestions } = require('actions-on-google');

const app = dialogflow();

app.intent('Default Welcome Intent', (conv) => {
  conv.data.sayyes = true;
  conv.ask("just click the suggestion");
  conv.ask(new Suggestions(['checking context']));
});


app.intent('checking context intent', async (conv) => {
  let text;
  if(conv.data.sayyes) {
    text = "yes"
    conv.ask(text)
  } else {
    text = "no"
    conv.ask(text)
  }
});


module.exports = {
  app
}
