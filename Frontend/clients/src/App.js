import React from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import RequestList from "./Components/RequestList";
import RequestForm from "./Components/RequestForm";


const App = () => {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<RequestList />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </Router>
  );
};
export default App;