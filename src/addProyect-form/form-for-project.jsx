import './form-for-project.css'
import InputField from './input-field'
import ProjectCard from './project-card'

function NewProjectForm(props){
const {titulo, obtenerTitulo, 
  autor, obtenerAutor, 
  fecha, obtenerFecha, 
  budget, obtenerBudget,
  descripcion, obtenerDescripcion} = props

const handlerInputChange = (event)=>{
  const {id, value} = event.target
  if(id === "titulo-proyecto") obtenerTitulo(value)
  if(id === "usuario-proyecto") obtenerAutor(value)
  if(id === "fecha-proyecto") obtenerFecha(value)
  if(id === "budget-proyecto") obtenerBudget(value)
  if(id === "descripcion-proyecto") obtenerDescripcion(value)
}

  return(
    <>
      <div className="row d-flex justify-content-center align-items-center">

        <div className='col-sm-4 contenedores-formulario'>
          <InputField inputType="text" id="titulo-proyecto" placeholder="Title" value={titulo} funcionOnChange={handlerInputChange}/>
          <InputField inputType="text" id="usuario-proyecto" placeholder="Author" value={autor} funcionOnChange={handlerInputChange}/>
          <InputField inputType="date" id="fecha-proyecto" placeholder="Date" value={fecha} funcionOnChange={handlerInputChange}/>
          <InputField inputType="number" id="budget-proyecto" placeholder="Budget" value={budget} funcionOnChange={handlerInputChange}/>
          <textarea id="descripcion-proyecto" className='input rounded mt-1 border-0' placeholder="Description" value={descripcion} onChange={handlerInputChange}></textarea>
        </div>
        <div className='col-sm-8 d-flex justify-content-center align-items-center contenedores-formulario'>
          <ProjectCard tituloProyecto={titulo} autor={autor} fecha={fecha} presupuesto={budget} descripcion={descripcion}/>
        </div>

      </div>
    </>
  )
}

export default NewProjectForm