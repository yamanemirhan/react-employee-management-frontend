import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import InputGroup from '../components/InputGroup';

export default function UpdateEmployee() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const { name, surname, email, type, birthday, salary } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/employees/${id}`, formData)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    async function updateEmployee() {
      await axios.put(`/api/employees/${id}`).then((res) => {
        setFormData(res.data);
      });
    }
    updateEmployee();
  }, [id]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-screen h-screen justify-center items-center bg-indigo-300 p-5 rounded-md shadow-xl shadow-gray-800"
      >
        <h3 className="text-2xl text-center">Update Employee</h3>
        <div className="flex gap-2">
          <InputGroup
            type="text"
            handleChange={handleChange}
            name="name"
            value={name || ''}
            className="formInput"
          />
          <InputGroup
            type="text"
            handleChange={handleChange}
            name="surname"
            value={surname || ''}
            className="formInput"
          />
        </div>
        <div>
          <InputGroup
            type="email"
            handleChange={handleChange}
            name="email"
            value={email || ''}
            className="formInput"
          />
        </div>
        <div>
          <InputGroup
            type="text"
            handleChange={handleChange}
            name="type"
            value={type || ''}
            className="formInput"
          />
        </div>
        <div>
          <InputGroup
            type="date"
            handleChange={handleChange}
            name="birthday"
            value={birthday || ''}
            className="formInput"
          />
        </div>
        <div>
          <InputGroup
            type="number"
            handleChange={handleChange}
            name="salary"
            value={salary || ''}
            className="formInput"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="formInput bg-blue-500 hover:bg-gray-200 hover:text-blue-500"
          >
            UPDATE EMPLOYEE
          </button>
        </div>
      </form>
    </div>
  );
}
