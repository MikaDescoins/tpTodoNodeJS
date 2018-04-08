const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const methodOverride = require('method-override');
const path = require('path');



app.use(methodOverride('_method'));
const db = require('./db');


const pug = require('pug');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static(path.join(__dirname, "public")));

app.all('*', (req, res, next) => {
    next();
});


// Partie Todos :
app.use('/todos', require('./controllers/todos'));



// Page 404
app.use((req, res) => {
    res.send(404, '404, la page que vous requêtez n\'existe pas');
});
app.listen(PORT);