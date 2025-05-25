import "./lista.css"
import ModalForUpdate from "./modal-bootstrap/update-project-modal"

function Lista({project, date, member, budget, status, id, description, handleDelete}) {

  return (
    <>
    <ModalForUpdate project={project} date={date} member={member} budget={budget} status={status} description={description}/>
    <div className="item d-flex flex-row align-items-center m-2 p-3 fs-5 rounded-1">
      <p>{project}</p> 
      <p>{date}</p> 
      <p>{member}</p> 
      <p>{budget}</p> 
      <p>{status}</p> 
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
          Action
        </button>
        <ul className="dropdown-menu">
          <li>
            <button title={description} className="dropdown-item">Descripción</button>
          </li>
          <li>
            <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#modalToUpdateProject">
              Editar
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleDelete(id)}>Delete Project</button>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Lista
