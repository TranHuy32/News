var express = require('express');
var router = express.Router();
var user = require('../models/user');
var UserService = require('../services/users.service')
const bcrypt = require('bcrypt');
const saltRounds = 10;
jwt = require('jsonwebtoken'),



    exports.getSecret = function (req, res, next) {
        console.log('call to secret function');
    };

// Sign in
exports.postSignIn = async function (req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await UserService.detailUser(email)
        if (!user) {
            return res.status(401).json({ message: 'Email không tồn tại' })
        }
        const checkUser = await bcrypt.compareSync(password, user.dataValues.password);
        if (!checkUser) {
            return res.status(401).json({ message: 'Sai mật khẩu' })
        }
        delete user.dataValues.password
        return res.json({ token: jwt.sign({ email: user.email, id: user.id }, 'RESTFULAPIs', { expiresIn: '24h'}) })

    } catch (error) {
        console.log(error);
        throw error
    }

};

// Sign up
exports.postSignUp = async function (req, res, next) {
    try {
        let { id, email, password } = req.body;
        const foundUser = await UserService.detailUser(email)
        if (foundUser) {
            return res.status(403).json({
                error: {
                    message: 'Email đã được sử dụng'
                }
            })
        }
        const hashPassword = await bcrypt.hash(password, saltRounds)
        const newUser = await UserService.signUpUsers(id, email, hashPassword)
        res.status(201).json(newUser)

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: {
                message: 'Đăng ký không thành công'
            }
        });
    }
};