var express = require("express")

var app =express()
app.use(express.static("wwwroot"))

app.get("/user",function(req,res){
    var name = req.query.name
    res.status(200).send(name)

})
app.listen(3000,function(){
    console.log("yes")
})