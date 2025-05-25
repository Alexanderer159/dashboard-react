import { useEffect, useState } from "react"
import "./lista.css"
import ModalForUpdate from "./modal-bootstrap/update-project-modal"
 import { traerElementoPorId } from "./funciones-servidor/funciones-servidor"

function Lista({project, date, member, budget, status, id, description, handleDelete}) {
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
    <ModalForUpdate elementId={id} dataFromAPI={individualData}/>
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
            <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target={`#modalToUpdateProject${id}`}>
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
