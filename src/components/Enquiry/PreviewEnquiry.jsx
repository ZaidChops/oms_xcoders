
const PreviewEnquiry = ({ togglePrevModel, data }) => {
  return (
    <section className="preview-form">
      <div className="min-w-96 sm:max-w-xl md:max-w-4xl mx-auto mt-8 bg-gray-300 rounded-md shadow-sm -translate-y-0 duration-3000">
        <div className="p-6 flex justify-between items-center gap-2 rounded-t-md bg-gradient-to-r from-orange-300 to-yellow-300 ">
          <h2 className="text-lg font-semibold text-gray-700 capitalize">
            Student Enquiry Details
          </h2>
          <button
            onClick={togglePrevModel}
            className="h-8 w-8 rounded-full text-white bg-red-500 shadow-md"
          >
            X
          </button>
        </div>
        <div className="px-4 py-4 bg-white">
          <div className="px-4 py-4 grid justify-center grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(1,2fr)] md:grid-cols-[repeat(2,400px)] gap-4 ">
            <div className="flex justify-between items-center border-b border-gray-200 px-4 py-2 mx-4">
              <label className=" text-sm font-medium text-gray-700">
                Course Name
              </label>
              <p className="mt-1 text-sm font-medium text-blue-500 flex items-center justify-center">
                {data.courseName}
              </p>
            </div>
            <div className="flex justify-between items-center  border-b border-gray-200 px-4 py-2 mx-2">
              <label className=" text-sm font-medium text-gray-700">
                Course Category
              </label>
              <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
                {data.courseCategory}
              </p>
            </div>
            <div className="flex justify-between items-center  border-b border-gray-200 px-4 py-1 mx-2">
              <label className=" text-sm font-medium text-gray-700">
                Course Duration
              </label>
              <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
                {data.courseDuration}
              </p>
            </div>
            <div className="flex justify-between items-center  border-b border-gray-200 px-4 py-1 mx-2">
              <label className=" text-sm font-medium text-gray-700">
                Course Fees
              </label>
              <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
                {data.courseFee}
              </p>
            </div>
            <div className="flex justify-between items-center  border-b border-gray-200 px-4 py-1 mx-2">
              <label className=" text-sm font-medium text-gray-700">
                Finalize Fees
              </label>
              <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
                {data.finalizeFees}
              </p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 px-4 py-1 mx-2">
              <label className=" text-sm font-medium text-gray-700">
                Name of candidate
              </label>
              <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
                {data.name}
              </p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 px-4 py-1 mx-2">
              <label className=" text-sm font-medium text-gray-700">
                Email ID
              </label>
              <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
                {data.email}
              </p>
            </div>
            <div className="flex justify-between items-center gap-6  border-b border-gray-200 px-4 py-1 mx-2">
              <label className=" text-sm font-medium text-gray-700">
                Contact No.
              </label>
              <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
                {data.contact}
              </p>
            </div>
            <div className="flex justify-between items-center  border-b border-gray-200 px-4 py-1 mx-2">
              <label className=" text-sm font-medium text-gray-700">
                Academic Qualification
              </label>
              <p className="mt-1 text-base font-medium text-gray-900 flex items-center justify-center">
                {data.academicQualification}
              </p>
            </div>
            <div className="flex justify-between items-center gap-6  border-b border-gray-200 px-4 py-1 mx-2">
              <label className="text-sm font-medium text-gray-700">
                Year of Passing
              </label>
              <p className="mt-1 text-base font-medium text-gray-900 ">
                {data.yearOfPassing}
              </p>
            </div>
            <div className="flex justify-between items-center  border-b border-gray-200 px-4 py-1 mx-2">
              <label className="text-sm font-medium text-gray-700">
                Source of Enquiry
              </label>
              <p className="mt-1 text-base font-medium text-gray-900 ">
                {data.sourceOfEnquiry}
              </p>
            </div>
            <div className="flex justify-between items-center gap-6  border-b border-gray-200 px-4 py-1 mx-2">
              <label className="text-sm font-medium text-gray-700">
                Referral By
              </label>
              <p className="mt-1 text-base font-medium text-gray-900 ">
                {data.referralBy}
              </p>
            </div>
            <div className="flex justify-between items-center gap-6  border-b border-gray-200 px-4 py-1 mx-2">
              <label className="text-sm font-medium text-gray-700">
                Status
              </label>
              <p className="mt-1 text-base font-medium text-gray-900 ">
                {data.status}
              </p>
            </div>
            <div className="flex justify-between items-center gap-6  border-b border-gray-200 px-4 py-1 mx-2">
              <label className="text-sm font-medium text-gray-700">Demo</label>
              <p className="mt-1 text-base font-medium text-gray-900 ">
                {data.demo}
              </p>
            </div>
            <div className="flex justify-between items-center gap-6  border-b border-gray-200 px-4 py-1 mx-2">
              <label className=" text-sm font-medium text-gray-700">
                Follow Up Message
              </label>
              <p className="mt-1 text-base font-medium text-gray-900 ">
                {data.followUp}
              </p>
            </div>
          </div>
          <hr className="h-2 mx-8" />
          <div className="col-span-2 flex justify-end mt-12 pb-3">
            <button
              onClick={togglePrevModel}
              type="button"
              className="px-8 py-2.5 leading-5 font-medium text-red-600 transition-colors duration-300 transform bg-red-300 rounded-md hover:bg-red-200 focus:outline-none focus:bg-red-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewEnquiry;
