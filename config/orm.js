var connection = require('./connection.js');

var orm = {

    selectAllBurgers: function(tableInput, cb) {
        var s = "SELECT * FROM " + tableInput + ";";
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    addBurger: function(tableInput, burgerInput, cb) {
        var s = "INSERT INTO " + tableInput + " (burger_name) VALUES (?)";
        connection.query(s, [burgerInput], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    devourBurger: function(tableInput, idInput, cb) {
        var s = "UPDATE" + tableInput + " SET devoured = 1 WHERE id = ?";
        connection.query(s, [idInput], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};
