import NewProjectForm from '../addProyect-form/form-for-project.jsx'
import { useEffect, useState } from 'react'
import "./form-component.css"
import uuid from 'react-uuid'
import { crearRegistro, traerLista } from '../funciones-servidor/funciones-servidor.js'

function FormComponent ({totalbudget, setlistas}){
  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")
  const [fecha, setFecha] = useState("")
  const [budget, setBudget] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [key, setKey] = useState("");
    
  const uuidFromReactUUID = () => {
    const newUUID = uuid()
    setKey(newUUID)
  }

  const obtenerLista = async () => {
    const listaDesdeAPI = await traerLista();
    setlistas(listaDesdeAPI);
  }

  const resetButton = () => {
    setTitulo("")
    setAutor("")
    setFecha("")
    setBudget("")
    setDescripcion("")
  }

  const addLista = async () => {
    if(titulo === "" || fecha === "" || autor === "" || budget === "" || descripcion === "") return alert("Rellena todos los campos!");
    if(budget > totalbudget) return alert("No hay dinero! 😭");
    uuidFromReactUUID()
    const newProject = {
      key: key,
      project: titulo,
      date: fecha,
      member: autor,
      budget: budget,
      status: 'WIP',
      description: descripcion
    }
    
    await crearRegistro(newProject)
    await obtenerLista()
  };

  useEffect(()=>{
    uuidFromReactUUID()
  }, [])

  return(
    <>
          <div className="form-body">
            <NewProjectForm 
              titulo={titulo} obtenerTitulo={setTitulo}
              autor={autor} obtenerAutor={setAutor}
              fecha={fecha} obtenerFecha={setFecha}
              budget={budget} obtenerBudget={setBudget}
              descripcion={descripcion} obtenerDescripcion={setDescripcion}
            />
          </div>
          <div className="form-footer bg-dark">
            <div className='foot w-100 d-flex justify-content-center gap-3 align-items-center mt-3'>
              <button id='boton-enviar' className='rounded botones' onClick={addLista}>Enviar</button>
              <button id='boton-reset' className='rounded botones' onClick={resetButton}>Reset</button>
            </div>
          </div>
    </>
  )
}

export default FormComponent