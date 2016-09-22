var express=require("express")
var bodyParser=require("body-parser")

var app =express()
app.use(express.static("wwwroot"))
app.use(bodyParser.urlencoded({extended:false}))
// 解析body的编码，extended：flase表示开启高级编码功能
app.get("/login",function(req,res){
    //服务器内部设置接受的请求信息参数值
    if(req.query.name == "lucy" && req.query.pwd == "123456"){
        //console.log("登陆成功")  终端显示该信息
       setTimeout(function(){
       res.send("登陆成功")
       },5000) 
    }else{
        console.log("登录失败")
      setTimeout(function(){
            res.send("登陆成功")
      },5000)  
    }
})

app.post("/login",function(req,res){
    if(req.body.name == "lucy" && req.body.pwd== "123456"){
        res.status(200).send("post登录成功")
    }else{
        res.status(200).send("post登录失败")
    }
})


app.listen(3000,function(){
    console.log("ok")
})