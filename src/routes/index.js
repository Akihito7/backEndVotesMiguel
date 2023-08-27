const { Router } = require("express");
//const routesWishes = require("./routesWhises");
//const routesWishesNotConfirmed = require("./routesWishesNotConfirmed");

const routes = Router();

//routes.use('/wishes', routesWishes );
//routes.use('/wishesnotconfirmed', routesWishesNotConfirmed );
routes.get("/jubileu", (req,res) => {
    res.status(200).json("cheguei")
})

module.exports = routes;