var express = require("express")
var app = express()
app.use(express.static("wwwroot"))

app.get("/user",function(req,res){
    var ly =req.query.ly
    res.status(200).send(ly)
})

app.listen(3000,function(){
    console.log("ok")
})