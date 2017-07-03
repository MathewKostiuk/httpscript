const https = require('https');


function getAndPrintHTMLChunks () {

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

https.get(requestOptions, function (response) {

  response.setEncoding('utf-8');

  response.on('data', function(data) {
    console.log(data + '\n');
  });

  response.on('end', function() {
    console.log("Process Completed.")
  });

});
};

getAndPrintHTMLChunks();