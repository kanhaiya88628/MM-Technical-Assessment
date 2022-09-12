import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllUser from "./Components/AllUser.js";
import EachUser from "./Components/EachUser.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AllUser />} />
          <Route exact path="/users/:id" element={<EachUser />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
//function eachuser() {
  
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }