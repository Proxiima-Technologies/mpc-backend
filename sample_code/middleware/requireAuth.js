const jwt = require("jsonwebtoken")
const { jwtkey } = require("../keys")

module.exports = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).send({ error: "You mush be logged in" })
  }
  const token = authorization.replace("Bearer ", "")
  jwt.verify(token, jwtkey, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You are not authorized" })
    }
    const { mobileNumber } = payload
    //Nikhil find if this user with this mobile number exist in our database or not
    next()
  })
  
}
