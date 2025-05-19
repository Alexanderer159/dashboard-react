import './App.css';
import { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import ListGenerator from './Generador-Lista';
import ModalComponent from './modal-bootstrap/modal-component';

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
