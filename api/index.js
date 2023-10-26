const express = require("express")
const cors = require("cors")
const app = express();
const bodyParser = require("body-parser")
const connection = require("./src/database/database")
const Games = require("./src/model/games/Games")
const Users = require("./src/model/users/Users")
const userController = require("./src/controller/users/userController");
const adminAuth = require("./src/middlware/adminAuth");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors())
app.use("/games", userController)

app.get('/games', adminAuth,(req, res) => {
  Games.findAll({
  }).then(game => {
    res.json({ games: game });
    res.statusCode = 200
  })
});

app.get("/games/:id", (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    Games.findByPk(id) // Supondo que você esteja usando Sequelize para interagir com o banco de dados.
    .then(game => {
      if (game) {
        res.json({ game });
      } else {
        res.sendStatus(404); // Retorna um status 404 (Not Found) se o jogo não for encontrado.
      }
    })
    .catch(error => {
      console.error("Erro ao buscar o jogo:", error);
      res.sendStatus(500); // Retorna um status 500 (Internal Server Error) em caso de erro.
    });
  }
});


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

app.put("/gameupdate/", (req, res) => {
  //Edição
  const { title, price, year, id } = req.body;

  if (isNaN(id)) {
    res.sendStatus(400)
  } else {
    Games.update({ TITLE: title, PRICE: price, YEAR: year }, {
      where: {
        id: id
      }
    }).then(() => {
      return  res.sendStatus(200);
    }).catch(() => {
      return res.status(400).send("Erro ao atualziar o jogo.");
    })
  }
})
app.listen(8080, () => {
  console.log("API RODANDO!!")
})