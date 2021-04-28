const express = require('express');

const router = express.Router();

router.get('/',(req,res) =>{
    res.send('Post Work');
})

module.exports=router;