const express = require("express");
const bodyParser = require("body-parser");
const getDate = require(__dirname+"/date.js");


var items= ["Buy food","Cook food","Eat food"];
var workList = [];

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
   var day =getDate.newDate();
  

    res.render("lists" ,{ todayDay:day , newItem:items} );
});

app.get("/work",function(req,res){
    res.render("lists",{todayDay:"Work Lists",newItem:workList});
});

app.get("/about" , function(req,res){
    res.render("about");
});

app.post("/",function(req,res){
    if(req.body.list==="Work"){
        var workItem = req.body.nextItem;
        workList.push(workItem);
        res.redirect("/work");
    }else{
        var item = req.body.nextItem;
        items.push(item); 
        res.redirect("/");
    }
     
});



app.listen(3000,function(){
    console.log("Server is working completely fine...");
})