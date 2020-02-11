var express=require('express');
var router=express.Router();
var bodyParser= require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

// This is Contact route

router.get('/contact',(req,res)=>
{
  res.render('contact');
})

// this is route for registration of contactus form
router.post('/register',(req,res)=>
{
  let fullName=req.body.fullname;
  let email=req.body.email;
  let message=req.body.message;

  var insert= "INSERT INTO `contact` ( `name`, `email`, `message`) VALUES ( '"+fullName+"', '"+email+"', '"+message+"');"
  var query=db.query(insert,function(err,result)
  {
    if(query)
    {
      console.log(err);
    }
    
      res.redirect('/contact');
    

  })
})


module.exports=router;