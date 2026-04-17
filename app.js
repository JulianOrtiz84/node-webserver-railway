require('dotenv').config();

const express = require('express');
const app = express();            
const hbs = require('hbs');

const port = process.env.PORT;

//Servir contenido estativo
app.use( express.static('public'))
//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Julian Ortiz',
    titulo: 'Curso de Node'

  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Julian Ortiz',
    titulo: 'Curso de Node'
  });
});


app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Julian Ortiz',
    titulo: 'Curso de Node'
  });
});





// // Ruta para manejar todos los demás casos (404)
// app.use((req, res) => {
//   const requestedUrl = req.originalUrl;
//   res.status(404).sendFile(__dirname +'/public/404.html');
// });

// Iniciando el servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
