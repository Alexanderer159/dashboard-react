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
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Action
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item">Descripción</button></li>
          <li><button class="dropdown-item" onClick={handleDelete}>Delete Project</button></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Lista
