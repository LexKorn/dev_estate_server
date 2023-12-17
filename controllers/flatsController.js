const {Flat} = require('../models/models');

class FlatsController {
    async getAll(req, res) {
        try {
            const flats = await Flat.findAll();
            return res.json(flats);
        } catch(err) {
            res.status(400).json(err.message);
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            const flats = await Flat.findOne({where: {id}});
            return res.json(flats);
        } catch(err) {
            res.status(400).json(err.message);
        }
    }
};

module.exports = new FlatsController();