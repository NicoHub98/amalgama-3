import React from "react";

const Button = ({ name, fn, type }) => {
  return (
    <button
      onClick={fn && fn}
      type={type || "button"}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
    >
      {name}
    </button>
  );
};

export default Button;
