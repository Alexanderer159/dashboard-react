import './input-field.css'

function InputField({inputType, id}){
  
  return(
    <>
      <input id={id} type={inputType} className='elementos-input'/>
    </>
  )
}

export default InputField