import React from "react";

const FormInput = ({ id, type, name, value, setValue }) => {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        placeholder={name}
        id={id}
        className="border rounded p-2 focus:outline-blue-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default FormInput;
