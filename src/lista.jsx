import "./lista.css"

function Lista(props) {

  return (
    <>
    <div className="item d-flex flex-row align-items-center m-2 p-3 fs-5 rounded-1">
      <p>{props.project}</p> 
      <p>{props.date}</p> 
      <p>{props.member}</p> 
      <p>{`${props.budget} $`}</p> 
      <p>{props.status}</p> 
      <p className="action">{props.action}</p>
    </div>
    </>
  )
}

export default Lista
