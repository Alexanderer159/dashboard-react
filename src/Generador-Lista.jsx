import Lista from "./lista"
import "./Generador-Lista.css"

function ListGenerator({listaDatos, setlista, handleDelete}) {  

  return (
    <>
      <div className="item d-flex flex-row align-items-center m-2 p-3 fs-5 rounded-1">
        <p>Project</p> 
        <p>Date</p> 
        <p>Member</p> 
        <p>Budget</p> 
        <p>Status</p> 
        <p>Action</p>
      </div>

      {listaDatos.map((props, index) => (
        <Lista 
          key={props.key} 
          project={props.project}
          date={props.date}
          member={props.member}
          budget={props.budget}
          status={props.status} 
          id={index} 
          description={props.description}
          handleDelete={handleDelete}
          setlista={setlista}
        />
      ))}
    </>
  );
}

export default ListGenerator