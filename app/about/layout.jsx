import React from "react";

export default function layout({ children }) {
  return (
    <>
      <div className="menu">
        <h1>About menu</h1>
      </div>
      {children}
    </>
  );
}
