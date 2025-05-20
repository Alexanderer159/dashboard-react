import React, { useState } from "react";
import SearchBar from "./search-bar/search-bar";
import ListGenerator from "./Generador-Lista";

const DashboardLayout = () => {
  const [listaDatos, setListaDatos] = useState([]);
  const [budget, setBudget] = useState(100000);
  const [formData, setFormData] = useState({
    project: "", date: "", member: "", budget: "", status: ""
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const cost = parseFloat(formData.budget);
    if (budget < cost) return alert("Not enough budget!");

    setListaDatos([...listaDatos, { ...formData }]);
    setBudget(budget - cost);
    setFormData({ project: "", date: "", member: "", budget: "", status: "" });

    bootstrap.Modal.getInstance(document.getElementById("modalFormProject"))?.hide();
  };

  const handleDelete = id => {
    const refund = parseFloat(listaDatos[id].budget);
    setListaDatos(listaDatos.filter((_, i) => i !== id));
    setBudget(budget + refund);
  };

  return (
    <div className="container-fluid" id="app-container">
      <SearchBar companyName="Nombre Compañia" sessionStatus="Sign Out" />

      <div className="row">
        <div className="col-2 p-0">
          <nav className="sidebar d-flex flex-column vh-100 text-white p-3 nav flex-column">
            {["Dashboard", "Orders", "Products", "Customers", "Reports", "Integrations"].map((item, i) => (
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
            <DashboardCard bg="warning" label="Budget" value={`$${budget.toLocaleString()}`} />
            <DashboardCard bg="danger" label="New Customers" value="120" />
          </div>

          <ListGenerator listaDatos={listaDatos} handleDelete={handleDelete} />
        </div>
      </div>

      <div className="modal fade" id="modalFormProject" tabIndex="-1">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">New Project</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {["project", "date", "member", "budget", "status"].map((field, i) => (
                <input key={i} className="form-control mb-2"
                  type={field === "date" ? "date" : field === "budget" ? "number" : "text"}
                  name={field} placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]} onChange={handleChange} required />
              ))}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary">Save Project</button>
            </div>
          </form>
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
