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

    res.send('Hello my friends: usa /level#/ejercicio# para ver los resultados de las consultas SQL ejemplo: /level1/ejercicio-1')
})

// Actividad 3: Consulta SQL con Express y MySQL
// Enpoint Ejecrcicios:
const urlEjer= 'ejercicio-'
const urllev = 'level'
// 1. Listar el nombre de un usuario (el que tu quieras), 
// su correo electrónico y el código (`order_number`) de todos los pedidos que han realizado.

app.get(`/${urllev}1/${urlEjer}1`, (req, res) => {
  const query = "SELECT u.name,u.last_name,u.email,o.order_number FROM users u INNER JOIN orders o ON u.id = o.user_id WHERE u.id  = '1'";

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      return res.status(500).send('Error en el servidor');
    }
    console.log(res.json(results)); 
  });
});   

// 2. Obtener todos los pedidos (código y fecha) realizados por un usuario con un correo electrónico específico (ej: isamel@pedrito.es).

app.get(`/${urllev}1/${urlEjer}2`, (req, res) => {
  const query = "SELECT o.order_number,o.created_at FROM orders o INNER JOIN users u ON o.user_id = u.id WHERE u.email = 'isamel@pedrito.es'";

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      return res.status(500).send('Error en el servidor');
    }
    console.log(res.json(results)); 
  });
});  

// 3. Mostrar el nombre de cada producto junto con el nombre de la categoría a la que pertenece.

app.get(`/${urllev}1/${urlEjer}3`, (req, res) => {
  const query = "SELECT p.name AS product_name, c.name AS category_name FROM products p INNER JOIN categories c ON p.category_id = c.id";

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      return res.status(500).send('Error en el servidor');
    }
    console.log(res.json(results)); 
  });
}); 

// 4.Obtener una lista de los usuarios que se han registrado en el sistema pero que nunca han realizado una compra.
app.get(`/${urllev}1/${urlEjer}4`, (req, res) => {
  const query = "SELECT u.name,u.email FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.user_id IS NULL  ";

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      return res.status(500).send('Error en el servidor');
    }
    console.log(res.json(results)); 
  });
}); 

// 5.Calcular el monto total gastado de un usuario (el que ustedes elijan) en toda su historia, mostrando el nombre del usuario y el total.
app.get(`/${urllev}1/${urlEjer}5`, (req, res) => {
  const query = "SELECT u.name, SUM(o.total_amount) AS total_gastado FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id HAVING u.id = '1' ";

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      return res.status(500).send('Error en el servidor');
    }
    console.log(res.json(results)); 
  });
}); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`corriendo en el puerto: http://localhost:${PORT}/`)
})