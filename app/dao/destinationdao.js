//? IMPORT MYSQL CONNECTION INFORMATION
const pool = require('../config/dbconfig')


//? WHY ARE WE MAKING javascript class and constructor?

class DestinationDao {

    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        pool.query('SELECT * FROM destination', (err, rows, fields) => {
            console.log(rows)
            res.send(rows)
        })
    }


}

module.exports = DestinationDao;