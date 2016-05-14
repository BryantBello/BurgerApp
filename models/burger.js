var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var Burger = sequelize.define("character", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
    },
    devoured: {
        type: Sequelize.BOOLEAN,
    }
});


Burger.sync();


module.exports = Burger;
