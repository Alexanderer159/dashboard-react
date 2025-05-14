import './project-card.css'

function ProjectCard({tituloProyecto, autor, presupuesto, descripcion}){

  return (
    <>
      <div className='project-card'>
        <h3>{tituloProyecto || "Título del proyecto"}</h3>
        <div className='d-flex flex-row align-items-center gap-3 mt-3'>
          <h5 className='text-break'>{autor || "Autor"}</h5>
          <h6 className='text-break'>{presupuesto ? `${presupuesto} $` : "00000 $"}</h6>  
        </div>
        <p className='text-break mt-2'>{descripcion || "Describe el proyecto"}</p>
      </div>
    </>
  )
}

export default ProjectCard