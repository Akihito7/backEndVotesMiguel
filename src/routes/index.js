const { Router } = require("express");
const routesWishes = require("./routesWhises");
const routesWishesNotConfirmed = require("./routesWishesNotConfirmed");

const routes = Router();

routes.use('/wishes', routesWishes );
routes.use('/wishesnotconfirmed', routesWishesNotConfirmed );


module.exports = routes;