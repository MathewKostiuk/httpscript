const getHTML = require('./http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


function printUppercase(html) {
  const transform = html.toUpperCase();
  //const upper = transform.toUpperCase();
  console.log(transform);
}

getHTML(requestOptions, printUppercase);