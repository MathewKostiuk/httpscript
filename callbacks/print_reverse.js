const getHTML = require('./http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


function printReverse(html) {
  const transform = html.split('').reverse().join('');
  console.log(transform);
}

getHTML(requestOptions, printReverse);