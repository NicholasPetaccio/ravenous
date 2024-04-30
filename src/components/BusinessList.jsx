import React from "react";
import Business from "./Business";

const BusinessList = ({ businesses }) => {
  return (
    <div className="business-list">
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
