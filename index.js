const express = require("express")
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}));
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
app.listen(45678, () => {
  console.log("API RODANDO!!")
})