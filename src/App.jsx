import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header.jsx";
import Routers from "./routes/Routers.jsx";
import { useEffect, useRef } from "react";

function App() {
  const contentRef = useRef(null);
  useEffect(() => {
    // Scroll to the top of the content area when the component mounts
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <div className="relative bg-gray-100">
      <Router>
        <Header />
        <main
          className="content md:ml-64 mt-24 overflow-auto"
          ref={contentRef}
        >
          <Routers />
        </main>
      </Router>
      </div>
    </>
  );
}

export default App;
