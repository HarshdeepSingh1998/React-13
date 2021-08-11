import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.src} alt={props.alt} />
      </div>
      <div className="bottom">
        <p clasName="info">{props.info}</p>
        <p className="info">{props.info}</p>
      </div>
    </div>
  );
}

export default Card;
