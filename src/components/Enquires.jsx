import { useState } from "react";
import AddEnquiry from "./AddEnquiry";
import PreviewEnquiry from "./previewEnquiry";

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
  ]);

  const [addModel, setAddModel] = useState(false);
  const [prevModel, setPrevModel] = useState(false);

  const toggleAddModel = () => {
    console.log("run toggleModel");
    setAddModel(!addModel);
  };

  const togglePrevModel = () => {
    setPrevModel(!prevModel);
  };

  return (
    <section>
      <div className="mx-4 my-2 p-4 flex flex-col border-2 shadow-sm bg-white border-gray-200 border-opacity-50 rounded-lg">
        <div className="flex items-center justify-between p-2 gap-y-5">
          {/* <h2 className="inline-block font-semibold text-xl">Enquiries</h2> */}
          <div className="inline-block">
            <span className="mx-2 px-4 py-1.5 rounded-xl text-white bg-blue-900">
              Today enquires: 05
            </span>
            <span className="px-4 py-1.5 rounded-xl text-white bg-cyan-600">
              Total enquires: 23
            </span>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="px-4 py-1.5 font-medium shadow-sm bg-yellow-400 text-gray-800 border rounded-lg gap-x-2 inline-flex items-center "
              onClick={toggleAddModel}
            >
              Add Enquiry
            </button>
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
                        className="px-4 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Contact
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Course
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Course Fees
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Final Fees
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Demo
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-start text-xs font-medium text-gray-700 uppercase"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 table-scroll">
                    {enquiries.map((enquiry, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800">
                          {enquiry.id}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800">
                          <span className="inline-block">{enquiry.name}</span>
                          <br />
                          <span className="inline-block">{enquiry.email}</span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                          {enquiry.contact}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                          {enquiry.course}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                          {enquiry.courseFees}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                          {enquiry.finalFees}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                          {enquiry.status}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                          {enquiry.demo}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-end text-sm font-medium">
                          <div className="flex items-center justify-start gap-4">
                            <button
                              type="button"
                              onClick={togglePrevModel}
                              className="inline-block text-sm font-semibold rounded-lg border border-transparent text-yellow-400 hover:text-yellow-600 focus:outline-none focus:text-yellow-600 disabled:opacity-50 disabled:pointer-events-none"
                            >
                              <i className="fa-solid fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              className="inline-block text-base font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                            >
                              <i className="fa-regular fa-pen-to-square"></i>
                            </button>

                            {/* <button
                              type="button"
                              className="inline-block gap-x-2 text-md font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
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
      {addModel && (
        <div
          className={`fixed -inset-1 top-0 left-0 right-0 z-50 w-full  h-screen  transition-transform  shadow-sm rounded-e-md
            bg-gray-600 bg-opacity-50 overflow-auto
         ${toggleAddModel ? "translate-y-0" : "-translate-y-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <AddEnquiry
            toggleModel={toggleAddModel}
            setEnquiries={setEnquiries}
          />
        </div>
      )}

      {prevModel && (
        <div
          className={`fixed -inset-1 top-0 left-0 right-0 z-50 w-full  h-screen  transition-transform  shadow-sm rounded-e-md
          bg-gray-600 bg-opacity-50 overflow-auto
       ${togglePrevModel ? "-translate-y-0" : "translate-y-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <PreviewEnquiry togglePrevModel={togglePrevModel} />
        </div>
      )}
    </section>
  );
};

export default Enquires;
