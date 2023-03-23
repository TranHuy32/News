var express = require('express');
var router = express.Router();
var db = require('../config/database');
var employee = require('../models/employee');

// LIST

router.get('/', async (req, res) => {
    try {
        const employeeList = await employee.findAll({});
        res.render('employeeList', { employeeList });
    } catch (err) {
        console.log(err);
    }
});

// ADD
router.get('/add', (req, res) =>
    res.render('employee/add')
);

router.post('/add', async (req, res) => {
    try {
        let { employee_id, employee_title } = req.body;
        // Insert into Table
        const newEmployee = await employee.create({
            employee_id,
            employee_title
        });
        res.redirect('/employee');
    } catch (err) {
        console.log(err);
    }
});
// 
module.exports = router;


// DELETE

router.get('/delete/:id', async (req, res) => {
    try {
        const destroyList = await employee.destroy({
            where: {
                employee: req.params.id
            }
        })
        res.redirect('/employee')

    } catch (err) {
        console.log(err);
    }
});


// UPDATE

router.get('/edit/:id', async (req, res) => {
    try {
        const employeeEdit = await employee.findOne({
            where: {
                employee_id: req.params.id
            }
        });
        res.render('employee/edit', {
            employeeEdit
        });
    } catch (err) {
        console.log(err);
    }
});


router.post('/edit', async (req, res) => {
    try {
        let { employee_id, employee_title } = req.body;
        await employee.update({
            employee_id,
            employee_title
        },
            {
                where: {
                    employee_id: employee_id
                }
            })
        res.redirect('/employee')
    } catch (err) {
        console.log(err)
    }

});

module.exports = router;
