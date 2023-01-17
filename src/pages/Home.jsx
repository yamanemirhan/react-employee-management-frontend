import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RowDetails from '../components/RowDetails';
import InputGroup from '../components/InputGroup';

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post('/api/employees', formData)
      .then((res) => {
        setFormData({});
      })
      .catch((err) => console.log(err));
    await axios.get('/api/employees').then((res) => {
      setEmployees(res.data);
    });
  };

  const OnDelete = async (_id) => {
    if (window.confirm('Are you sure to delete this employee?')) {
      await axios.delete(`/api/employees/${_id}`).then((res) => {
        console.log(res.data.message);
      });
      await axios.get('/api/employees').then((res) => {
        setEmployees(res.data);
      });
    }
  };

  useEffect(() => {
    async function getEmployees() {
      await axios.get('/api/employees').then((res) => {
        setEmployees(res.data);
      });
    }
    getEmployees();
  }, []);

  return (
    <div className="flex gap-5 max-h-screen bg-black">
      {/* EMPLOYEE TABLE */}
      <div className="bg-blue-500 overflow-y-scroll overflow-x-auto min-h-screen">
        <table>
          <thead>
            <tr className="bg-gray-800">
              <th className="px-20 py-5">
                <span className="text-gray-200">First Name</span>
              </th>
              <th className="px-20 py-5">
                <span className="text-gray-200">Last Name</span>
              </th>
              <th className="px-20 py-5">
                <span className="text-gray-200">Email</span>
              </th>
              <th className="px-20 py-5">
                <span className="text-gray-200">Type</span>
              </th>
              <th className="px-20 py-5">
                <span className="text-gray-200">Birthday</span>
              </th>
              <th className="px-20 py-5">
                <span className="text-gray-200">Salary</span>
              </th>
              <th className="px-20 py-5">
                <span className="text-gray-200">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            {employees?.map((employee, i) => (
              <RowDetails {...employee} OnDelete={OnDelete} key={i} />
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD EMPLOYEE FORM */}
      <div className="bg-indigo-600 flex items-center justify-center flex-1">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-indigo-300 p-5 rounded-md shadow-xl shadow-gray-800"
        >
          <h3 className="text-2xl text-center">Add Employee</h3>
          <div className="flex gap-2">
            <InputGroup type="text" handleChange={handleChange} name="name" />
            <InputGroup
              type="text"
              handleChange={handleChange}
              name="surname"
              className="formInput"
            />
          </div>
          <div>
            <InputGroup
              type="email"
              handleChange={handleChange}
              name="email"
              className="formInput"
            />
          </div>
          <div>
            <InputGroup
              type="text"
              handleChange={handleChange}
              name="type"
              className="formInput"
            />
          </div>
          <div>
            <InputGroup
              type="date"
              handleChange={handleChange}
              name="birthday"
              className="formInput"
            />
          </div>
          <div>
            <InputGroup
              type="number"
              handleChange={handleChange}
              name="salary"
              className="formInput"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="formInput bg-green-500 hover:bg-gray-200 hover:text-green-500"
            >
              ADD EMPLOYEE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
