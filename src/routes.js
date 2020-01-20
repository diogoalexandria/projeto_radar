const { Router } = require('express');
const DeveloperController = require('./controllers/DeveloperController');
const searchController = require('./controllers/SearchController');

routes = Router();

routes.get('/devs', DeveloperController.indexDevelopers);
routes.post('/devs', DeveloperController.storeDeveloper);

routes.get('/search', searchController.indexSearchDeveloper);

module.exports = routes;