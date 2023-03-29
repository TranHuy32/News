const { check } = require('prettier');
var user = require('../models/user');




// Tìm kiếm user đã có trong db theo email
exports.detailUser = async function (email) {
    try {
        return await user.findOne({ where: { email } });
        return foundUser
    } catch (err) {

        console.error(err);
        throw err;
    }
}

// tạo tài khoản
exports.signUpUsers = async function (id, email, password) {
    try {
        const newUser = await user.create({
            email,
            password
        })


        return newUser
    } catch (err) {
        console.error(err);
        throw err;

    }
}