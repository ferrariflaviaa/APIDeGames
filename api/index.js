const express = require("express")
const cors = require("cors")
const app = express();
const bodyParser = require("body-parser")
const connection = require("./src/database/database")
const Games = require("./src/model/games/Games")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors())

app.get('/games', (req, res) => {
  Games.findAll({
  }).then(game => {
    res.json({ games: game });
    res.statusCode = 200
  })
});

app.get("/games/:id", (req, res) => {
  const { id } = req.params
  if (isNaN(id)) {
    res.sendStatus(400)
  } else {
    Games.findAll().then(game => {
      res.json({ games: game });
      res.sendStatus(200);
    })

  }
})

app.post("/game", (req, res) => {
  //Cadastrando games
  const { title, price, year } = req.body;
  if (title && price && year) {
    Games.create({
      TITLE: title,
      PRICE: price,
      YEAR: year,
    }).then(() => {
      res.sendStatus(200);
    })
  }
})

app.delete("/game/:id", (req, res) => {
  //Deletação
  const { id } = req.params;

  if (isNaN(id)) {
    res.sendStatus(400)
  } else {
    Games.destroy({
      where: {
        id: id
      }
    }).then(() => {
      res.sendStatus(200);
    })
  }
})

app.put("/game/:id", (req, res) => {
  //Edição
  const { title, price, year } = req.body;
  const { id } = req.params;
  console.log(id)

  if (isNaN(id)) {
    res.sendStatus(400)
  } else {
    console.log(title, price, year)
    Games.update({ TITLE: title, PRICE: price, YEAR: year }, {
      where: {
        id: id
      }
    }).then(() => {
      console.log("fi")
      return res.status(200).send("Jogo atualizado com sucesso.");
    }).catch(() => {
      return res.status(400).send("Erro ao atualziar o jogo.");
    })
  }
})
app.listen(8080, () => {
  console.log("API RODANDO!!")
})