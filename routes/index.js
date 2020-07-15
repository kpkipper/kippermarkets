const express = require('express');
const router = express.Router();
const Food = require('../models/food');

router.post('/add',(req,res)=>{
    const body = req.body;
    const {id, name, price , picture, qty, rating} = body;
    Food.create({
        'id': id,
        'name': name,
        'price': price,
        'picture': picture,
        'qty': qty,
        'rating': rating
    }).then((data)=>{
        console.log(data, ' was created');
        res.status(200).json({
            message: "create successfully"
        });
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            'error': err
        });
    })
})

router.get('/:id',(req,res)=>{
    const id  = req.params.id;
    Food.findOne({'id':id},(err,data)=>{
        if(err){
            res.status(500).json({
                'error':err
            })
        } else {
            res.status(200).json({
                data: data
            })
        }
    })
})

// put = update
// post = new create

router.put('/:id',(req,res)=>{
    const id  = req.params.id;
    const body = req.body;

    Food.findOneAndUpdate({'id':id},body,(err,data)=>{
        if(err){
            res.status(500).json({
                'error':err
            })
        } else {
            res.status(200).json({
                data: data
            })
        }
    })
})

router.delete('/:id',(req,res)=>{
    const id  = req.params.id;

    Food.findOneAndDelete({'id':id},(err,data)=>{
        if(err){
            res.status(500).json({
                'error':err
            })
        } else {
            res.status(200).json({
                data: data
            })
        }
    })
})

router.delete('/byname/:name',(req,res)=>{
    const name  = req.params.name;

    Food.findOneAndDelete({'name':name},(err,data)=>{
        if(err){
            res.status(500).json({
                'error':err
            })
        } else {
            res.status(200).json({
                data: data
            })
        }
    })
})

router.get('/',(req,res)=>{
    Food.find((err,data)=>{
        if(err){
            res.status(500).json({
                'error':err
            })
        } else {
            res.status(200).json({
                data: data
            })
        }
    })
})

// router.get('/',(req,res)=>{
//     res.end('E Boom E hia!');
// });

// router.post('/',(req,res)=>{
//     const body = req.body
//     // const { body } = req
//     const message = body.message;
//     res.status(200).json({
//         message: "Boom E hia said: ", message
//     });
// });

router.get('/all',(req,res)=>{
    res.status(200).json({
        message: "Boom said: hello nha mah"
    });
});

router.get('/:id/:status',(req,res)=>{
    res.status(200).json({
        "id": req.params.id,         
        "status": req.params.status
    });
});


module.exports = router