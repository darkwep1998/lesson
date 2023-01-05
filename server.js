console.log("web serverni boshlash")
const express = require("express");
const res = require("express/lib/response");
const app = express();
const  http = require("http");
//1 kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//2: Session code

//3 views code 
app.set("viws","viws");
app.set("view engine", "ejs");

//4  Routing code
app.get("/hello", function(req,res){
    res.end(`<h1 style ="background:red">Assalomu alaykum va rohmatulloh</h1>`);
});
app.get("/gift", function(req,res){
    res.end(`<h1 style ="background:red">siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app);
let Port = 3000;
server.listen(Port ,function(){
    console.log(` The server is running succesfully on port:  ${Port}`);

});