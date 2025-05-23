const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Almacenamiento en memoria
let projects = [];

// Obtener la lista de proyectos
app.get('/projects', (req, res) => {
  res.json(projects);
});

// Crear un nuevo proyecto
app.post('/projects', (req, res) => {
  const newProject = req.body;
  projects.push(newProject);
  res.status(201).json(newProject);
});

// Actualizar un proyecto por índice
app.put('/projects/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < projects.length) {
    projects[index] = req.body;
    res.json(projects[index]);
  } else {
    res.status(404).send('Proyecto no encontrado');
  }
});

// Eliminar un proyecto por índice
app.delete('/projects/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < projects.length) {
    const deletedProject = projects.splice(index, 1);
    res.json(deletedProject);
  } else {
    res.status(404).send('Proyecto no encontrado');
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
