var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var session = require("express-session");
var flash = require("express-flash");
var cookieParser = require("cookie-parser");


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cookieParser("jsaddsh"));

app . use ( session ( { 
    secret : 'keyboard cat' , 
    resave : false , 
    saveUninitialized : true , 
    cookie : {  maxAge : 60000 } 
  }))

  app . use ( flash ( ) ) ;


  app.get("/",(req,res) => {

    var emailError = req.flash("emailError");
    var pontosError = req.flash("pontosError");
    var nameError = req.flash("nameError");
    var email = req.flash("email");
    var pontos = req.flash("pontos");
    var name = req.flash("name");



    emailError = emailError == undefined || emailError.length == 0 ? undefined : emailError;
    email = (email == undefined || email.length ==0) ? "" : email;

    pontosError = pontosError == undefined || pontosError.length == 0 ? undefined : pontosError;
    pontos = (pontos == undefined || pontos.length ==0) ? "" : pontos;

    nameError = nameError == undefined || nameError.length == 0 ? undefined : nameError;
    name = (name == undefined || name.length ==0) ? "" : name;

    res.render("index",{emailError, pontosError, nameError,email, pontos, name});
  });

  app.post("/form",(req,res) => {
        var {email, name, pontos} =req.body;

        var emailError;
        var pontosError;
        var nameError;

        if(email == undefined || email == ""){
            emailError = "O email nao pode ser vazio!";
        }
        if(pontos == undefined || pontos <20){
            pontosError = "Voce nao pode ter menos de 20 pontos!";
        }

        if(name == undefined || name == ""){
            nameError = "O nome nao pode ser vazio!";
        }

        if(emailError != undefined || pontosError != undefined || nameError != undefined){
            req.flash("emailError", emailError);
            req.flash("pontosError",pontosError);
            req.flash("nameError", nameError);

            req.flash("email", email);
            req.flash("pontos",pontos);
            req.flash("name", name);


            res.redirect("/");
        }else{
            res.send("SHOR DE BOLA ESSE FORM!");
        }
  });



app.listen(5678,(req,res) =>{
    console.log("Servidor rodando!");
});