import React from "react";

function Detailsupdater(props) {
  return (
    <div>
      <p> name - {props.daa.name}</p>
      <p> height - {props.daa.height}</p>
      <p>mass = {props.daa.mass}</p>
      <p> skin color - {props.daa.skin_color}</p>
    </div>
  );
}

export default Detailsupdater;
