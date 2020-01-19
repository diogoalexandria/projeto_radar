const { Router } = require('express');
const DeveloperController = require('./controllers/DeveloperController');

routes = Router();

routes.get('/devs', DeveloperController.indexDevelopers);
routes.post('/devs', DeveloperController.storeDeveloper);

module.exports = routes;