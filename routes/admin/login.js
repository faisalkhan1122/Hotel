var express=require('express');
var router1=express.Router();
var bodyParser= require('body-parser');


// importing Session,logins,cookies middlewares
var session = require('express-session');
 var cookieParser = require('cookie-parser');

router1.post('/getlogin',(req,res)=>
{
 
var loginName=req.body.loginUsername;
var loginPass =req.body.loginPassword;

var select="SELECT * FROM  admin WHERE username ='"+loginName+"' and password= '"+loginPass+"'";

var query=db.query(select,(err,result)=>
{
    if(err)
    {
        console.log(err);
        
    }

    else
    {

        if (result.length > 0) {
            sessionData = req.session;
            sessionData = result[0];
              req.session.loggedin = true;
         //    req.session.username = username;
              req.session.userId = result[0].id;
        //     console.log(result[0].id);
           
              res.redirect('/admin');
      }
   

    }

})

})


router1.get('/login',(req,res)=>
{
    res.render('admin/login');
})

module.exports=router1;