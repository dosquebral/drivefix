import React from "react";

const Heading = ({ subtitle, title }) => {
  return (
    <div className="space-y-3 max-w-sm text-center">
      <h3>{subtitle}</h3>
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
