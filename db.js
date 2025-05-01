const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // ton mot de passe MySQL
    database: 'drendystock'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connecté à MySQL');
});

module.exports = connection;
