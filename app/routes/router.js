//* IMPORT EXPRESS
const express = require('express');
//* IMPORTING express Router
//*This method is built into express and it allows us to chain directories the way we want. 
//* ex. http://localhost:4000/api/categories
//*     https://localhost:4000/api/destinations
const router = express.Router()

//* router.use(httpRouteName, pathtoAPIFILE)
//* ex. http://localhost:4001/api/destinations
router.use('/destinations', require('./api/destinationsroute'));

//* ex. http://localhost:4001/api/categories
router.use('/categories', require('./api/categoryroute'));



module.exports = router;