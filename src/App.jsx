import './App.css'
import SearchBar from './search-bar/search-bar'
import ListGenerator from './Generador-Lista'
import ModalComponent from './modal-bootstrap/modal-component'
import { useState, useEffect } from 'react'

function App() {
  const [formData, setFormData] = useState({
    id: '',
    project: '',
    date: '',
    member: '',
    budget: '',
    status: '',
    description: ''
  });

  const [listas, setListas] = useState([]);

  useEffect(() => {
    console.log(listas);
  }, [listas]);

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
            <div className="row mt-4">
              <div className="col-md-3 mb-4">
                <div className="card text-white bg-primary shadow h-100 py-2">
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div>
                      <div className="text-white-50 small">All Products</div>
                      <div className="h5 mb-0 fw-bold">5,000</div>
                    </div>
                    <div className="fs-2">
                      <i className="fas fa-box"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4">
                <div className="card text-white bg-success shadow h-100 py-2">
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div>
                      <div className="text-white-50 small">Team Members</div>
                      <div className="h5 mb-0 fw-bold">35</div>
                    </div>
                    <div className="fs-2">
                      <i className="fas fa-users"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4">
                <div className="card text-white bg-warning shadow h-100 py-2">
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div>
                      <div className="text-white-50 small">Budget</div>
                      <div className="h5 mb-0 fw-bold">$100,000</div>
                    </div>
                    <div className="fs-2">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4">
                <div className="card text-white bg-danger shadow h-100 py-2">
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div>
                      <div className="text-white-50 small">New Customers</div>
                      <div className="h5 mb-0 fw-bold">120</div>
                    </div>
                    <div className="fs-2">
                      <i className="fas fa-user-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ListGenerator listaDatos={listas} />
            <ModalComponent
              datosFormulario={formData}
              obtenerDatos={setFormData}
              listaDatos={listas}
              obtenerLista={setListas}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
