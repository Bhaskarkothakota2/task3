import React, { useState, useEffect } from "react";
import axios from "axios";
import Detailsupdater from "./Detailsupdater";

function Task3() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");


 
 

  let inputhandler = (e) => {
    setInput(e.target.value);
  };
  console.log("Input Value is :::",input);

  async function getData() {
    // const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`);
    const res = await axios.get(`https://swapi.dev/api/people/${input}/`);
    setData(res.data);
    
  }
  console.log("Data:::",data);
  console.log(typeof  (data));


  let effecthandler = () => {
    getData();
  };

  useEffect(() => {
    
  }, []);


  return (
    <div>
      <div>
        <input type="text" placeholder="enter number here" onChange={inputhandler}></input> <br />
        <button onClick={effecthandler}  > Click me </button>
      </div>
       
       <div>
         {data && <Detailsupdater daa = {data}/>}
       </div>
    
    </div>
  );
}

export default Task3;
