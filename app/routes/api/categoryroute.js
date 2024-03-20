const daoClass = require('../../dao/categorydao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    dao.findAll(req, res);
})

router.get('/destinationcategory', (req,res) => {
    dao.showDestinationCategory(req,res);
})

router.post('/postcategory', (req, res) => {
    dao.createCategory(req, res);
})

module.exports = router;