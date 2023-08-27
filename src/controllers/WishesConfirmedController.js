const knex = require('../database');

class WishesConfirmedController {

    //pegar todas pessoas
    async index(request, response) {

        const peoples = await knex("peoples_confirmed");

        response.status(200).json(peoples);
    };

    //cadastrando uma pessoa
}

module.exports = WishesConfirmedController;