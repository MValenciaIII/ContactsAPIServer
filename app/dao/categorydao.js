const pool = require('../config/dbconfig');




class CategoryDao {


    constructor() {
        this.pool = pool;
    }

    //? FIND ALL CATEGORIES
    findAll(req, res) {
        pool.query('SELECT * FROM category', (err, rows, fields) => {
            console.log(rows)
            res.send(rows)
        })
    }


    //? GET REQUEST INNER JOIN 
    showDestinationCategory(req, res) {
        pool.query('SELECT typeofdestination.id, destination.name AS dName , category.name FROM typeofdestination INNER JOIN destination ON destination.id = typeofdestination.destinationID INNER JOIN category ON category.id = typeofdestination.categoryID', (err, rows) => {
            console.log(rows)
            res.send(rows)
        })
    }

    //? POST REQUEST
    createCategory(req, res) {
        pool.query('INSERT INTO category (name) VALUES (\'event\')')
        pool.query('SELECT * FROM category', (err, rows) => {
            console.log(rows)
        })
        res.send('POST REQUEST HAS BEEN SUBMITTED')
    }
    
}


module.exports = CategoryDao;