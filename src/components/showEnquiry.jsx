const showEnquiry = () => {
  return (
    <div className="absolute inset-1 z-30 bg-gray-300 flex justify-center">
      <div className="min-w-xl mx-4 my-2 p-4 flex flex-col bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            Enquiry Details
          </h2>
        </div>
        <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* <div>
            <div className="col-span-3 flex justify-between ">
              <label className=" text-sm font-medium text-gray-700">
                Name
              </label>
              <p className="flex justify-end items-center mx-2 text-md">Shailendra</p>
            </div>
            <div className="mt-4 border-t border-gray-200"></div>
          </div> */}

<div className="flex justify-between items-center col-span-2 border-b border-gray-100 px-4 py-2">
                {/* <div> */}
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">Shailendra Singh </p>
                {/* </div> */}
                {/* <div className="h-12 w-12 bg-indigo-100 rounded-full ">
                  user
                </div> */}
              </div>

              <div className="px-4 py-2">
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <p className="mt-1 text-lg">45635675437</p>
          </div>

          <div className="px-4 py-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <p className="mt-1 text-lg flex items-center">
              shailendra189@gmail.com
            </p>
          </div>
          
          <div className="p-4">
            <label className="block text-sm font-medium text-gray-700">
              Academic Qualification
            </label>
            <p className="mt-1 text-lg">BCA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default showEnquiry;
