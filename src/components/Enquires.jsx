import { useState } from "react";
import AddEnquiry from "./AddEnquiry";

const Enquires = () => {
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "9876543210",
      course: "Web Development",
      courseFees: 1500,
      finalFees: 1400,
      status: "Pending",
      demo: "Yes",
      action: "Follow-up",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "8765432109",
      course: "Data Science",
      courseFees: 2000,
      finalFees: 2000,
      status: "Completed",
      demo: "Yes",
      action: "Archive",
    },
    {
      id: 3,
      name: "Robert Brown",
      email: "robert.brown@test.com",
      contact: "7654321098",
      course: "Graphic Design",
      courseFees: 1200,
      finalFees: 1100,
      status: "In Progress",
      demo: "Yes",
      action: "Follow-up",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@demo.com",
      contact: "6543210987",
      course: "Digital Marketing",
      courseFees: 1300,
      finalFees: 1250,
      status: "Pending",
      demo: "No",
      action: "Reschedule",
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael.wilson@xyz.com",
      contact: "5432109876",
      course: "AI & ML",
      courseFees: 2500,
      finalFees: 2400,
      status: "Completed",
      demo: "Yes",
      action: "Archive",
    },
    {
      id: 6,
      name: "Sarah Johnson",
      email: "sarah.johnson@abc.com",
      contact: "4321098765",
      course: "Cybersecurity",
      courseFees: 1800,
      finalFees: 1750,
      status: "In Progress",
      demo: "Yes",
      action: "Follow-up",
    },
    {
      id: 7,
      name: "Daniel Martinez",
      email: "daniel.m@sample.com",
      contact: "3210987654",
      course: "Cloud Computing",
      courseFees: 1700,
      finalFees: 1600,
      status: "Pending",
      demo: "No",
      action: "Follow-up",
    },
    {
      id: 8,
      name: "Lisa Taylor",
      email: "lisa.taylor@demo.com",
      contact: "2109876543",
      course: "Full Stack Developer",
      courseFees: 2200,
      finalFees: 2200,
      status: "Completed",
      demo: "Yes",
      action: "Archive",
    },
    {
      id: 9,
      name: "Kevin Moore",
      email: "kevin.moore@xyz.com",
      contact: "1098765432",
      course: "Game Development",
      courseFees: 2000,
      finalFees: 1950,
      status: "In Progress",
      demo: "Yes",
      action: "Reschedule",
    },
    {
      id: 10,
      name: "Laura Anderson",
      email: "laura.anderson@test.com",
      contact: "9876501234",
      course: "Blockchain",
      courseFees: 3000,
      finalFees: 2850,
      status: "Pending",
      demo: "Yes",
      action: "Follow-up",
    },
    {
      id: 11,
      name: "Sophia Lopez",
      email: "sophia.lopez@example.com",
      contact: "9876432100",
      course: "UI/UX Design",
      courseFees: 1400,
      finalFees: 1300,
      status: "Pending",
      demo: "No",
      action: "Follow-up",
    },
    {
      id: 12,
      name: "James Miller",
      email: "james.miller@demo.com",
      contact: "8765432100",
      course: "Data Analytics",
      courseFees: 1900,
      finalFees: 1850,
      status: "Completed",
      demo: "Yes",
      action: "Archive",
    },
    {
      id: 13,
      name: "Olivia Garcia",
      email: "olivia.garcia@xyz.com",
      contact: "7654321009",
      course: "Photography",
      courseFees: 1100,
      finalFees: 1050,
      status: "In Progress",
      demo: "Yes",
      action: "Follow-up",
    },
    {
      id: 14,
      name: "William Thompson",
      email: "william.thompson@abc.com",
      contact: "6543210098",
      course: "Mobile App Development",
      courseFees: 2100,
      finalFees: 2000,
      status: "Pending",
      demo: "Yes",
      action: "Follow-up",
    },
    {
      id: 15,
      name: "Emma White",
      email: "emma.white@sample.com",
      contact: "5432100987",
      course: "Machine Learning",
      courseFees: 2600,
      finalFees: 2500,
      status: "In Progress",
      demo: "No",
      action: "Reschedule",
    },
    {
      id: 16,
      name: "Liam Harris",
      email: "liam.harris@demo.com",
      contact: "4321099876",
      course: "Ethical Hacking",
      courseFees: 1800,
      finalFees: 1750,
      status: "Completed",
      demo: "Yes",
      action: "Archive",
    },
    {
      id: 17,
      name: "Mia Clark",
      email: "mia.clark@xyz.com",
      contact: "3210987653",
      course: "Big Data",
      courseFees: 3000,
      finalFees: 2900,
      status: "Pending",
      demo: "Yes",
      action: "Follow-up",
    },
    {
      id: 18,
      name: "Noah Scott",
      email: "noah.scott@test.com",
      contact: "2109876532",
      course: "Robotics",
      courseFees: 3500,
      finalFees: 3400,
      status: "In Progress",
      demo: "No",
      action: "Reschedule",
    },
    {
      id: 19,
      name: "Charlotte Adams",
      email: "charlotte.adams@sample.com",
      contact: "1098765421",
      course: "Cloud Security",
      courseFees: 2000,
      finalFees: 1950,
      status: "Completed",
      demo: "Yes",
      action: "Archive",
    },
    {
      id: 20,
      name: "Henry Carter",
      email: "henry.carter@demo.com",
      contact: "9876543109",
      course: "Networking",
      courseFees: 1500,
      finalFees: 1450,
      status: "Pending",
      demo: "Yes",
      action: "Follow-up",
    },
  ]);

  console.log(enquiries);

  const [showModel, setShowModel] = useState(false);

  const toggleModel = () => setShowModel(!showModel);

  const handleAdd = () => {
    console.log("Popup form");
    toggleModel();
  };

  return (
    <section>
      <div className="mx-4 my-2 p-4 flex flex-col border-2 shadow-sm bg-white border-gray-200 border-opacity-50 rounded-lg">
        <div className="flex items-center justify-between p-2 gap-y-5">
          {/* <h2 className="inline-block font-semibold text-xl">Enquiries</h2> */}
          <div className="inline-flex justify-start items-center gap-x-2">
            <div className="m-1 p-2 rounded-md text-white bg-gray-900">
              Today enquires: 05
            </div>
            <div className="m-1 p-2 rounded-md text-white bg-cyan-500">
              Total enquires: 23
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="px-3 py-2 font-medium shadow-sm bg-yellow-400 text-gray-800 border rounded-lg gap-x-2 inline-flex items-center "
              onClick={handleAdd}
            >
              Add Enquiry
            </button>
            {showModel && (
              <div
                className={`absolute -inset-0 bg-gray-50 bg-opacity-50 z-50 overflow-auto `}
                onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner clicks
              >
                <AddEnquiry
                  toggleModel={toggleModel}
                  setEnquiries={setEnquiries}
                />
              </div>
            )}
          </div>
        </div>
        <hr className="my-4" />
        {/* <div className="p-4 grid grid-cols-[repeat(1, minmax(0,1fr))] items-center sm:grid-cols-1 gap-x-7 gap-y-0"> */}
        {/* <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="text-md w-full block ps-10 pe-8 py-2 text-gray-500 bg-gray-100 border-transparent rounded-lg m-1"
                  />
                </div> */}
        {/* <div className="inline-flex justify-end items-center gap-x-2">
                    <div className="m-1 p-2 rounded-md text-white bg-gray-900">
                      Today enquires: 05
                    </div>
                    <div className="m-1 p-2 rounded-md text-white bg-cyan-500">
                      Total enquires: 23
                    </div>
                  </div> */}
        {/* </div> */}
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
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Contact
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Course
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
                        Final Fees
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-700 uppercase"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Demo
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
                    {enquiries.map((enquiry, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {enquiry.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          <span className="inline-block">{enquiry.name}</span>
                          <br />
                          <span className="inline-block">{enquiry.email}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {enquiry.contact}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {enquiry.course}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {enquiry.courseFees}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {enquiry.finalFees}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {enquiry.status}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {enquiry.demo}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <div className="flex items-center justify-between gap-2">
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
                              <i className="fa-regular fa-trash-can"></i>
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

export default Enquires;
