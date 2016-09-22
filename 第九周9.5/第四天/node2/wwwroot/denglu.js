$("#ti").click(function(){
$.get("/fucker", 
        { name:"李炎",pwd:"402147763" },  
        function(data,status){
        document.write("登陆成功")
        }  )
})
