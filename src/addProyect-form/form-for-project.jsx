import './form-for-project.css'
import InputField from './input-field'

function NewProjectForm(){

  return(
    <>
      <div className="row">
        <div className='col-sm-4'>
          <InputField inputType="text" id="titulo-proyecto"/>
          <InputField inputType="text" id="usuario-proyecto"/>
          <InputField inputType="number" id="budget-proyecto"/>
          <InputField inputType="text" id="descripcion-proyecto"/>
        </div>
        <div className='col-sm-8'>
          
        </div>
      </div>
    </>
  )
}

export default NewProjectForm