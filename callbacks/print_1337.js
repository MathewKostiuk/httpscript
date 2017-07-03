const getHTML = require('./http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};


function print1337(html) {
    const replacers = {
      'a': '4',
      'e': '3',
      'l': '1',
      'o': '0',
      's': '5',
      't': '7',
      'ck': 'x',
      'er': '0r',
      'you': 'j00'
    };
  const leet = html.replace(/a|e|l|o|s|t|ck|er|you/g, function(match) {
    return replacers[match];


  });
  console.log(leet);
}

getHTML(requestOptions, print1337);
