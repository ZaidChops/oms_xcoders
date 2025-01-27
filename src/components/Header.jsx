import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Student Enquiries"); 
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <Navbar
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          selectedPage={selectedPage}
        />
        <SideBar
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          sidebarRef={sidebarRef}
          setSelectedPage={setSelectedPage} 
                  />
      </header>
    </>
  );
};

export default Header;
