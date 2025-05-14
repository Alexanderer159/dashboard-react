import './App.css'
import SearchBar from './search-bar/search-bar'

function App() {

//funcion para crear nuevos componentes "lista" con respectivos props
//<Lista nombre="Dashboard-React" date="6/6/6" member="Alejandro De Yavorsky" budget="10$" status="Ayuda" action="Delete"/>

  return (
    <>
      <div className='container-fluid'>

        <SearchBar companyName="Nombre Compañia" sessionStatus="Sign Out"/>
        
        <div className='row'>
          
        </div>
      </div>
    </>
  )
}

export default App
