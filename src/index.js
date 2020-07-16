const connection = require('./models');
const express  = require('express');
const app = express();
const path = require('path');
const expressHandlebars = require('express-handlebars');
const bodyparser = require("body-parser");
/* Controllers */
const CustomerController = require('./controllers/customers');

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
   res.render("index",CustomerController);
});

app.listen("80",() => {
    console.log("Server stared");
});