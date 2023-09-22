const express = require('express');
const fs = require('fs');
const path = require('path'); // Importa el módulo 'path' para manejar rutas de archivos
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Ruta GET para mostrar los datos de los pedidos
app.get('/vite-project/pedido', (req, res) => {
    // Obtiene la ruta completa al archivo pedidos.json en el directorio 'server'
    const pedidosJsonPath = path.join(__dirname, 'pedidos.json');
  
    fs.readFile(pedidosJsonPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo JSON:', err);
        res.status(500).send('Error al obtener los pedidos');
        return;
      }
  
      let pedidos = [];
  
      try {
        pedidos = JSON.parse(data);
      } catch (parseError) {
        console.error('Error al analizar el archivo JSON:', parseError);
        res.status(500).send('Error al obtener los pedidos');
        return;
      }
  
      // Envía la data de los pedidos como respuesta en formato JSON
      res.json(pedidos);
    });
});

// Ruta GET principal
app.get('/', (req, res) => {
    res.send('Server Genium');
});



app.post('/vite-project/pedido', (req, res) => {
  const nombre = req.body.nombre;
  const tamano = req.body.tamano;
  const toppings = req.body.toppings;

  const nuevoPedido = {
    nombre,
    tamano,
    toppings,
  };

  // Obtiene la ruta completa al archivo pedidos.json en el directorio 'server'
  const pedidosJsonPath = path.join(__dirname, 'pedidos.json');

  fs.readFile(pedidosJsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      res.status(500).send('Error al obtener los pedidos');
      return;
    }

    let pedidos = [];

    try {
      pedidos = JSON.parse(data);
    } catch (parseError) {
      console.error('Error al analizar el archivo JSON:', parseError);
      res.status(500).send('Error al obtener los pedidos');
      return;
    }

    pedidos.push(nuevoPedido);

    fs.writeFile(pedidosJsonPath, JSON.stringify(pedidos, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error al escribir en el archivo JSON:', writeErr);
        res.status(500).send('Error al procesar el pedido');
        return;
      }

      console.log('Pedido recibido y guardado correctamente');
      res.send('Pedido recibido y guardado correctamente');
    });
  });
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

