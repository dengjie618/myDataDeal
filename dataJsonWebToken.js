var jwt = require('jsonwebtoken');
var mytoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvdWlkIjoieXl6MDYxMjI0b3VpZCIsInNlc3Npb25JZCI6IjJmNDdjMDM1LWM4ZjctNGVhOC1hNmM3LTY2NjQ2ZTFhOTkxYiIsImlhdCI6MTYzOTcxMDE1NSwiZXhwIjoxNjQwMzE0OTU1fQ.cv4aA_BJ2_oHG9vGd_BwOrSYH9GBjFAj_vtNtNnsREw';
var decode = jwt.verify(mytoken,'this is a secret of lego jwt', { algorithms: ['HS256']} );
console.log(decode);