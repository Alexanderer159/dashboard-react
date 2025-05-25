import { useState } from "react"
import InputField from "../addProyect-form/input-field"

function ModalForUpdate({project, date, member, budget, status, description}){
  const [updatedTitle, setUpdatedTitle] = useState(project)
  const [updatedDate, setUpdatedDate] = useState(date)
  const [updatedMember, setUpdatedMember] = useState(member)
  const [updatedBudget, setUpdatedBudget] = useState(budget)
  const [updatedStatus, setUpdatedStatus] = useState(status)
  const [updatedDescription, setUpdatedDescription] = useState(description)

  const handleChangeUpdateButton = () => {

  }

  return(
    <>
      <div className="modal fade" id="modalToUpdateProject" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{`Working on: ${project}`}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <InputField inputType="text" id="updateTitle" placeholder={project} value="" funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="date" id="date" placeholder={date} value="" funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="text" id="updateMember" placeholder={member} value="" funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="number" id="updateBudget" placeholder={budget} value="" funcionOnChange={handleChangeUpdateButton}/>
              <InputField inputType="text" id="updateStatus" placeholder={status} value="" funcionOnChange={handleChangeUpdateButton}/>
              <textarea className="input rounded mt-1" placeholder={description} id="updateDescription" value="" onChange={handleChangeUpdateButton}></textarea>
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