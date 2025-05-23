import NewProjectForm from '../addProyect-form/form-for-project.jsx'
import { useEffect, useState } from 'react'
import "./modal-component.css"
import uuid from 'react-uuid'
import { crearRegistro } from '../funciones-servidor/funciones-servidor.js'

// props sin fetch: {obtenerDatos, listaDatos, obtenerLista, datosFormulario}
function ModalComponent ({ datosFormulario, obtenerDatos }){
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

  const resetButton = () => {
    setTitulo("")
    setAutor("")
    setFecha("")
    setBudget("")
    setDescripcion("")
  }

  const addLista = () => {
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
    
    obtenerDatos(newProject)
    console.log(datosFormulario);
    crearRegistro(datosFormulario)
    location.reload() // Solución Temporal Cutre
    // setDatosFormulario(newProject);  FORMA SIN API
    // obtenerLista([...listaDatos, newProject]);
  };

  useEffect(()=>{
    uuidFromReactUUID()
  }, [])

  return(
    <>
    <div className="modal fade" id="modalFormProject" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 rounded-5">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Create Project</h1>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <NewProjectForm 
              titulo={titulo} obtenerTitulo={setTitulo}
              autor={autor} obtenerAutor={setAutor}
              fecha={fecha} obtenerFecha={setFecha}
              budget={budget} obtenerBudget={setBudget}
              descripcion={descripcion} obtenerDescripcion={setDescripcion}
            />
          </div>
          <div className="modal-footer bg-dark">
            <div className='foot w-100 d-flex justify-content-center gap-3 align-items-center mt-3'>
              <button id='boton-enviar' className='rounded botones' onClick={addLista}>Enviar</button>
              <button id='boton-reset' className='rounded botones' onClick={resetButton}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ModalComponent