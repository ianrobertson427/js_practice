
var moment = require('moment');
// var moment = require('math');


console.log('hello from js');


const months = ["January", "February", "March", "April", "May", "June", "July"];



const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);

console.log(moment().format('dddd'));

console.log(moment("19941031", "YYYYMMDD").fromNow());

// console.log(round(e, 3);


