import React from 'react'

function Button({label= "Label", className = ""}) {
  return (
    <button className={`py-4 px-8 rounded-lg text-base font-medium hover:cursor-pointer ${className}`}>{label}</button>
  );
}

export default Button;