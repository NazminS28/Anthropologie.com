const rp = require('request-promise');
const cherio = require("cheerio");
const cli_table= require('cli-table');
const axios = require('axios')
const express =require('express');
const app = express()
const url = `https://www.anthropologie.com/clothes`

axios(url).then(res=>{
    const html = res.data;
    const $ =cherio.load(html)
})
app.listen("8500",()=>{
 console.log('Server running on Port 8500')
})