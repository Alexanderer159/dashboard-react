import "./lista.css"

function Lista(props) {
  const handleDelete = ()=>{

  }

  return (
    <>
    <div className="item d-flex flex-row align-items-center m-2 p-3 fs-5 rounded-1">
      <p>{props.project}</p> 
      <p>{props.date}</p> 
      <p>{props.member}</p> 
      <p>{props.budget}</p> 
      <p>{props.status}</p> 
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Action
        </button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item">Descripción</button></li>
          <li><button className="dropdown-item" onClick={handleDelete}>Delete Project</button></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Lista
