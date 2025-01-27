
import { NavLink } from "react-router-dom";

const SideBar = ({ navOpen, setNavOpen, sidebarRef, setSelectedPage }) => {
  const navItems = [
    {
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      label: "Enquires",
      link: "/enquires",
    },
    {
      label: "Courses",
      link: "/courses",
    },
    {
      label: "Trainers",
      link: "/trainers",
    },
    {
      label: "Admissions",
      link: "/admissions",
    },
  ];

  return (
    <aside className="relative">
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen p-2 space-y-2 w-64 inset-y-0 z-30 transition-transform text-black bg-white lg:translate-x-0 -translate-x-full rounded-[14px} shadow-custom ${
          navOpen ? "translate-x-0" : ""
        }`}
      >
        <div className="block mx-auto px-2 h-16">
          <img
            src="https://xcodersit.com/assets/img/logo/whitelogo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <hr />

        <div className="divide-y p-2">
          <ul className="pt-2 pb-4 space-y-1 text-base">
            {navItems.map(({ label, link }, key) => (
              <li key={key} className="">
                <NavLink
                  to={link}
                  onClick={() => {
                    setSelectedPage(label); 
                    setNavOpen(false);                   }}
                  className="flex items-center p-3 font-medium space-x-3 rounded-lg nav-link"
                >
                  <div className="flex items-center">
                    <span className="mx-3">{label}</span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`absolute -right-16 top-3 lg:-right-5 lg:hidden`}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <button className="rounded w-6 h-6 text-gray-800 transition hover:text-gray-800 hover:scale-110">
            <i className="fa-solid fa-bars text-3xl"></i>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
