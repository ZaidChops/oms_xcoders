const AddEnquiry = ({ toggleModel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="enquiry-form">
        <div
          className={`max-w-96 sm:max-w-xl md:max-w-4xl mx-auto mt-6 bg-white rounded-md shadow-md duration-1000`}
        >
          <div className="p-6 flex justify-between items-center gap-2 rounded-t-md bg-gradient-to-r from-orange-300 to-yellow-300 ">
            <h2 className="text-lg font-semibold text-gray-600 capitalize">
              Add Enquiry
            </h2>
            <button
              onClick={toggleModel}
              className="h-8 w-8 rounded-full text-white bg-red-500 shadow-md"
            >
              X
            </button>
          </div>

          <form onSubmit={handleSubmit} className="px-8 py-4">
            <div
              className="grid grid-cols-1 gap-6 mt-4 
           sm:grid-cols-2 md:grid-cols-3 "
            >
              <div>
                <label className="text-gray-600 text-sm" htmlFor="courseName">
                  Course Name<sup>*</sup>
                </label>
                <select
                  id="courseCategory"
                  name="courseCategory"
                  className="block w-full h-10 py-2 px-4 mt-2
                 text-gray-600  border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                >
                  <option defaultValue="Select Category">
                    Select Course
                  </option>
                  <option value="Fullstack Development">
                    Fullstack Development (MERN/ MEAN)
                  </option>
                  <option value="Frontend Development (ReactJS/ AngularJS)">Frontend Development (ReactJS/ AngularJS)</option>
                  <option value="Backend Development (ExpressJS/NodeJS)">Backend Development (ExpressJS/NodeJS)</option>
                  <option value="Data Analytics, Data Science & Business Analytics">Data Analytics, Data Science & Business Analytics</option>
                  
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </div>
              <div>
                <label className="text-gray-600" htmlFor="courseCategory">
                  Course Categories<sup>*</sup>
                </label>
                <select
                  id="courseCategory"
                  name="courseCategory"
                  className="block w-full h-10 py-2 px-4 mt-2
                 text-gray-600  border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                >
                  <option defaultValue="Select Category">
                    Select Category
                  </option>
                  <option value="Job Guaranted Program">
                    Job Guaranted Program
                  </option>
                  <option value="MNC Expert Program">MNC Expert Program</option>
                  <option value="Mastery Program">Mastery Program</option>
                  <option value="Foundation Program">Foundation Program</option>
                  <option value="IPB Program">IPB Program</option>
                  <option value="Crash Courses">Crash Courses</option>
                </select>
              </div>
              <div>
                <label className="text-gray-600" htmlFor="courseFee">
                  Course Fee<sup>*</sup>
                </label>
                <input
                  id="courseFee"
                  name="courseFee"
                  type="text"
                  placeholder="INR.35999"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>

              <div>
                <label className="text-gray-600" htmlFor="finalizeFees">
                  Finalize Fees<sup>*</sup>
                </label>
                <input
                  id="finalizeFees"
                  name="finalizeFees"
                  type="text"
                  placeholder="finalized fees"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="studentName">
                  Name of the candidate<sup>*</sup>
                </label>
                <input
                  id="studentName"
                  type="text"
                  name="studentName"
                  placeholder="student name"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 
                bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="studentEmail">
                  Email Id<sup>*</sup>
                </label>
                <input
                  id="studentEmail"
                  name="studentEmail"
                  type="text"
                  placeholder="email id"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300
               focus:ring-opacity-20  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="studentContactNo">
                  Contact Number<sup>*</sup>
                </label>
                <input
                  id="studentContactNo"
                  name="studentContactNo"
                  type="text"
                  placeholder="+91 | Mobile Number"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300
               focus:ring-opacity-20  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-600"
                  htmlFor="studentAcademicQualification"
                >
                  Academic Qualification
                </label>
                <input
                  id="studentAcademicQualification"
                  name="studentAcademicQualification"
                  type="text"
                  placeholder="qualification"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>

              <div>
                <label className="text-gray-600" htmlFor="yearOfPassing">
                  Year of Passing
                </label>
                <input
                  id="yearOfPassing"
                  name="yearOfPassing"
                  type="text"
                  placeholder="passing year"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>
              {/* <div>
                <label className="text-gray-600" htmlFor="yearOfPassing">
                  Marks Obtained
                </label>
                <input
                  id="yearOfPassing"
                  name="yearOfPassing"
                  type="text"
                  placeholder="marks"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div> */}

              <div>
                <label className="text-gray-600" htmlFor="sourceOfEnquiry">
                  Source of Enquiry
                </label>
                <input
                  id="sourceOfEnquiry"
                  name="sourceOfEnquiry"
                  type="text"
                  placeholder="source name"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300
               focus:ring-opacity-20  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="referralBy">
                  Referral By
                </label>
                <input
                  id="referralBy"
                  name="referralBy"
                  type="text"
                  placeholder="person name"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="status">
                  Enquiry Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="block w-full h-10 py-2 px-4 mt-2 text-gray-600  border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                >
                  <option defaultValue="Select Category">Select status</option>
                  <option value="interested">Interested</option>
                  <option value="callback">Callback</option>
                  <option value="not interested">Not interested</option>
                </select>
              </div>
              <div>
                <label className="text-gray-600" htmlFor="demoClass">
                  Demo Classs<sup>*</sup>
                </label>
                <select
                  id="demoClass"
                  name="demoClass"
                  className="block w-full h-10 py-2 px-4 mt-2 text-gray-600  border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                >
                  <option defaultValue="Select Category">Select demo</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-gray-600" htmlFor="referralBy">
                  Follow up message
                </label>
                <input
                  id="referralBy"
                  name="referralBy"
                  type="text"
                  placeholder="Shailendra"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>
            </div>

            <div className="flex justify-end mt-12 pb-3">
              <div className="flex justify-between items-center gap-2">
                <button
                  onClick={toggleModel}
                  type="button"
                  className="px-8 py-2.5 leading-5 font-medium text-red-600 transition-colors duration-300 transform bg-red-300 rounded-md hover:bg-red-200 focus:outline-none focus:bg-red-200"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-12 py-2.5 leading-5 text-black/75 font-medium transition-colors duration-300
                   transform bg-gradient-to-r rounded-md bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-300"
                >
                  Add Enquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddEnquiry;
