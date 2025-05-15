import NewProjectForm from './addProyect-form/form-for-project'
import './App.css'
import SearchBar from './search-bar/search-bar'
import ListGenerator from './Generador-Lista'

function App() {

  return (
    <>
      <div className='container-fluid' id="app-container">

        <SearchBar companyName="Nombre Compañia" sessionStatus="Sign Out"/>
        
        <div className='row'>
          <div className='col-2'>
            {/* Navbar */}
            Navbar
          </div>
          <div className='col-10'>
            {/* Componentes: cuadros de colores y zona de la lista en dos div con className row */}
            <div className='row'>
              Cuadros de colores
            </div>
            {/* <NewProjectForm/> */}
          <ListGenerator />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
