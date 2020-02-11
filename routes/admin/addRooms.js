var express=require('express');
var router1=express.Router();
var fs = require('fs');
var bodyParser= require('body-parser');
var fileUpload=require('express-fileupload');
router1.use(fileUpload());
router1.use(bodyParser.urlencoded({ extended: false }));

router1.post('/addingRooms',(req,res)=>
{
    let title =req.body.title;
    let desc=req.body.description;
    let size=req.body.size;
    let capacity=req.body.capacity;
    let bed= req.body.bed;
    let services=req.body.services;
    let price= req.body.price;
    let mydate = new Date();
    let status= '1';

 // image variable
    if (req.files.image) {

        var dir = './public/uploads/rooms/';
        
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        let sampleFile = req.files.image;
        var infoGraphicsname = dir + sampleFile.name;
        sampleFile.mv(infoGraphicsname, function (err) {
            if (err)
            throw new Error(err);
        });
        var infoGraphicsname = infoGraphicsname.substring(9);
    }

   // console.log(infoGraphicsname);
   var insert= "INSERT INTO `add_rooms` ( `title`, `description`, `size`, `capacity`, `bed`, `services`, `price`, `image`, `date`, `status`) VALUES ( '"+title+"', '"+desc+"', '"+size+"', '"+capacity+"', '"+bed+"', '"+services+"', '"+price+"', '"+infoGraphicsname+"', '"+mydate+"', '"+status+"');"
  var query=db.query(insert,function(err,result)
  {
    if(query)
    {
      console.log(err);
    }
    
      res.redirect('/showrooms');
    

  })


})

router1.get('/addrooms',(req,res)=>
{

    res.render('admin/add_rooms');
})



module.exports=router1;