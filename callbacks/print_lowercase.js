const getHTML = require('./http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase(html) {
  const transform = html.toLowerCase();
  //const upper = transform.toUpperCase();
  console.log(transform);
}



getHTML(requestOptions, printLowerCase);