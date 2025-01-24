import { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [toggleProfilePopup, setToggleProfilePopup] = useState(false);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setToggleProfilePopup(false);
        // console.log("clicked outside");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="">
      <div className="navbar fixed top-0 left-0 right-0 lg:ml-60 z-20 max-w-screen-full px-8 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Enquiry</span>
              <h2 className="block font-semibold text-xl p-2">
                Student Enquiries
              </h2>
            </a>
          </div>

          <div
            ref={profileMenuRef}
            className="md:flex md:items-center md:gap-12"
          >
            <div className="md:relative md:block">
              <button
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                onClick={() => setToggleProfilePopup(!toggleProfilePopup)}
              >
                <span className="sr-only">Toggle dashboard menu</span>

                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="size-10 object-cover"
                />
              </button>

              <div
                className={`absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg ${
                  !toggleProfilePopup ? "hidden" : ""
                } `}
                role="menu"
              >
                <div className="p-2">
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    My profile
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Team settings
                  </a>
                </div>

                <div className="p-2">
                  <button
                    type="button"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    role="menuitem"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;










