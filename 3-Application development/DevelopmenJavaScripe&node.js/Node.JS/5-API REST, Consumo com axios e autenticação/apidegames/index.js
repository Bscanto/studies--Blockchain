const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");


const JWTSecret = "djkshahjksdajksdasjkdhasjkdhasjdk";



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());


function auth(req, res, next){
    const authToken = req.headers['autorization'];

    if(authToken != indefined){

        const bearer = authToken.split('');
        var token = bearer[1];

        jwt.verify(token, JWTSecret,(err,data) =>{
            if(err){
                res.status(401);
                res.json({err:"Token invalido"});
            }else{

                req.token = token;
                req.looggedUser = {id:data.id, email: data.email};
                next();
            }
        });

    }else{
        res.status(401);
        res.json({err: "Token invalido"});
    }
    next();
}

var DB = {
    games: [
        {
            id: 23,
            title: "Call of duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "minecraft",
            year: 2012,
            price: 20
        }
    ],
    users: [

        {
            id: 1,
            nome: "Victo lima",
            email: "victor@guiadoprogramador.com",
            password: "nodejs123"
        },
        {
            id: 20,
            nome: "guilherme",
            email: "guigg@gmail.com",
            password: "java123"
        }
    ]
}


app.get("/games",auth,(req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        let id = parseInt(req.params.id);
        let game = DB.games.find(g => g.id == id);

        if (game != undefined) {
            res.statusCode = 200;
            res.json(game);
        } else {
            res.sendStatus(404);
        }
    }
});

app.post('/game', (req, res) => {
    let title = req.body.title;
    let year = req.body.year;
    let price = req.body.price;

    console.log(title, year, price)

    DB.games.push({
        id: 322,
        title,
        year,
        price
    })

    res.sendStatus(200)
})

app.delete('/game/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        let id = parseInt(req.params.id)
        let index = DB.games.findIndex(game => game.id == id)

        if (index == -1) {
            res.sendStatus(404)
        } else {
            DB.games.splice(index, 1)
            res.sendStatus(200)
        }
    }
})

app.put('/game/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        let id = parseInt(req.params.id)
        let game = DB.games.find(game => game.id == id)

        if (game != undefined) {
            let { title, year, price } = req.body

            if (title != undefined) {
                game.title = title
            }

            if (year != undefined) {
                game.year = year
            }

            if (price != undefined) {
                game.price = price
            }

            res.sendStatus(200)
        } else {
            res.sendStatus(404)
        }
    }
})

app.post("/auth",(req, res) => {

    var { email, password } = req.body;

    if (email != undefined) {

        var user = DB.users.find(u => u.email == email);
        if(user != undefined){
            if(user.password == password){

                jwt.sign({id: user.id, email:user.email},JWTSecret,{expiresIn:'48h'},(err,token) => {
                    if(err){
                        res.status(400);
                        res.json({err: "Falha interna"});
                    }else{
                        res.status(200);
                        res.json({token: token});
                    }
                });

               
            }else{
                res.status(401);
                res.json({err: "Credenciais inválidas!"});
            }

            res.status(400);
            res.json({err: "O E-mail não existe na base de dados"});
        }

    } else {
        res.status(400);
        res.send({err: "O E-mail enviado é invalido" });
    }
});


app.listen(45678, () => {
    console.log("API RODANDO!");
});