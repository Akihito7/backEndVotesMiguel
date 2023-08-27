const { Router } = require("express");
const wishesNotConfirmedController = require("../controllers/WishesNotConfrmedController");

const routes = Router();

const controller = new wishesNotConfirmedController();

routes.get('/', controller.index);
routes.post('/', controller.registerPerson);
routes.delete('/:id', controller.deletePerson );

module.exports = routes;