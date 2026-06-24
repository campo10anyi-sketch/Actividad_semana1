const express = require('express');
const app = express();

app.use(express.json());

let reportes = [
  {
    id: 1,
    tipo: "Infraestructura",
    descripcion: "Daño en alumbrado público"
  }
  {
    id:2,
  "tipo": "Ambiente",
  "descripcion": "Acumulación de residuos en una zona comunitaria"
}
];

app.get('/reportes', (req, res) => {
  res.json(reportes);
});

app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000/reportes');
});