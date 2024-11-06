import React from 'react';

function Sidebar({ open, children }) {
  return (
    <div className={`
      bg-dark-600 
      group 
      select-none 
      sticky 
      top-0 
      min-h-screen 
      transition-all 
      duration-300 
      ease-in-out
      ${open ? "w-[300px]" : "w-[50px]"}
    `}>
      <div className={`
        overflow-hidden
        transition-opacity
        duration-200
        ${!open ? "opacity-0" : "opacity-100"}
      `}>
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
