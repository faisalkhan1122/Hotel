var express= require('express');
var router=require('./routes/index');
var router1=require('./routes/admin/dashboard');
var app=express();
var bodyParser= require('body-parser');
var mysql= require('mysql');
var fileUpload=require('express-fileupload');

// importing Session,logins,cookies middlewares
var session = require('express-session');
 var cookieParser = require('cookie-parser');

//*** Settng express session */
// Express session
app.use(session({
    secret: "insideNow",
    resave: false,
    saveUninitialized: false
  }))


// Deserialization on SQL  --match for authentication of user 
app.use(function (req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    let query = 'SELECT * FROM admin where id = '+ req.session.userId;
    db.query(query, (err, user) => {
        if(user){
            // console.log(user[0].id)
            res.locals.currentUser= user;
        }
        res.locals.currentUser= user;

    next();
    });
});




 //************* */







app.set('view engine','ejs'); // configuring templeting engine
app.set('views',__dirname+'/views')  // set express to look in this folder to render our view


app.use(express.static('/public'));
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/../public'));


// admin view setting for dashboard
app.use(express.static('./admin'));
app.use(express.static(__dirname+'/admin'));
app.use(express.static(__dirname+'/../admin'))

// This is Index route of routes/index  in which all the routes of index will be call from
app.use(router);

app.use(router1);

//Body Parer Configuration and setting for URL and JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit:'50mb',extended:true}));



// fileupload package manager

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(fileUpload()); // configure fileupload
var fs = require('fs');




//Database conncetivitiy with my-sql
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodeDB'
  });

connection.connect(function(err)
{
    if(err) 
    {
        console.log("DAtabase ERROR"+err);
    }
    else {
        console.log("Database is successfully connected");
    }
});

global.db=connection;




app.listen(3001,()=>
{
    console.log("this is testing");
});

