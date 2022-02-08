import React from "react";

const Frame = ({ img }) => {
  return (
    <div className="frame-container">
      <div className="frame">
        <img className="nft-vector" src={img} alt="nft" />
      </div>
    </div>
  );
};

export default Frame;
