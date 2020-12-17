const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();

//Configurações
    app.use(express.json())

    //Body-Parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //Cors
    app.use(cors({origin: true}))

//Rotas
    app.use('/', routes);

module.exports = app;