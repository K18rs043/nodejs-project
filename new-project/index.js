//express
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
//homepage.routers
var homepage = require("./routes/homepage/homepage.routes");
//auth.routers
var authRounts = require("./routes/auth/auth.route");
//users.routers
var userRouters = require("./routes/users/users.routers");
//server port
const port = 3000;
//app set view
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", function(req, res){
    res.redirect("/homepage");
});
//use homepage
app.use("/homepage", homepage);
//use login
app.use("/auth", authRounts);
//use users
app.use("/users", userRouters);
app.listen(port, function(){
    console.log("Listening to port: " + port);
});