import React, { useState } from "react";

export const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: "1px solid gray", borderRadius: "8px", marginBottom: "10px" }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px",
          fontWeight: "bold",
        }}
      >
       {isOpen?"-":"+"} {title} 
      </div>
      {isOpen && (
        <div style={{ padding: "10px", backgroundColor: "#f8f9fa" }}>
          {content}
        </div>
      )}
    </div>
  );
};
