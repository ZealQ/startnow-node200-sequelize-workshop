const express = require('express');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const db = require('./db/models');

/* sequelize configuration */
db.sequelize.sync();

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.status(200).send();
});
app.use("/api/authors",require("./db/routes/authors"));
app.use("/api/blogs",require("./db/routes/blogs"));
module.exports = app;