const https = require('https');

function getAndPrintHtml() {

  const requestOptions = {
    host: 'sytantris.github.io',
    path : '/http-examples/step2.html'
  };

  let buffer;

  https.get(requestOptions, function (response) {
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

getAndPrintHtml();