import { useEffect, useState } from "react"
import "./lista.css"
import ModalForUpdate from "./modal-bootstrap/update-project-modal"
 import { traerElementoPorId } from "./funciones-servidor/funciones-servidor"
 import { Link } from "react-router-dom";

function Lista({project, date, member, budget, status, id, description, handleDelete, setlista}) {
  const [individualData, setIndividualData] = useState({})

  useEffect(()=>{
    //Esto no hace falta, la solución era poner un id único a cada modal 🗿
    //Me he dado cuenta tarde D:
    const listElementByID = async (id) => {
      const data = await traerElementoPorId(id)
      setIndividualData(data);
    }
    listElementByID(id)
  }, [])

  return (
    <>
    <ModalForUpdate elementId={id} dataFromAPI={individualData} setlista={setlista}/>
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
      <Link to="/editItemId">
        <button className="dropdown-item">Edit Project</button>
      </Link> 
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
