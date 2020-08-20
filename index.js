'use strict';

const { app } = require('./intents');

exports.handler = function(event, context, callback) {
  
  let data = event.body ? event.body : event;

  app.handler(data, {}).then((res) => {

      if (res.status != 200) {
          return callback(null, {"fulfillmentText": `I got status code: ${res.status}`});
      } else {
        return callback(null, res.body);
      }
  }).catch((e) => {
     return callback(null, {`There was an error ${e}`};
    });
  };
}
