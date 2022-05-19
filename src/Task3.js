import React, { useState } from "react";
import axios from "axios";
import Detailsupdater from "./Detailsupdater";

function Task3() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");


  let inputhandler = (e) => {
    setInput(e.target.value);
  };
  

  async function getData() {
    // const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`);
    const res = await axios.get(`https://swapi.dev/api/people/${input}/`);
    setData(res.data);
  }
  console.log("Data:::", data);
 


  return (
    <div>
      <div>
          <label>Character id </label>
        <input
          type="text"
          placeholder="enter number here"
          onChange={inputhandler}
        ></input>{" "}
        <br />
        <button onClick={() => getData()}> Click me </button>
      </div>

      <div>{data && <Detailsupdater dam={data} />}</div>
    </div>
  );
}

export default Task3;
