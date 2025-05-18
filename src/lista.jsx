import "./lista.css"

function Lista({project, date, member, budget, status, id, handleDelete}) {

  return (
    <>
    <div className="item d-flex flex-row align-items-center m-2 p-3 fs-5 rounded-1">
      <p>{project}</p> 
      <p>{date}</p> 
      <p>{member}</p> 
      <p>{budget}</p> 
      <p>{status}</p> 
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Action
        </button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item">Descripción</button></li>
          <li><button className="dropdown-item" onClick={() => handleDelete(id)}>Delete Project</button></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Lista
