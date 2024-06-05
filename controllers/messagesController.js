const {Message} = require('../models/models');

const _transformMessage = (message) => {
    return {
        id: message.id,
        text: message.text,
        sender: message.sender,
        userId: message.userId
    }
};

class MessagesController {
    async create(req, res) {
        try {
            const {id} = req.user;
            let {text, sender} = req.body;

            const message = await Message.create({text,sender, userId: id});            
            return res.json(_transformMessage(message));

        } catch(err) {
            res.status(400).json(err.message);
        }
    }

    async getAll(req, res) {
        try {
            const {id} = req.user;
            const messages = await Message.findAll({where:{userId: id}});
            return res.json(messages.map(message => _transformMessage(message)));
        } catch(err) {
            res.status(400).json(err.message);
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            await Message.destroy({where: {userId: req.user.id, id: id}});
            return res.json('Message was deleted');

        } catch(err) {
            res.status(400).json(err.message);
        }
    }
};

module.exports = new MessagesController();