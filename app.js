require('./config/config');
var cron = require('node-cron');

const cronJob = require('./crons/index');

console.log("server has started")
cronJob()
cron.schedule ('* * */2 * *', ()=>cronJob());