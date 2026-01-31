import React from 'react'

function Button({label= "Label", className = "", type = "submit"}) {
  return (
    <button className={`py-4 px-8 rounded-lg text-base font-medium hover:cursor-pointer ${className}`} type={type}>{label}</button>
  );
}

export default Button;