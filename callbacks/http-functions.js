module.exports = function getHTML(options, callback) {

const https = require('https');

  let buffer;

  https.get(options, function (response) {
    response.setEncoding('utf-8');

    response.on('data', function (data) {
      buffer += data;
    });

    response.on('end', function () {
      callback(buffer);
    });
  });

  };