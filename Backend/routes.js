const express = require('express');
const crypto = require('crypto');
const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.get('/session', SessionController.index);

routes.post('/register', SessionController.create);


module.exports = routes;
