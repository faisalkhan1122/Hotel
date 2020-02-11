var express= require('express');
var router=express.Router();


// This is about us routes
router.get('/about',(req,res)=>
{
  res.render('about');
})

module.exports=router;