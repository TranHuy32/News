const jwt = require('jsonwebtoken')
const UserService = require('../services/users.service')

const auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, 'RESTFULAPIs')
        const user = await UserService.detailUser(data.email)
        if (!user) {
            return res.status(401).json({ message: 'Not authorized to access this resource' })
        }
        req.user = user.dataValues
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}

module.exports = auth
