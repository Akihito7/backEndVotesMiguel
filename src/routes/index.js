const knex = require("../database");

const { Router } = require("express");
//const routesWishes = require("./routesWhises");
//const routesWishesNotConfirmed = require("./routesWishesNotConfirmed");

const routes = Router();

//routes.use('/wishes', routesWishes );
//routes.use('/wishesnotconfirmed', routesWishesNotConfirmed );
routes.get("/jubileu", async (req,res) => {

    await knex("peoples_confirmed").insert({
        name: "ricardo",
        address: "osvaldo",
        school: "leno",
        schoolCouncil: "leno"
    })
    res.status(200).json("cheguei")
})

module.exports = routes;