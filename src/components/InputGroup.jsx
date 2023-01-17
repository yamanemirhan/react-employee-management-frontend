import React from 'react';

export default function InputGroup({ type, name, handleChange, value }) {
  console.log(value);
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={name.toUpperCase() + '...'}
      className="formInput"
    />
  );
}
