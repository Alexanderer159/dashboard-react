import './App.css';
import { useEffect, useState } from 'react';
import DashboardLayout from './DashboardLayout';
import ListGenerator from './Generador-Lista';
import ModalComponent from './modal-bootstrap/modal-component';
import { traerLista, crearRegistro, actualizarRegistro, borrarRegistro } from './funciones-servidor/funciones-servidor.js'

function App() {
  const [formData, setFormData] = useState({
    key: '',
    project: '',
    date: '',
    member: '',
    budget: '',
    status: '',
    description: ''
  });

  const [listas, setListas] = useState([]);

  const handleDelete = (id) => {
    const filteredDataList = listas.filter((_, index) => index !== id);
    setListas(filteredDataList);
  };

  useEffect(() => {
    const obtenerLista = async () => {
      const listaDesdeAPI = await traerLista();
      setListas(listaDesdeAPI);
    }
    obtenerLista();
    console.log(listas);
    
  }, [listas])

  return (
    <DashboardLayout>
      <ListGenerator
        listaDatos={listas}
        setLista={setListas}
        handleDelete={handleDelete}
      />
      <ModalComponent
        datosFormulario={formData}
        obtenerDatos={setFormData}
        listaDatos={listas}
        obtenerLista={setListas}
      />
    </DashboardLayout>
  );
}

export default App;