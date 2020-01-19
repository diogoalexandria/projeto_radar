const { Router } = require('express');
const axios = require('axios');
const Developer = require('./models/Developer');

routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body;
    const api_response = await axios.get(`https://api.github.com/users/${github_username}`);
    const { name = login, avatar_url, bio } = api_response.data;    
    const techs_array = techs.split(',').map(tech => tech.trim());
   
    const developer = await Developer.create({
        name,
        github_username,
        bio,
        avatar_url,
        techs: techs_array
    });

    return response.json(developer);
});

module.exports = routes;