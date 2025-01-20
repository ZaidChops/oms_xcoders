import { useState } from "react";
import CourseForm from "../courseComponents/CourseForm.jsx";

const Courses = () => {
  const [allCourses, setAllCourses] = useState([
    {
      courseId: 101,
      courseName: "Web Development Bootcamp",
      courseCategory: "Programming",
      courseDuration: "12 weeks",
      courseFee: 1500,
    },
    {
      courseId: 102,
      courseName: "Data Science Masterclass",
      courseCategory: "Data Science",
      courseDuration: "16 weeks",
      courseFee: 2000,
    },
    {
      courseId: 103,
      courseName: "Graphic Design Essentials",
      courseCategory: "Design",
      courseDuration: "8 weeks",
      courseFee: 1200,
    },
    {
      courseId: 104,
      courseName: "Digital Marketing Fundamentals",
      courseCategory: "Marketing",
      courseDuration: "10 weeks",
      courseFee: 1300,
    },
    {
      courseId: 105,
      courseName: "Artificial Intelligence & Machine Learning",
      courseCategory: "AI & ML",
      courseDuration: "20 weeks",
      courseFee: 2500,
    },
    {
      courseId: 106,
      courseName: "Cybersecurity Advanced Program",
      courseCategory: "Cybersecurity",
      courseDuration: "14 weeks",
      courseFee: 1800,
    },
    {
      courseId: 107,
      courseName: "Cloud Computing Professional",
      courseCategory: "Cloud Computing",
      courseDuration: "12 weeks",
      courseFee: 1700,
    },
    {
      courseId: 108,
      courseName: "Full Stack Development",
      courseCategory: "Programming",
      courseDuration: "24 weeks",
      courseFee: 2200,
    },
    {
      courseId: 109,
      courseName: "Game Development Basics",
      courseCategory: "Game Development",
      courseDuration: "10 weeks",
      courseFee: 2000,
    },
    {
      courseId: 110,
      courseName: "Blockchain for Beginners",
      courseCategory: "Blockchain",
      courseDuration: "18 weeks",
      courseFee: 3000,
    },
    {
      courseId: 111,
      courseName: "UI/UX Design Comprehensive",
      courseCategory: "Design",
      courseDuration: "14 weeks",
      courseFee: 1400,
    },
    {
      courseId: 112,
      courseName: "Big Data Analysis",
      courseCategory: "Data Science",
      courseDuration: "20 weeks",
      courseFee: 2900,
    },
    {
      courseId: 113,
      courseName: "Photography Essentials",
      courseCategory: "Art & Design",
      courseDuration: "6 weeks",
      courseFee: 1100,
    },
    {
      courseId: 114,
      courseName: "Mobile App Development",
      courseCategory: "Programming",
      courseDuration: "16 weeks",
      courseFee: 2100,
    },
    {
      courseId: 115,
      courseName: "Ethical Hacking Mastery",
      courseCategory: "Cybersecurity",
      courseDuration: "15 weeks",
      courseFee: 1800,
    },
    {
      courseId: 116,
      courseName: "Machine Learning for Professionals",
      courseCategory: "AI & ML",
      courseDuration: "22 weeks",
      courseFee: 2600,
    },
    {
      courseId: 117,
      courseName: "Digital Advertising Techniques",
      courseCategory: "Marketing",
      courseDuration: "8 weeks",
      courseFee: 1200,
    },
    {
      courseId: 118,
      courseName: "Networking Fundamentals",
      courseCategory: "IT",
      courseDuration: "12 weeks",
      courseFee: 1500,
    },
    {
      courseId: 119,
      courseName: "Robotics Engineering Basics",
      courseCategory: "Robotics",
      courseDuration: "20 weeks",
      courseFee: 3500,
    },
    {
      courseId: 120,
      courseName: "Cloud Security Specialist",
      courseCategory: "Cloud Computing",
      courseDuration: "16 weeks",
      courseFee: 2000,
    },
  ]);
  const [showModel, setShowModel] = useState(false);

  const toggleModel = () => setShowModel(!showModel);

  const handleAdd = () => {
    console.log("Popup form");
    toggleModel();
  };

  return (
    <section>
      <div className="relative mx-4 my-2 p-4 flex flex-col border-2 shadow-sm bg-white border-gray-200 border-opacity-50 rounded-lg">
        <div className="flex items-center justify-between p-2 gap-y-5">
          <h2 className="inline-block font-semibold text-xl">All Courses</h2>

          <div className="flex items-center justify-end">
            <button
              type="button"
              className="px-3 py-2 font-medium shadow-sm bg-yellow-400 text-gray-800 border rounded-lg gap-x-2 inline-flex items-center "
              onClick={handleAdd}
            >
              Add Course
            </button>
            {showModel && (
              <div
                className="fixed inset-0 pt-20 bg-gray-50 bg-opacity-50 z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <CourseForm
                  toggleModel={toggleModel}
                  setAllCourses={setAllCourses}
                />
              </div>
            )}
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col my-2">
          <div className="overflow-x-auto ">
            <div className="min-w-full inline-block align-middle">
              <div className="min-w-full max-h-[584px] border rounded-lg overflow-y-auto">
                <table className="divide-y divide-gray-200 min-w-full">
                  <thead className="bg-yellow-400">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Course Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Course Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Course Duration
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Course Fees
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 table-scroll">
                    {allCourses.map((course, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {course.courseId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          <span className="inline-block">
                            {course.courseName}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {course.courseCategory}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {course.courseDuration}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {course.courseFee}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <div className="flex justify-between gap-2 items-center">
                            <button
                              type="button"
                              className="inline-block text-sm font-semibold rounded-lg border border-transparent text-yellow-400 hover:text-yellow-600 focus:outline-none focus:text-yellow-600 disabled:opacity-50 disabled:pointer-events-none"
                            >
                              <i className="fa-solid fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              className="inline-block text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                            >
                              <i className="fa-regular fa-pen-to-square"></i>
                            </button>

                            {/* <button
                              type="button"
                              className="inline-block gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
                            >
                              <i className="fa-regular fa-pen-to-square"></i>
                            </button> */}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
