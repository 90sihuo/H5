var express=require("express")
var app=express()
app.use(express.static("wwwroot"))
app.get("/show",function(req,res){
    var name=req.query.liuyan
    res.send("发表成功"+"!"+ "您发表的内容是:"+name)
})
app.listen(3000,function(){
    console.log("ok")
})