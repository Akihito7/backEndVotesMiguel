const knex = require('../database');

class WishesConfirmedController {

    //pegar todas pessoas
    async index(request, response) {

        const peoples = await knex("peoples_confirmed");

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
         

        console.log(name,address,school,schoolCouncil)

        const checkNameExists = await knex("peoples_confirmed").where({name}).first();

        if(checkNameExists) return response.status(400).json({"message": "Nome em uso"});
        
        await knex('peoples_confirmed').insert({
            name,
            address,
            school,
            schoolCouncil
        });

        response.status(200).json();
    };

    //pegando pessoa por nome
    async getPersonByName(request, response) {

        const { name } = request.params;

        try {
            const person = await knex("peoples_confirmed").where({name}).first()
            return response.status(200).json(person)
        } catch (error) {
            return response.status(400).json('erro,tente novamente')
        }

    }

    //deletando uma pessoa 
    async deletePerson(request, response ) {

        const { id } = request.params;
        
        await knex('peoples_confirmed').where({id}).del();

        response.status(200).json();
    };
}

module.exports = WishesConfirmedController;