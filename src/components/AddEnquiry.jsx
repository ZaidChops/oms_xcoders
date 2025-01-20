// import { useState } from "react";

const AddEnquiry = ({toggleModel}) => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   contact: "",
  //   course: "",
  //   demo: "no",
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="enquiry-form">
        <div
          className={`max-w-4xl mx-auto mt-6 bg-white rounded-md shadow-md -translate-y-0 duration-1000`}
        >
          <div className="p-6 flex justify-between items-center gap-2 rounded-t-md bg-gradient-to-r from-orange-300 to-yellow-300 ">
            <h2 className="text-lg font-semibold text-gray-700 capitalize">
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
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label className="text-gray-700" htmlFor="studentName">
                  Name
                </label>
                <input
                  id="studentName"
                  type="text"
                  name="studentName"
                  // value={formData.name}
                  placeholder="Prakriti Kushwah"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 
                bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="studentCourse">
                  Course
                </label>
                <input
                  id="studentCourse"
                  name="studentCourse"
                  type="text"
                  placeholder="MERN Stack"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>
              <div>
                <label
                  className="text-gray-700"
                  htmlFor="studentAcademicQualification"
                >
                  Academic Qualification
                </label>
                <input
                  id="studentAcademicQualification"
                  name="studentAcademicQualification"
                  type="text"
                  placeholder="B. tech"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="studentEmail">
                  Email Address
                </label>
                <input
                  id="studentEmail"
                  name="studentEmail"
                  type="text"
                  placeholder="prakriti189@gmail.com"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300
               focus:ring-opacity-20  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="courseFee">
                  Course Fee
                </label>
                <input
                  id="courseFee"
                  name="courseFee"
                  type="text"
                  placeholder="4999"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="yearOfPassing">
                  Year of Passing
                </label>
                <input
                  id="yearOfPassing"
                  name="yearOfPassing"
                  type="text"
                  placeholder="2024"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="studentContactNo">
                  Contact No
                </label>
                <input
                  id="studentContactNo"
                  name="studentContactNo"
                  type="text"
                  placeholder="+919755839451"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300
               focus:ring-opacity-20  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="finalizeFees">
                  Finalize Fees
                </label>
                <input
                  id="finalizeFees"
                  name="finalizeFees"
                  type="text"
                  placeholder="3999"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="referralBy">
                  Referral By
                </label>
                <input
                  id="referralBy"
                  name="referralBy"
                  type="text"
                  placeholder="Shailendra"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="status">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="block w-full h-10 py-2 px-4 mt-2 text-gray-700  border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                >
                  <option defaultValue="Select Category">Select status</option>
                  <option value="interested">Interested</option>
                  <option value="callback">Callback</option>
                  <option value="not interested">Not interested</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700" htmlFor="demo">
                  Demo
                </label>
                <select
                  id="demo"
                  name="demo"
                  className="block w-full h-10 py-2 px-4 mt-2 text-gray-700  border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                >
                  <option defaultValue="Select Category">Select demo</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
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
                  className="px-12 py-2.5 leading-5 text-black/75 font-medium transition-colors duration-300 transform bg-gradient-to-r rounded-md bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-300"
                >
                  Save
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
