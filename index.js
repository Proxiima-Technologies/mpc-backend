const express = require("express")
const bodyParser = require("body-parser")
const requireAuth = require('./middleware/requireAuth')
const app = express()
const port = 5000

const authRoutes = require('./routes/authRoutes')

app.use(bodyParser.json())
app.use(authRoutes)

app.get("/", requireAuth,(req, res) => {
  res.send("hello from simple server :)")
})

app.post("/lol", (req, res) => {
  console.log(req.body)
  res.send("Recived")
})

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
)
