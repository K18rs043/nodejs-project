var express = require("express");
var app = express();

const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index", {
        name: "Tuan"
    });
});

app.listen(port, function(){
    console.log("Listening to port: " + port);
});