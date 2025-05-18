import Lista from "./lista"
import "./Generador-Lista.css"

function ListGenerator({listaDatos}) {

  return (
    <>
      <div className="form d-flex m-2">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalFormProject">
          New Project
        </button>
      </div>

      <div className="item d-flex flex-row align-items-center m-2 p-3 fs-5 rounded-1">
        <p>Project</p> 
        <p>Date</p> 
        <p>Member</p> 
        <p>Budget</p> 
        <p>Status</p> 
        <p>Action</p>
      </div>

      {listaDatos.map((props, index) => (<Lista key={index} {...props} />))}
    </>
  );
}

export default ListGenerator