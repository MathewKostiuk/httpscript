const https = require('https');

function getAndPrintHtml(options) {


  let buffer;

  https.get(options, function (response) {
    response.setEncoding('utf-8');

    response.on('data', function (data) {
      buffer += data;
    });

    response.on('end', function () {
      console.log(buffer);
      console.log("Process Completed.")
    });
  });

  };


  const requestOptions = {
    host: 'sytantris.github.io',
    path : '/http-examples/step3.html'
};

getAndPrintHtml(requestOptions);