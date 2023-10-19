const express = require("express")
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

let DB = {
  games: [
    {
      id: 23,
      title: "Call of duty MW",
      year: 2019,
      price: 60
    },
    {
      id: 66,
      title: "Fifa",
      year: 2018,
      price: 40
    },
    {
      id: 22,
      title: "Call",
      year: 2012,
      price: 20
    }
  ]
}

app.get('/games', (req, res) => {
  res.statusCode = 200
  res.json(DB.games);
});

app.get("/games/:id", (req, res) => {
  const { id } = req.params
  if (isNaN(id)) {
    res.sendStatus(400)
  } else {
    let idGame = parseInt(id);
    let game = DB.games.find(g => g.id == idGame)
    if (game !== undefined) {
      res.statusCode = 200
      res.json(game)
    } else {
      res.sendStatus(404)
    }
  }
})

app.post("/game", (req, res) => {
  //Cadastrando games
  const { title, price, year } = req.body;
  if (title && price && year) {
    DB.games.push({
      id: 112,
      title,
      price,
      year
    })
    res.sendStatus(200);
  }
})

app.delete("/game/:id", (req, res) => {
  //Deletação
  const { id } = req.params;

  if (isNaN(id)) {
    res.sendStatus(400)
  } else {
    let idGames = parseInt(id);
    let index = DB.games.findIndex(g => g.id === idGames)

    if (index == -1) {
      res.sendStatus(404)
    } else {
      DB.games.splice(index, 1);
      res.sendStatus(200)
    }
  }
})

app.put("/game/:id", (req, res) => {
  //Edição
  const { title, price, year } = req.body;
  if (isNaN(id)) {
    res.sendStatus(400)
  } else {
    let idGame = parseInt(id);
    let game = DB.games.find(g => g.id == idGame)
    if (game !== undefined) {

      if(title != undefined){
        game.title = title
      }

      if(price != undefined){
        game.price = price
      }

      if(year != undefined){
        game.year = year
      }

      res.statusCode = 200
    } else {
      res.sendStatus(404)
    }
  }
})
app.listen(45678, () => {
  console.log("API RODANDO!!")
})