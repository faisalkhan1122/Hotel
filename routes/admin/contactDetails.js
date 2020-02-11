var express=require('express');
var router1=express.Router();



router1.get('/contactme',(req,res)=>
{
    var select="SELECT * from contact ";
   var query= db.query(select,(err,result)=>
   {
       
    res.render('admin/contact',{
      contactus:result
    }); 
   })


})

router1.get('/delete/:id',(req,res)=>
{
var id = req.params.id;

var del="DELETE from contact where id='"+id+"'";
var query=db.query(del,(err,result)=>
{
  res.redirect('/contactme');
})
})


module.exports=router1;