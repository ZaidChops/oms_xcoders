import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header.jsx";
import Routers from "./routes/Routers.jsx";
// import { useEffect, useRef } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
      <div className="relative">
      <Router>
        <Header />
        <ToastContainer
              position="top-center"
              className="mt-24 "
              autoClose={3000}
            />
        <main
          className="content lg:ml-64 mt-20 overflow-auto"
         
        >
          <Routers />
        </main>
      </Router>
      </div>
    </>
  );
}

export default App;
