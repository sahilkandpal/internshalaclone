import React from "react";

const Card = ({ data }) => {
  const { imgUrl, title } = data;
  return (
    <div className="card">
      <img className="card-img" src={imgUrl} alt="" />
      <div className="card-text">{title}</div>
    </div>
  );
};

export default Card;
