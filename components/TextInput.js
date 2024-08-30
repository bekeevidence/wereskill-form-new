import React from "react";

const TextInput = ({ label, placeholder, type, name, id, value, onChange }) => {
  return (
    <div className="flex relative flex-col">
      <label
        className="absolute rounded-sm text-xs -top-1 bg-white px-2 left-3"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        className="capitalize tracking-wide border my-1 outline-none p-2"
      />
    </div>
  );
};

export default TextInput;
