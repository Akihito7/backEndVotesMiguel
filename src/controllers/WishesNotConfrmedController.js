const knex = require('../database');

class WishesNotConfirmedController {

    //pegar todas pessoas
    async index(request, response) {

        const peoples = await knex("peoples_not_confirmed");

        response.status(200).json(peoples);
    };

    //cadastrando uma pessoa
    async registerPerson(request, response) {
        const {
            name,
            address,
            school,
            schoolCouncil

        } = request.body

        await knex('peoples_not_confirmed').insert({
            name,
            address,
            school,
            schoolCouncil
        });

        response.status(200).json();
    };

    //deletando uma pessoa 
    async deletePerson(request, response) {

        const { id } = request.params;

        await knex('peoples_not_confirmed').where({ id }).del();

        response.status(200).json();
    };
}


module.exports = WishesNotConfirmedController;