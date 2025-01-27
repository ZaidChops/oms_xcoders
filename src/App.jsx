import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header.jsx";
import Routers from "./routes/Routers.jsx";
// import { useEffect, useRef } from "react";

function App() {

  return (
    <>
      <div className="relative">
      <Router>
        <Header />
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
