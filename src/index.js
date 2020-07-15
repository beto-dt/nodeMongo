const connection = require('./model');
const express  = require('express');
const app = express();
const path = require('path');
const expressHandlebars = require('express-handlebars');
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({
    extended : true
}));

app.set('views', path.join(__dirname, "/views/"));

app.engine("hbs",expressHandlebars({
  extname:'hbs',
  defaultLayout:'mainlayout',
  layoutsDir: __dirname + "/views/layouts"
}));

app.set('view engine','hbs');

app.get('/', (req, res)=>{
   /*  res.send('<h1>Hello World</h1>') */
   res.render("index",{});
});

app.listen("80",() => {
    console.log("Server stared");
});