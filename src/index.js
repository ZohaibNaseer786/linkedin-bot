
var scraper = require('./scraper');

module.exports=()=>{
  email = process.env.EMAIL;
  password = process.env.PASSWORD;
  keyword = process.env.KEYWORD;
  scraper.start(email, password,keyword);
}

