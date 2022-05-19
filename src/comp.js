// import React, { useState, useEffect } from "react";
// import "./App.css";
// import axios from "axios";
// import Comp from "./comp";

// function App() {
//   // let [loading, setLoading] = useState(false);
//   let [posts, setPosts] = useState([]);
//   let [response, setResponse] = useState('');
//   let [input, setInput] = useState('');
//   let [input_dat, setInputdata] = useState('');

//   useEffect(() => {
//     const loadPosts = async () => {
//       // setLoading(true);
//       response = await axios.get(
//         `https://www.googleapis.com/books/v1/volumes?q=${input}`
//       );
//       setPosts(response.data);
//       console.log(response.data)
//       // setLoading(false);
//     };

//     // loadPosts();
//   }, [input]);
  
//   const inputTargethandler = (e) => {
//      setInputdata(e.target.value)
//      console.log(input_dat)
//   }
//   const searchhandler = () => {
//     setInput(input_dat)
//     console.log("testing")
//     setResponse(response)
    
//  }

//   return (
//     <div className="App">
     
//      <label>Seacrh here</label>
//      <input onChange={inputTargethandler}></input>
//      <button onClick={searchhandler}>click here to search</button>
//      <h5></h5>

     
// {/* <ul>
//      {posts.map(data=>{
//        <Comp data={data} />
//      })}

//  </ul>     */}

//     </div>
//   );
// }

// export default App;

