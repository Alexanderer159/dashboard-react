import './input-field.css'

function InputField({inputType, id, placeholder, funcionOnChange, value}){
  
  return(
    <>
      <input id={id} type={inputType} className='elementos-input rounded mt-1' placeholder={placeholder} value={value} onChange={funcionOnChange}/>
    </>
  )
}

export default InputField