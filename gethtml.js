const https = require('https');

function getHTML(options, callback) {


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



function printHTML(html) {
  console.log(html);
}


  const requestOptions = {
    host: 'sytantris.github.io',
    path : '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
