import Lista from "./lista"
import { useState } from 'react'
import "./Generador-Lista.css"

function ListGenerator() {

const [formData, setFormData] = useState({
    project: '',
    date: '',
    member: '',
    budget: '',
    status: '',
    action: ''
  });

const handleChange = (input) => {
    setFormData({ ...formData, [input.target.name]: input.target.value });
  };

const [listas, setListas] = useState([]);

const addLista = () => {
    setListas([...listas, { ...formData }]);
    setFormData({
      project: '',
      date: '',
      member: '',
      budget: '',
      status: '',
      action: ''
    });
  };

  return (
    <>
      <div className="form d-flex m-2">
        <input name="project" placeholder="Project" value={formData.name} onChange={handleChange} required/>
        <input name="date" placeholder="Date" value={formData.date} onChange={handleChange} required/>
        <input name="member" placeholder="Member" value={formData.member} onChange={handleChange} required/>
        <input name="budget" placeholder="Budget" value={formData.budget} onChange={handleChange} required/>
        <input name="status" placeholder="Status" value={formData.status} onChange={handleChange} required/>
        <input name="action" placeholder="Action" value={formData.action} onChange={handleChange} required/>
        <button className="btn btn-dark" onClick={addLista}>Add Listing</button>
      </div>

      <Lista project="Project" date="Date" member="Name" budget="Budget" status="Status" action="Action" />

      {listas.map((props, index) => (<Lista key={index} {...props} />))}
    </>
  );
}

export default ListGenerator