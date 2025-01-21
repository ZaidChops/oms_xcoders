import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ navOpen, setNavOpen, sidebarRef }) => {
  const lastActiveLink = useRef(null);

  const navItems = [
    {
      label: "Dashboard",
      icon: <i className="fa-solid fa-user-pen"></i>,
      link: "/dashboard",
      className: "nav-link",
      ref: lastActiveLink,
    },
    {
      label: "Courses",
      icon: <i className="fa-solid fa-user-pen"></i>,
      link: "/courses",
      className: "nav-link",
    },
    {
      label: "Enquires",
      icon: <i className="fa-solid fa-user-pen"></i>,
      link: "/enquires",
      className: "nav-link",
    },
    {
      label: "Trainers",
      icon: <i className="fa-solid fa-user-pen"></i>,
      link: "/trainers",
      className: "nav-link",
    },
    {
      label: "Admissions",
      icon: <i className="fa-solid fa-user-pen"></i>,
      link: "/admissions",
      className: "nav-link",
    },
  ];

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
          className={`fixed top-0 left- 0 h-screen p-2 space-y-2 w-64 inset-y-0 z-30 transition-transform text-black bg-white -translate-x-full rounded-[14px}
            shadow-custom ${navOpen ? "translate-x-0": ""} `}
        >
          <div className="flex items-center px-2">
            <img
              src="https://xcodersit.com/assets/img/logo/whitelogo.png"
              alt=""
            />
          </div>
          <div className="divide-y p-2">
            <ul className="pt-2 pb-4 space-y-1 text-base">
              {navItems.map(({ label, icon, link, className, ref }, key) => (
                <li key={key} className="">
                  <NavLink
                    to={link}
                    rel={ref}
                    onClick={() => setNavOpen(false)}
                    className={`flex items-center p-3 space-x-3 rounded-lg ${className}`}
                    // className="flex items-center p-3 space-x-3 rounded-lg"
                  >
                    <span>{icon}</span>
                    <span className="mx-3">{label}</span>
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

export default SideBar;
