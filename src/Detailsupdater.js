import React from "react";

function Detailsupdater(props) {
  return (
    <div>

      <p> name - {props.dam.name}</p>
      <p> height - {props.dam.height}</p>
      <p>mass = {props.dam.mass}</p>
      <p> skin color - {props.dam.skin_color}</p>
      <p> birth_year - {props.dam.birth_year}</p>
    </div>
  );
}

export default Detailsupdater;
