var express=require('express');
var router=express.Router();
var bodyParser= require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/newslatter',(req,res)=>
{
    let email= req.body.myEmail;

    let insert="INSERT INTO  `newsletter` (`email`) VALUES  ('"+email+"');"
    
  var query=db.query(insert,(err,result)=>
  {
      if(query)
      {
          console.log(err);
      }
      res.redirect('/');
  })


})



module.exports=router;