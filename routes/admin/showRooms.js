var express=require('express');
var router1=express.Router();


var bodyParser= require('body-parser');
router1.use(bodyParser.urlencoded({ extended: false }));



router1.get('/Showrooms',isLoggedIn,(req,res)=>
{

    var select="SELECT * from add_rooms where status='1'";
    var query=db.query(select,(err,result)=>
    {
        res.render('admin/show_Rooms',{
            showmerooms:result
            })
    })

   
})


router1.get('/deleteRoom/:id',(req,res)=>
{
    let id=req.params.id;


    var roomDelete="DELETE from add_rooms where id='"+id+"'";
    var query=db.query(roomDelete,(err,result)=>
    {
        res.redirect('/Showrooms');
    })
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