const UHR = require('uhr');
const timer = require('./timer.js');

let t = timer('UHR');
for (let i = 1; i < 200; i++) {
  UHR(1,5,30,1)
}
t.stop();
