import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
useState;

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const sidebarRef = useRef(null);
const navbarRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !navbarRef.current.contains(event.target)) {
      setNavOpen(false);
      console.log("clicked outside");
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
        <Navbar navOpen={navOpen} setNavOpen={setNavOpen} navbarRef={navbarRef} />
        <SideBar navOpen={navOpen} setNavOpen={setNavOpen} sidebarRef={sidebarRef} />
      </header>
    </>
  );
};

export default Header;
