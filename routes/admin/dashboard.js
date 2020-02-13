var express=require('express');
var router1=express.Router();


// importing Session,logins,cookies middlewares
var session = require('express-session');
 var cookieParser = require('cookie-parser');
 
var contactdetails=require('./contactDetails');
var addRooms=require('./addRooms');
var showRooms=require('./showRooms');
var login=require('./login');


router1.use(contactdetails);
router1.use(addRooms);
router1.use(showRooms);
router1.use(login);
router1.get('/admin',isLoggedIn,(req,res)=>
{

res.render('admin/index');
})



// aunthetic route sectret 

function isLoggedIn(req, res, next) {
    if (req.session.username) {
        return next();
    } else {
        res.redirect('/login');
    }
}


module.exports=router1;