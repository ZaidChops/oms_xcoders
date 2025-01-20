import PropTypes from "prop-types";

const Navbar = ({ navOpen, setNavOpen, navbarRef }) => {
  return (
    <nav ref={navbarRef} className="">
      <div className="navbar fixed right-0 top-0 z-50 md:w-[calc(100%-256px)] w-full h-16 bg-[#FFFFFF] p-2 lg:px-5 lg:pl-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className={`menu-btn md:hidden 
                  `}
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <span className="material-symbols-rounded text-3xl md:hidden">
                {navOpen ? "close" : "menu"}
              </span>
            </button>
            {/* <a href="/" className="flex ms-2 md:me-24">
              <img src="https://xcodersit.com/assets/img/logo/whitelogo.png" width={120} height={60} alt="xcoderLogo" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                XCoder
              </span>
            </a> */}
            <h2 className="p-2 block font-semibold text-xl">Enquiries</h2>
          </div>
          {/* <div className="flex items-center">
            <div className="flex items-center ms-3">
              <button
                type="button"
                className="flex text-sm rounded-full focus:ring-gray-300"
              >
                <span className="material-symbols-rounded text-4xl text-gray-900 ">
                  account_circle
                </span>
                <img src="" alt="user photo" className="w-8 h-8 rounded-full" />
              </button>
            </div>
          </div> */}
        </div>

        {/* <a
              className="flex items-center justify-center hover:bg-gray-100 md:hidden"
              href="/"
            >
              <img
                src="https://xcodersit.com/assets/img/logo/whitelogo.png"
                alt="xcoders logo"
                width={160}
                height={60}
              />
            </a> */}
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func.isRequired,
  navbarRef: PropTypes.object.isRequired,
};

export default Navbar;
