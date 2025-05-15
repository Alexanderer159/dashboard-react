import './project-card.css'

function ProjectCard({tituloProyecto, autor, fecha, presupuesto, descripcion}){

  return (
    <>
      <div className='project-card'>
        <h3>{tituloProyecto || "Project's title"}</h3>
        <div className='d-flex flex-column gap-2 mt-3'>
          <h5 className='text-break'>{autor || "Author"}</h5>
          <h5 className='text-break'>{fecha || "Date"}</h5>
          <h5 className='text-break'>{presupuesto ? `${presupuesto} $` : "Budget"}</h5>
          <p className='text-break mt-2'>{descripcion || "Project's Description"}</p>    
        </div>
      </div>
    </>
  )
}

export default ProjectCard