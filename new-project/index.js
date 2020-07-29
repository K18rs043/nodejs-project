//express
var express = require("express");
var app = express();
//routers
var homepage = require("./routes/homepage/homepage.routes");
//server port
const port = 3000;
//app set view
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.redirect("/homepage");
})
app.use("/homepage", homepage)

app.listen(port, function(){
    console.log("Listening to port: " + port);
});