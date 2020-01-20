const Developer = require('../models/Developer');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async indexSearchDeveloper() {
        const { latitude, longitude, techs } = request.query;
        techsArray = parseStringAsArray(techs);

        const developers = await Developer.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinate: [longitude, latitude],                        
                    },
                    $maxDistance: 10000
                }
            }
        });
        console.log(request.query);
        return Response.json({ developers })
    }
}