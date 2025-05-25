import { useEffect, useState } from "react"
import InputField from "../addProyect-form/input-field"
import { actualizarRegistro } from "../funciones-servidor/funciones-servidor"

function ModalForUpdate({elementId, dataFromAPI}){
  const { key, project, date, member, budget, status, description } = dataFromAPI

  const [newTitle, setNewTitle] = useState("")
  const [newDate, setNewDate] = useState("")
  const [newMember, setNewMember] = useState("")
  const [newBudget, setNewBudget] = useState("")
  const [newStatus, setNewStatus] = useState("")
  const [newDescription, setNewDescription] = useState("")

  const [changes, setChanges] = useState({
    key: key, 
    project: newTitle, 
    date: newDate, 
    member: newMember, 
    budget: newBudget, 
    status: newStatus, 
    description: newDescription})

  const handleChangeUpdateButton = (event) => {
    const { id, value } = event.target

    if(id === `updateTitle${elementId}`) setNewTitle(value)
    if(id === `updateDate${elementId}`) setNewDate(value)
    if(id === `updateMember${elementId}`) setNewMember(value)
    if(id === `updateBudget${elementId}`) setNewBudget(value)
    if(id === `updateStatus${elementId}`) setNewStatus(value)
    if(id === `updateDescription${elementId}`) setNewDescription(value)
  }

  const handleUpdate = () => {
    actualizarRegistro(elementId, changes)
    location.reload() // Solución Temporal Cutre
  }

  useEffect(()=>{
    setChanges({
      key: key, 
      project: !newTitle ? project : newTitle, 
      date: !newDate ? date : newDate, 
      member: !newMember ? member : newMember, 
      budget: !newBudget ? budget : newBudget, 
      status: !newStatus ? status : newStatus, 
      description: !newDescription ? description : newDescription
    })
  }, [key, newTitle, newDate, newMember, newBudget, newStatus, newDescription])

  useEffect(()=>{
    console.log(changes);
  }, [changes])

  return(
    <>
      <div className="modal fade" id={`modalToUpdateProject${elementId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`exampleModalLabel${elementId}`}>{`Working on: ${dataFromAPI.project}`}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <InputField inputType="text" id={`updateTitle${elementId}`} placeholder={project} value={newTitle} funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="date" id={`updateDate${elementId}`} placeholder={date} value={newDate} funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="text" id={`updateMember${elementId}`} placeholder={member} value={newMember} funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="number" id={`updateBudget${elementId}`} placeholder={budget} value={newBudget} funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="text" id={`updateStatus${elementId}`} placeholder={status} value={newStatus} funcionOnChange={handleChangeUpdateButton}/>
              <textarea className="input rounded mt-1" placeholder={description} value={newDescription} id={`updateDescription${elementId}`} onChange={handleChangeUpdateButton}></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalForUpdate