const express = require('express')
const app = express()
const port = 5000;

app.get('/',getuser);
module.exports = {getuser}