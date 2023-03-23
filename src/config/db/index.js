const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '030201',
    database: 'new_schema'
});
connection.connect((error) => {
    if (error) {
        console.error('Lỗi kết nối tới MySQL: ', error);
        return;
    }
    console.log('Kết nối tới MySQL thành công!');
});

module.exports = { connection }
