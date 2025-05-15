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

      <Lista project="Project" date="Date" member="Member" budget="Budget" status="Status" action="Action" />

      {listaDatos.map((props, index) => (<Lista key={index} {...props} />))}
    </>
  );
}

export default ListGenerator