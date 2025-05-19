import React from "react";
import SearchBar from "./search-bar/search-bar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container-fluid" id="app-container">
      <SearchBar companyName="Nombre Compañia" sessionStatus="Sign Out" />

      <div className="row">
        <div className="col-2 p-0">
          <div className="sidebar d-flex flex-column vh-100 text-white p-3">
            <nav className="nav nav-pills flex-column mb-auto">
              <a className="nav-link" href="#"><i className="bi bi-speedometer2"></i> Dashboard</a>
              <a className="nav-link" href="#"><i className="fas fa-shopping-cart me-2"></i> Orders</a>
              <a className="nav-link" href="#"><i className="fas fa-box me-2"></i> Products</a>
              <a className="nav-link" href="#"><i className="fas fa-users me-2"></i> Customers</a>
              <a className="nav-link" href="#"><i className="fas fa-chart-pie me-2"></i> Reports</a>
              <a className="nav-link" href="#"><i className="fas fa-plug me-2"></i> Integrations</a>

              <h6 className="text-uppercase text-white-50 px-2 small mt-4">Saved Reports</h6>
              <a className="nav-link" href="#"><i className="fas fa-bookmark me-2"></i> Current Month</a>
              <a className="nav-link" href="#"><i className="fas fa-bookmark me-2"></i> Last Quarter</a>
              <a className="nav-link" href="#"><i className="fas fa-bookmark me-2"></i> Social Engagement</a>
              <a className="nav-link" href="#"><i className="fas fa-bookmark me-2"></i> Year-end Sale</a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-10">
          <div className="row mt-4">
            <DashboardCard bg="primary" icon="fas fa-box" label="All Products" value="5,000" />
            <DashboardCard bg="success" icon="fas fa-users" label="Team Members" value="35" />
            <DashboardCard bg="warning" icon="fas fa-dollar-sign" label="Budget" value="$100,000" />
            <DashboardCard bg="danger" icon="fas fa-user-plus" label="New Customers" value="120" />
          </div>

          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ bg, icon, label, value }) => (
  <div className="col-md-3 mb-4">
    <div className={`card text-white bg-${bg} shadow h-100 py-2`}>
      <div className="card-body d-flex align-items-center justify-content-between">
        <div>
          <div className="text-white-50 small">{label}</div>
          <div className="h5 mb-0 fw-bold">{value}</div>
        </div>
        <div className="fs-2">
          <i className={icon}></i>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardLayout;
