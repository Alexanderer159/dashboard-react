import { useState } from 'react'
import './form-for-project.css'
import InputField from './input-field'
import ProjectCard from './project-card'

function NewProjectForm(){
const [titulo, setTitulo] = useState("")
const [autor, setAutor] = useState("")
const [budget, setBudget] = useState("")
const [descripcion, setDescripcion] = useState("")

const handlerInputChange = (event)=>{
  const {id, value} = event.target
  if(id === "titulo-proyecto") setTitulo(value)
  if(id === "usuario-proyecto") setAutor(value)
  if(id === "budget-proyecto") setBudget(value)
  if(id === "descripcion-proyecto") setDescripcion(value)
}

const resetButton = () => {
  setTitulo("")
  setAutor("")
  setBudget("")
  setDescripcion("")
}

  return(
    <>
      <div className="row d-flex justify-content-center align-items-center">

        <div className='col-sm-4 contenedores-formulario'>
          <InputField inputType="text" id="titulo-proyecto" placeholder="Título" value={titulo} funcionOnChange={handlerInputChange}/>
          <InputField inputType="text" id="usuario-proyecto" placeholder="Usuario" value={autor} funcionOnChange={handlerInputChange}/>
          <InputField inputType="number" id="budget-proyecto" placeholder="Presupuesto (5000)" value={budget} funcionOnChange={handlerInputChange}/>
          <textarea id="descripcion-proyecto" className='elementos-input rounded mt-1' placeholder="Describe el proyecto" value={descripcion} onChange={handlerInputChange}></textarea>
          <div className='w-100 d-flex justify-content-center gap-3 align-items-center mt-3'>
            <button id='boton-enviar' className='rounded botones'>Enviar</button>
            <button id='boton-reset' className='rounded botones' onClick={resetButton}>Reset</button>
          </div>
        </div>
        <div className='col-sm-8 p-4 d-flex justify-content-center align-items-center contenedores-formulario'>
          <ProjectCard tituloProyecto={titulo} autor={autor} presupuesto={budget} descripcion={descripcion}/>
        </div>

      </div>
    </>
  )
}

export default NewProjectForm