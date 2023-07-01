import jwt from 'jsonwebtoken'
import User from '../models/Users'

export default async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required.'],
    })
  }

  const [, token] = authorization.split(' ')

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET)
    const { user_id, phone_number } = data

    // checks if payload data is same as user data
    // requires login again if user updates phone_number
    // user must generate new token for new phone_number
    const user = await User.findOne({
      where: {
        user_id,
        phone_number,
      },
    })

    if (!user) {
      return res.status(401).json({
        errors: ['Invalid user.'],
      })
    }

    req.userId = user_id
    req.userPhoneNo = phone_number
    return next()
  } catch (e) {
    return res.status(401).json({
      errors: ['Invalid or expired token.'],
    })
  }
}
