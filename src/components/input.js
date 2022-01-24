import React from "react";

const input = () => {
  return (
    <input
      type={type}
      name={name}
      maxLength={4}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
    />
  );
};

export default input;
