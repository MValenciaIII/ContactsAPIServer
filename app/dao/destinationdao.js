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

    postBody(req, res) {
        console.log(req.body)
        res.send('Data has been submitted')
    }

    createDestination(req, res) {
        console.log(req.body)

        //* Object.keys(req.body) puts the names of the object attributes into an array
        let fields = Object.keys(req.body)
        console.log(fields.join(','))

        let values = Object.values(req.body)
        console.log(values);




        //? THE BETTER WAY
        //* IF YOU GO THIS ROUTE. MAKE SURE TO add EXTRA QUOTATIONS INSIDE YOUR STRINGS
        //* ex. "DATANAME": "\"TEST\"",
        //*     "DATANAME2": "\"TESTING\""
        pool.query(`INSERT INTO destination (${fields.join(',')}) VALUES (${values.join(',')});`, (err, rows) => {
            if(err) {
                res.json({
                    error: true,
                    message: err
                })
            }
            res.json(rows)
        })
    }
}

module.exports = DestinationDao;