const { Router } = require("express");
const wishesConfirmedController = require("../controllers/WishesConfirmedController");

const routes = Router();

const controller = new wishesConfirmedController();

routes.get('/', controller.index );
routes.get('/:name', controller.getPersonByName);
routes.post('/', controller.registerPerson );
routes.delete('/:id', controller.deletePerson );

module.exports = routes;