const moment = require('moment-timezone');
const timer = require('./timer.js');

let t = timer('TZ');
  for (let i = 1; i < 200; i++) {
    let newYork = moment.tz("2014-06-01 12:00", "America/New_York");
    newYork.format('ha z')
  }
t.stop();
