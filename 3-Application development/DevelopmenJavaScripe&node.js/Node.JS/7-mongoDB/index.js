const mongoose = require("mongoose");
const articleModel = require ("./article");



mongoose.connect("mongodb://localhost:27017/aprendendoMongo",{useNewUrlParser: true, useUnifiedTopology: true});

const Article = mongoose.model = ("Article",articleModel);

const artigo =  new Article({title:"HJKAFGk", author:"jgjg", body: "asdkh kjik"});

artigo.save(),then(() => {
    console.log("Artigo salvo!")
}).catch(err => {
    console.log(err);
});


