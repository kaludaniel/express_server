const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));
app.get('/quienessomos', (req, res) => res.send('Quienes somos'));
app.get('/Thisisme', (req, res) => res.send('This is me'));

app.get('/greet/:name', (req, res) => {
  var name = req.params.name;
  res.send(`hola ${name}`);
})
// app.get('/multiply/:n1/:n2', (req, res) => {
//   var n1 = req.params.n1;
//   var n2 = req.params.n2;
// res.send(n1 * n2 + '');
app.get('/multiplica/:par1/:par2', (req, res) => {

  var par1 = req.params.par1;

  var par2 = req.params.par2;
  if (isNaN(par1 * par2)) {
    console.log(par1, typeof par1);
    console.log(par2, typeof par2);
    res.send('numeros no validos')
  } else {

    res.send(par1 * par2 + '')
  }

});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.code(404)
  res.send(`
  ruta no valida.
  intenta acceder a:
   /multiplica/43/10
  
  `)
});

app.listen(3000, () => console.log('Servidor levantado en 3000'));