var employee = require('../models/employee');

exports.getEmployees = async function (req, res, next) {
    try {
        const employeeList = await employee.findAll({});
        // res.render('employeeList', { employeeList });
        // res.status(200).json(employeeList)
        return employeeList
    } catch (err) {
        console.error(err);
        throw err;

    }
}

exports.addEmployees = async function (id, name, email, job_id) {
    try {
        const newEmployee = await employee.create({
            id,
            name,
            email,
            job_id
        });
        return newEmployee
    } catch (err) {
        console.error(err);
        throw err;

    }
}

exports.deleteEmployees = async function (id) {
    try {
        const destroyList = await employee.destroy({
            where: {
                id
            }
        })
        return destroyList
    } catch (err) {
        console.error(err);
        throw err;

    }
}

exports.editEmployees = async function (id) {
    try {
        const employeeEdit = await employee.findOne({
            where: {
                id
            }
        });
        return employeeEdit
    } catch (err) {
        console.error(err);
        throw err;

    }
}

exports.updateEmployees = async function (id, name, email, job_id) {

    try {
        const employeeUpdate = await employee.update({
            id,
            name,
            email,
            job_id

        }, {
            where: {
                id
            }
        });
        return employeeUpdate
    } catch (err) {
        console.error(err);
        throw err;
    }
}