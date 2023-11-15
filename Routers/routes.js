const express=require('express')
const { getData } = require('../controllers/logic')
const router =new express.Router()


router.get('/get-all-data',getData)

module.exports=router