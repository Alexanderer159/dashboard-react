import { useEffect, useState } from "react"
import InputField from "../addProyect-form/input-field"
import { actualizarRegistro } from "../funciones-servidor/funciones-servidor"

function ModalForUpdate({elementId, dataFromAPI}){

  const [updatedTitle, setUpdatedTitle] = useState("")
  const [updatedDate, setUpdatedDate] = useState("")
  const [updatedMember, setUpdatedMember] = useState("")
  const [updatedBudget, setUpdatedBudget] = useState("")
  const [updatedStatus, setUpdatedStatus] = useState("")
  const [updatedDescription, setUpdatedDescription] = useState("")
  const [changes, setChanges] = useState({})

  const handleChangeUpdateButton = (event) => {
    const { id, value } = event.target
    if(id === `updateTitle${elementId}`) setUpdatedTitle(value)
    if(id === `updateDate${elementId}`) setUpdatedDate(value)
    if(id === `updateMember${elementId}`) setUpdatedMember(value)
    if(id === `updateBudget${elementId}`) setUpdatedBudget(value)
    if(id === `updateStatus${elementId}`) setUpdatedStatus(value)
    if(id === `updateDescription${elementId}`) setUpdatedDescription(value)
    const toChange = {
      project: updatedTitle,
      date: updatedDate, member: updatedMember,
      budget: updatedBudget, status: updatedStatus,
      description: updatedDescription
    }
    setChanges(toChange)
  }

  useEffect(()=>{
    console.log(changes)
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
              <InputField inputType="text" id={`updateTitle${elementId}`} placeholder={dataFromAPI.project} value={updatedTitle} funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="date" id={`updateDate${elementId}`} placeholder={dataFromAPI.date} value={updatedDate} funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="text" id={`updateMember${elementId}`} placeholder={dataFromAPI.member} value={updatedMember} funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="number" id={`updateBudget${elementId}`} placeholder={dataFromAPI.budget} value={updatedBudget} funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="text" id={`updateStatus${elementId}`} placeholder={dataFromAPI.status} value={updatedStatus} funcionOnChange={handleChangeUpdateButton}/>
              <textarea className="input rounded mt-1" placeholder={dataFromAPI.description} value={updatedDescription} id={`updateDescription${elementId}`} onChange={handleChangeUpdateButton}></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalForUpdate