import NewProjectForm from './addProyect-form/form-for-project'
import './App.css'
import SearchBar from './search-bar/search-bar'

function App() {
  return (
    <>
      <div className='container-fluid' id="app-container">
        <SearchBar companyName="Nombre Compañia" sessionStatus="Sign Out" />

        <div className='row'>
          <div className='col-2 p-0'>
            <div className="sidebar d-flex flex-column vh-100 text-white p-3">
              <nav className="nav nav-pills flex-column mb-auto">
                <a className="nav-link" href="#"><i className="bi bi-speedometer2"></i> Dashboard</a>
                <a className="nav-link text-white" href="#"><i className="fas fa-shopping-cart me-2"></i> Orders</a>
                <a className="nav-link text-white" href="#"><i className="fas fa-box me-2"></i> Products</a>
                <a className="nav-link text-white" href="#"><i className="fas fa-users me-2"></i> Customers</a>
                <a className="nav-link text-white" href="#"><i className="fas fa-chart-pie me-2"></i> Reports</a>
                <a className="nav-link text-white" href="#"><i className="fas fa-plug me-2"></i> Integrations</a>

                <h6 className="text-uppercase text-white-50 px-2 small mt-4">Saved Reports</h6>
                  <a className="nav-link text-white" href="#"><i className="fas fa-bookmark me-2"></i> Current Month</a>
                  <a className="nav-link text-white" href="#"><i className="fas fa-bookmark me-2"></i> Last Quarter</a>
                  <a className="nav-link text-white" href="#"><i className="fas fa-bookmark me-2"></i> Social Engagement</a>
                  <a className="nav-link text-white" href="#"><i className="fas fa-bookmark me-2"></i> Year-end Sale</a>
                </nav>
              </div>
            </div>

          <div className='col-10'>
            {/* Componentes: cuadros de colores y zona de la lista en dos div con className row */}
            <div className='row'>
              <p>Zona de contenido principal</p>
            </div>

            {/* <NewProjectForm/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
