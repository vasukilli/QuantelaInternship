const url = require("url");
const addr = "http://localhost:8080/default.htm?year=2017&month=february";
const q = url.parse(addr,true); //parsing the address
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
const data = q.query;
console.log(data);
console.log(data.year + " " + data.month);
