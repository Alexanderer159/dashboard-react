import { useState } from "react"
import InputField from "../addProyect-form/input-field"
import { actualizarRegistro, traerLista } from "../funciones-servidor/funciones-servidor"

function ModalForUpdate({elementId, dataFromAPI, setlista}){
  const { key, project, date, member, budget, status, description } = dataFromAPI

  const [newTitle, setNewTitle] = useState(project)
  const [newDate, setNewDate] = useState(date)
  const [newMember, setNewMember] = useState(member)
  const [newBudget, setNewBudget] = useState(budget)
  const [newStatus, setNewStatus] = useState(status)
  const [newDescription, setNewDescription] = useState(description)

  const handleChangeUpdateButton = (event) => {
    const { id, value } = event.target

    if(id === `updateTitle${elementId}`) setNewTitle(value)
    if(id === `updateDate${elementId}`) setNewDate(value)
    if(id === `updateMember${elementId}`) setNewMember(value)
    if(id === `updateBudget${elementId}`) setNewBudget(value)
    if(id === `updateStatus${elementId}`) setNewStatus(value)
    if(id === `updateDescription${elementId}`) setNewDescription(value)
  }

  const obtenerLista = async () => {
    const listaDesdeAPI = await traerLista();
    setlista(listaDesdeAPI);
  }

  const handleUpdate = async () => {
    const changes = {
      key: key, 
      project: !newTitle ? project : newTitle, 
      date: !newDate ? date : newDate, 
      member: !newMember ? member : newMember, 
      budget: !newBudget ? budget : newBudget, 
      status: !newStatus ? status : newStatus, 
      description: !newDescription ? description : newDescription
    }

    await actualizarRegistro(elementId, changes)
    await obtenerLista()
  }

  return(
    <>
            <div>
              <h1 className="modal-title fs-5" id={`exampleModalLabel${elementId}`}>{`Working on: ${dataFromAPI.project}`}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div>
              <InputField inputType="text" id={`updateTitle${elementId}`} placeholder={project} value={newTitle || ""} funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="date" id={`updateDate${elementId}`} placeholder={date} value={newDate || ""} funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="text" id={`updateMember${elementId}`} placeholder={member} value={newMember || ""} funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="number" id={`updateBudget${elementId}`} placeholder={budget} value={newBudget || ""} funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="text" id={`updateStatus${elementId}`} placeholder={status} value={newStatus || ""} funcionOnChange={handleChangeUpdateButton}/>
              <textarea className="input rounded mt-1" placeholder={description} value={newDescription || ""} id={`updateDescription${elementId}`} onChange={handleChangeUpdateButton}></textarea>
            </div>
            <div>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Save changes</button>
            </div>
    </>
  )
}

export default ModalForUpdate