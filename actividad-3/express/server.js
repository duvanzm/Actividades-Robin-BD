// datos de dotenv
require('dotenv').config();

// express

const express = require('express')
const app = express()

// myQSL

const mysql = require('mysql2');


const db = mysql.createPool({
    host: process.env.DB_HOST,           // servidor MySQL
    user: process.env.DB_USER,           // usuario
    password: process.env.DB_PASSWORD,   // contraseña
    database: process.env.DB_NAME,       // base de datos
    waitForConnections: true,              // si no hay conexiones, esperar
    connectionLimit: 40,                   // máximo de conexiones simultáneas
    queueLimit: 0                          // sin límite de cola
});
//----------------------------------------

// Conectar a la base de datos
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar:', err);
    return;
  }
  console.log('Conectado a MySQL');
  connection.release();
});




app.get('/',(req, res)=>{

    res.send('hello mi friends')
})

app.get('/data', (req, res) => {
  const query = "SELECT u.name,u.last_name,u.email,o.order_number FROM users u INNER JOIN orders o ON u.id = o.user_id WHERE u.id  = '1'";

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      return res.status(500).send('Error en el servidor');
    }
    console.log(res.json(results)); // Devuelve los datos en formato JSON
  });
});   

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`corriendo en el puerto: http://localhost:${PORT}/`)
})