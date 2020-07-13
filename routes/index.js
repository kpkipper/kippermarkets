const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.end('E Boom E hia!');
});

router.post('/',(req,res)=>{
    const body = req.body
    // const { body } = req
    const message = body.message;
    res.status(200).json({
        message: "Boom E hia said: ", message
    });
});

router.get('/all',(req,res)=>{
    res.status(200).json({
        message: "Boom said: ", message
    });
});

router.get('/:id/:status',(req,res)=>{
    res.status(200).json({
        "id": req.params.id,         
        "status": req.params.status
    });
});


module.exports = router