const router = require('express').Router()
const bodyParser = require("body-parser")
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../keys')

router.post('/signup' , (req , res)=>{
    console.log(req.body)
    //Nikhil check if mobile already exist in our database if yes then just return user exist
    const token = jwt.sign(req.body.mobileNumber,jwtkey)
    //Nikhil add this token to user ka table (Each user will have his own token)
    res.send({token})
})



module.exports  = router

//   http://ee7a-103-178-144-54.ngrok.io