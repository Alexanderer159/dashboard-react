import './App.css'
import SearchBar from './search-bar/search-bar'

function App() {

//funcion para crear nuevos componentes "lista" con respectivos props
//<Lista nombre="Dashboard-React" date="6/6/6" member="Alejandro De Yavorsky" budget="10$" status="Ayuda" action="Delete"/>

  return (
    <>
      <div className='container-fluid'>
        <div className='w-100'>
          <SearchBar companyName="Nombre Compañia"/>
        </div>
        <div className='container-fluid'>
          <div className='col-4'>
            
          </div>
          <div className='col-8'>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
