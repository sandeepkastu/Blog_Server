const router=require('express').Router()
const User=require('../models/BlogSchema')

router.post('/create',async(req,res)=>{
       
    try{
        const data=await User.create(req.body)
        res.json({
            status:"successfully registered",
            data:data
        })

    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }

})

router.get('/blogs',async(req,res)=>{
       
    try{
        const data=await User.find()
        res.json({
            status:"success",
            data:data
        })

    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }

})

module.exports=router