import NewProjectForm from './addProyect-form/form-for-project'
import './App.css'
import SearchBar from './search-bar/search-bar'

function App() {

//funcion para crear nuevos componentes "lista" con respectivos props
//<Lista nombre="Dashboard-React" date="6/6/6" member="Alejandro De Yavorsky" budget="10$" status="Ayuda" action="Delete"/>

  return (
    <>
      <div className='container-fluid' id="app-container">

        <SearchBar companyName="Nombre Compañia" sessionStatus="Sign Out"/>
        
        <div className='row'>
          <div className='col-2'>
            {/* Navbar */}
            asdfsdfsdfsdgsdgsdgsdsd
          </div>
          <div className='col-10'>
            {/* Componentes: cuadros de colores y zona de la lista en dos div con className row */}
            <div className='row'>
              asfasfadgsdhgsdhsdfsdfghsdgsdfgsgdfh
            </div>
            {/* <NewProjectForm/> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
