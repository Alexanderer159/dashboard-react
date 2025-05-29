import SearchBar from "./search-bar/search-bar";
import { Route, Routes, Link } from "react-router-dom";
import ListGenerator from './Generador-Lista';
import FormComponent from './modal-bootstrap/form-component';
import ModalForUpdate from "./modal-bootstrap/update-project-modal";

const DashboardLayout = (props) => {
  const {listaDatos, setlistas,  
    totalbudget, onDelete} = props
  
  return (
    <div className="container-fluid" id="app-container">
      <SearchBar companyName="Nombre Compañia" sessionStatus="Sign Out" />

      <div className="row">
        <div className="col-2 p-0">
          <nav className="sidebar d-flex flex-column vh-100 text-white p-3 nav flex-column">
            <Link to="/new">
              <button type="button" className="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#modalFormProject">
                New Project
              </button>
            </Link>
            <Link to="/dashboard">
              <p className="nav-link">Dashboard</p>
            </Link>

            {["Orders", "Products", "Customers", "Reports", "Integrations"].map((item, i) => (
              <a key={i} className="nav-link" href="#">{item}</a>
            ))}
            <h6 className="text-uppercase text-white-50 mt-4 small">Saved Reports</h6>
            {["Current Month", "Last Quarter", "Social Engagement", "Year-end Sale"].map((item, i) => (
              <a key={i} className="nav-link" href="#">{item}</a>
            ))}
          </nav>
        </div>

        <div className="col-10">
          <div className="row mt-4">
            <DashboardCard bg="primary" label="All Products" value="5,000" />
            <DashboardCard bg="success" label="Team Members" value="35" />
            <DashboardCard bg="warning" label="Budget" value={`${totalbudget.toLocaleString()}`} />
            <DashboardCard bg="danger" label="New Customers" value="120" />
          </div>

            <Routes>
              <Route path= "/" element={<ListGenerator listaDatos={listaDatos} setlista={setlistas} handleDelete={onDelete} />} />
              <Route path= "/dashboard" element={<ListGenerator listaDatos={listaDatos} setlista={setlistas} handleDelete={onDelete} />} />
              <Route path="/new" element={<FormComponent totalbudget={totalbudget} setlistas={setlistas}/>} />
              <Route path="/editItemId" element={<ModalForUpdate />} />
              <Route render={() => <h1>Not Found ☹️</h1>} />
            </Routes>

        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ bg, label, value }) => (
  <div className="col-md-3 mb-4">
    <div className={`card text-white bg-${bg} shadow h-100 py-2`}>
      <div className="card-body d-flex justify-content-between">
        <div><div className="text-white-50 small">{label}</div><div className="h5 fw-bold">{value}</div></div>
        <i className="fs-2 fas fa-box" />
      </div>
    </div>
  </div>
);

export default DashboardLayout;
