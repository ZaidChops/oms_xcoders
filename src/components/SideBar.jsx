import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const SideBar = ({ navOpen, setNavOpen, sidebarRef }) => {
  const lastActiveLink = useRef(null);

  const navItems = [
    {
      label: "Dashboard",

      link: "/dashboard",
      className: "nav-link",
      ref: lastActiveLink,
    },
    {
      label: "Courses",
      link: "/courses",
      className: "nav-link",
    },
    {
      label: "Enquires",
      link: "/enquires",
      className: "nav-link",
    },
    {
      label: "Trainers",
      link: "/trainers",
      className: "nav-link",
    },
    {
      label: "Admissions",
      link: "/admissions",
      className: "nav-link",
    },
  ];

  // const activeCurrentLink = (event) => {
  //   event.preventDefault();
  //   setNavOpen(false);
  //   // console.log(event.currentTarget)

  //   if (lastActiveLink.current) {
  //     lastActiveLink.current.classList.remove("active");
  //   }

  //   const target = event.currentTarget;
  //   target.classList.add("active");

  //   lastActiveLink.current = target;
  // };

  useEffect(() => {
    const initialActive = document.querySelector(".nav-link.active");
    if (initialActive) {
      lastActiveLink.current = initialActive;
    }
  }, []);

  return (
    <>
      <aside>
        <div
          ref={sidebarRef}
          id="sidebar"
          className={`fixed top-0 left-0 z-10 sm:w-64 w-64 h-screen inset-y-0 transition-transform -translate-x-full shadow-sm rounded-e-md
       text-black bg-white border-r border-gray-200 md:translate-x-0  ${
         navOpen ? "translate-x-0" : ""
       } `}
        >
          <div className="h-full px-3 py-4 overflow-y-auto ">
            <a className="flex items-center justify-center" href="/">
            <img
              src="https://xcodersit.com/assets/img/logo/whitelogo.png"
              alt="xcoders logo"
              width={200}
              height={60}
              className=""
            />
            {/* <span className="self-center text-xl font-semibold text-white whitespace-nowrap">Xcoder</span> */}
          </a>
          
            <ul className="space-y-2 mt-12 font-normal">
              {navItems.map(({ label, link, className, ref }, key) => (
                <li key={key}>
                  <NavLink
                    to={link}
                    ref={ref}
                    className={className}
                    // activeclassName="active"
                    onClick={() => setNavOpen(false)}
                    // onClick={(event) => activeCurrentLink(event)}
                  >
                    <span className="ms-3"><i>
                      </i>{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};
SideBar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func.isRequired,
  sidebarRef: PropTypes.object.isRequired,
};

export default SideBar;


