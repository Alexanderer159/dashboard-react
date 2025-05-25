import './App.css';
import { useEffect, useState } from 'react';
import DashboardLayout from './DashboardLayout';
import { traerLista, borrarRegistro } from './funciones-servidor/funciones-servidor.js'

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
  const initialBudget = 100000
  const [totalBudget, setTotalBudget] = useState(initialBudget);

  const _budgetUpdater = () => {
    setTotalBudget(initialBudget)
    const cost = listas.reduce((acc, value)=>{
      return acc + parseFloat(value.budget);
    }, 0)
    setTotalBudget((prevBudget) => prevBudget - cost);
  }
  
  const obtenerLista = async () => {
    const listaDesdeAPI = await traerLista();
    setListas(listaDesdeAPI);
  }

  const handleDelete = async (id) => {
    await borrarRegistro(id)
    console.log(`Deleted item with id: ${id}`);
    await obtenerLista();
  };

  useEffect(() => {
    obtenerLista();
  }, [])

  useEffect(() => {
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