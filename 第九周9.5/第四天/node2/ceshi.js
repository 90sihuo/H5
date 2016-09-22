var express =require("express")
  var app = express()
  app.use(express.static("wwwroot"))
  app.get("/fucker",function(req,res){
     if(req.qurey.name=="李炎" & req.query.pwd=="402147763"){
         res.send()
     }
  })
  app.listen(3000,function(){
      console.log("ok")
  })