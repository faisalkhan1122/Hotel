var express=require('express');
var router=express.Router();


// this is room route page

router.get('/rooms',(req,res)=>
{
    res.render('rooms');
})




module.exports=router;