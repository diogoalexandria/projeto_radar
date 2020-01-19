const axios = require('axios');
const Developer = require('../models/Developer');

module.exports = {
    async indexDevelopers(request, response) {
        const developers = await Developer.find();
        return response.json(developers);
    },
    async storeDeveloper(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        let developer = await Developer.findOne({ github_username });
        if(!developer) {
            const api_response = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = api_response.data;
            const techs_array = techs.split(',').map(tech => tech.trim());
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
    
            developer = await Developer.create({
                name,
                github_username,
                bio,
                avatar_url,
                techs: techs_array,
                location
            });    
        }
        return response.json(developer);
    }
};
