var express=require('express');
var router1=express.Router();

var contactdetails=require('./contactDetails');
var addRooms=require('./addRooms');
var showRooms=require('./showRooms');
router1.use(contactdetails);
router1.use(addRooms);
router1.use(showRooms);
router1.get('/admin',(req,res)=>
{

res.render('admin/index');
})

module.exports=router1;