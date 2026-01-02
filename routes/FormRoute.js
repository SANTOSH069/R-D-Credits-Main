const express = require('express')

const router = express.Router();

router.post("/", (req , res ) => {
    const {firstname, lastname, email, phone} = req.body;

    if( !firstname || !lastname || !email || !phone){
        return res.status(400).json({message : "Please enter all details"});
    }

    console.log("The data received from the user is : ", req.body)

    res.status(200).json({message : "Message Sent Successfully !"})

});

module.exports = router