
const CourseForm = ( {toggleModel}) => {
  return (
    <section className="course-form">
      <div className="max-w-2xl  mx-auto mt-6 bg-white rounded-md shadow-md">
        <div className="p-6 flex justify-between items-center gap-2 rounded-t-md bg-gradient-to-r from-orange-300 to-yellow-300 ">
          <h2 className="text-lg font-semibold text-gray-700 capitalize">
            Add Course
          </h2>
          <button
            onClick={toggleModel}
            className="h-8 w-8 rounded-full text-white bg-red-500 shadow-md"
          >
            X
          </button>
        </div>
        <form className="px-6 py-4">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
            <div>
              <label className="text-gray-700" htmlFor="courseName">
                Course Name
              </label>
              <input
                id="courseName"
                type="text"
                placeholder="Ex: MERN Stack"
                className="block w-full px-4 py-2 mt-2 text-gray-700 
                bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="courseCategories">
                Course Categories
              </label>
              {/* <select
              id="courseCategories"
              type="texts"
              className="block w-full px-4 py-2 mt-2 text-gray-700 
                bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            ></select> */}
              <select className="block w-full h-10 py-2 px-4 mt-2 text-gray-700  border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                <option defaultValue="Select Category">Select Category</option>
                <option value="Job Guaranted Program">
                  Job Guaranted Program
                </option>
                <option value="Mastery Program">Mastery Program</option>
                <option value="Foundation Program">Foundation Program</option>
                <option value="IPB Program">IPB Program</option>
                <option value="Crash Courses">Crash Courses</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700" htmlFor="courseDuration">
                Course Duration
              </label>
              <input
                id="courseDuration"
                type="text"
                placeholder="3 months"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300
               focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="courseFee">
                Course Fee
              </label>
              <input
                id="courseFee"
                type="number"
                placeholder="3999"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring no-arrows"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6 pb-3">
            <div className="flex justify-between items-center gap-2">
              <button onClick={toggleModel}
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
  );
};


export default CourseForm;
