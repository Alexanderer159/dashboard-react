import './search-bar.css'

function SearchBar(){

  return(
    <>
      <div className="row d-flex align-items-center componente-barra ">
        <div className="col-12 col-md-2">Company Name</div>
        <div className="col-12 col-md-9 p-1">
          <input type="search" className="search-input" placeholder="Search" name="" id="" />
        </div>
        <div className="col-12 col-md-1 text-end">
          Sign Out
        </div>
      </div>
    </>
  )
}

export default SearchBar