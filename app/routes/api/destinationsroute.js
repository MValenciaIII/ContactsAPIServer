//* THIS CONTAINS ALL THE SUB ROUTES FOR DESTINATION MYSQL TABLE

const daoClass = require('../../dao/destinationdao')
const dao = new daoClass()

const express = require('express')
const router = express.Router();

//* This router under looks like this;
//* ex. http://localhost:4001/api/destinations/
router.get('/', (req, res) => {
    dao.findAll(req, res);
})

//* http://localhost:4001/api/destinations/post 
router.post('/post', (req, res) => {
    dao.postBody(req, res);
})

//? THIS IS INSERTING INFORMATION TO OUR DESTINATIONS TABLE
//* http://localhost:4001/api/destinations/createdestination
router.post('/createdestination', (req, res) => {
    dao.createDestination(req, res);
})

module.exports = router;