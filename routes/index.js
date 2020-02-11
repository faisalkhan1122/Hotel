var express= require('express');
var router = express.Router();
var about=require('./about');
var contact= require('./contact');
var rooms=require('./rooms');
var newslatter=require('./newslatter');

// Calling sub-route in this index.js route that will be forward into app.js main 
router.use(about);
router.use(contact);
router.use(rooms);
router.use(newslatter);
router.get('/',(req,res)=>
{
    var select="SELECT * from add_rooms where status='1'";
   var query= db.query(select,(err,result)=>{
       
    res.render('index',{
      show_room:result
    }); 
   })
})
  
// This is route page for index



module.exports= router;