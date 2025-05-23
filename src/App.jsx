import './App.css';
import { useEffect, useState } from 'react';
import DashboardLayout from './DashboardLayout';
import { traerLista, borrarRegistro } from './funciones-servidor/funciones-servidor.js'
// Aun sin usar actualzarRegistro de funciones-servidor

function App() {
  const dataLayout = {
    key: '',
    project: '',
    date: '',
    member: '',
    budget: '',
    status: '',
    description: ''
  }

  const [formData, setFormData] = useState(dataLayout);
  const [listas, setListas] = useState([]);
  const [totalBudget, setTotalBudget] = useState(100000);

  const handleDelete = (id) => {
    borrarRegistro(id)
    location.reload() // Solución Temporal Cutre
  };

  // const handleDelete = id => {
  //   const refund = parseFloat(listaDatos[id].budget);
  //   setListaDatos(listaDatos.filter((_, i) => i !== id));
  //   setBudget(budget + refund);
  // };

  const _budgetUpdater = () => {
    const cost = listas.reduce((acc, value)=>{
      return acc + value.budget;
    }, 0)
    setTotalBudget(totalBudget - cost);
  }

  useEffect(() => {
    const obtenerLista = async () => {
      const listaDesdeAPI = await traerLista();
      setListas(listaDesdeAPI);
    }
    obtenerLista();
  }, [])

  useEffect(()=>{
    console.log(listas);
    _budgetUpdater();
  }, [listas])

  return (
    <DashboardLayout listaDatos={listas} 
      obtenerLista={setListas}
      datosFormulario={formData} 
      obtenerDatos={setFormData}
      onDelete={handleDelete}
      totalbudget={totalBudget}
      setTotalBudget={setTotalBudget}
    />
  );
}

export default App;