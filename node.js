var express = require('express');
var path = require('path');
var http = require('http');
var debug = require('debug')('frontend:server');
var app = express();
var mustacheExpress = require('mustache-express');
var appBody = require("./app.js");

let proto = Object.getPrototypeOf(require);
!proto.hasOwnProperty("ensure") && Object.defineProperties(proto, {
    "ensure": {
        value: function ensure(modules, callback) {
            callback(this);
        },
        writable: false
    }
});

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname+"/");

app.get("/public/*",(req,res)=>{
	res.sendFile(__dirname+req.path);
})

app.get("/css/*",(req,res)=>{
	res.sendFile(__dirname+req.path);
})

app.use(function(req, res, next) {
  var currRouteJs = "";
  if(req.url === "/"){
    currRouteJs = "home";
  } else {
    currRouteJs = "404";  //not implented in this example
  }

  appBody(req.url,function(appMarkup){
    res.render('index',{
      currentRoute: "/public/"+currRouteJs+".bundle.js",
      appMarkup: appMarkup 
    });
  });
});

app.set('port', 8080);

app.listen(8080, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', 8080, 8080);
});