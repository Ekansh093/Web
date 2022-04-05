
require("dotenv").config();

const https = require("https");
const http = require("http");
const querystring = require("querystring");

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;
const url = hostname + ":" + port

module.exports = {
  https,
  http,
  url,
  querystring
};
