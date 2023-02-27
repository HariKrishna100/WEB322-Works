const Sequelize = require('sequelize');

// set up sequelize to point to our postgres database
var sequelize = new Sequelize('zbjwiusf', 'zbjwiusf', 'cVxj5Ohedg2yhsXUX5BXoLvIJvMfj07I', {
    host: 'peanut.db.elephantsql.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true }
});

// Person model
var Pesron = sequelize.define('Person', {
    fname: Sequelize.STRING,  // first Name
    lname: Sequelize.STRING, // Last Name
    age: Sequelize.INTEGER,
});

sequelize.sync().then(function () {
    // create
    Pesron.create({
        fname: "Mathew",
        lname: "Ogolla",
        age: 70
    }).then(function(){console.log("Mathew Ogolla created")});

    Pesron.create({
        fname: "Billy",
        lname: "Williams",
        age: 40
    }).then(function(){console.log("Billy Williams created")});

    Pesron.create({
        fname: "Arap",
        lname: "Moi",
        age: 100
    }).then(function(){console.log("Arap Moi created")});

    // read
    Pesron.findAll({
        attribute: ['fname']
    }).then(function(data){
        console.log("All first names");
        for(var i =0; i < data.lenght; i++){
            console.log(data[i].fname);
        }
    });

    // Update
    Pesron.update({
        lname: "Williams"
    }, {
        where: {id: 2}
    }).then(function () { console.log("successfully updated user 2"); });

    // Delete
    Pesron.destroy({
        where: { id: 1 }
    }). then(function() {console.log("successfully removed user 1");});
});

