import './App.css';
import { useEffect, useState } from 'react';
import DashboardLayout from './DashboardLayout';
import { traerLista, borrarRegistro } from './funciones-servidor/funciones-servidor.js'
// Aun sin usar actualizarRegistro de funciones-servidor

function App() {
  // const dataLayout = {
  //   key: '',
  //   project: '',
  //   date: '',
  //   member: '',
  //   budget: '',
  //   status: '',
  //   description: ''
  // }

  const [listas, setListas] = useState([]);
  const [totalBudget, setTotalBudget] = useState(100000);

  const _budgetUpdater = () => {
    const cost = listas.reduce((acc, value)=>{
      return acc + parseFloat(value.budget);
    }, 0)
    setTotalBudget((prevBudget) => prevBudget - cost);
  }

  const handleDelete = async (id) => {
    await borrarRegistro(id)
    console.log(`Deleted item with id: ${id}`);
    location.reload() // Solución Temporal Cutre
  };

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
      setlistas={setListas}
      onDelete={handleDelete}
      totalbudget={totalBudget}
    />
  );
}

export default App;