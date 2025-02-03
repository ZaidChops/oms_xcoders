import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddEnquiry from "./AddEnquiry";
import PreviewEnquiry from "./PreviewEnquiry";
import { sortData } from "../../redux-config/EnquirySlice";
import axios from "axios";
import * as XLSX from "xlsx"
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Enquires = () => {
  const dispatch = useDispatch();
  const {enquiry, isLoading, isError} = useSelector((state) => state.enquiryData.allData)
  // const enquiries = useSelector((state) => state.enquiryData.allData);
  // console.log("Current enquiries data:", enquiry);
  
  const [record, setRecord] = useState([])

  useEffect(() =>{
    setRecord(enquiry)
  },[enquiry])
  // console.log(JSON?.parse(record),'record');
  
  const [showModel, setShowModel] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [searchData, setSearchData] = useState("")

  // Search
  // const filteredData = () =>{
  //   // e.preventDefault()
  //   enquiries.filter((enquiry) =>
  //     enquiry.courseName.includes(searchData)
  //   );
  // }

  const handleChange = (e) =>{
    setSearchData(e.target.value)
  }

  // console.log(searchData)

  // Excel downloader 
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(enquiry);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");
    XLSX.writeFile(workbook, "TableData.xlsx");
  };

  // CSV downloader
  const downloadCSV = () => {
    const csvRows = [];
    const headers = Object.keys(enquiry[0]);
    csvRows.push(headers.join(",")); // Add headers
    enquiry.forEach((row) => {
      const values = headers.map((header) => row[header]);
      csvRows.push(values.join(","));
    });
    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    saveAs(blob, "TableData.csv");
  };

  // PDF downloader
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Table Data", 20, 10); // Title
    const tableData = enquiry.map((row) => Object.values(row));
    const tableHeaders = Object.keys(enquiry[0]);
    doc.autoTable({
      head: [tableHeaders],
      body: tableData,
    });
    doc.save("TableData.pdf");
  };


  const toggleModel = () => {
    setShowModel(!showModel);
    if (showModel) {
      fetchEnquiries();
    }
  };

  const togglePreview = () => setShowPreview(!showPreview);

  const handleAdd = () => {
    setEditUser(null);
    toggleModel();
  };

  const handleEdit = (enquiry) => {
    setEditUser(enquiry);
    toggleModel();
  };

  const handlePreview = (enquiry) => {
    setPreviewData(enquiry);
    togglePreview();
  };

  // const fetchEnquiries = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:9090/api/v1/enquiry/list");
  //     const data = response.data.enquiry || [];
  //     dispatch(showData(data));
  //   } catch (error) {
  //     console.error("Error fetching enquiries:", error);
  //   }
  // };

  useEffect(() => {
    dispatch(sortData());
  }, [dispatch]);

  if(isLoading){
    return <h1 className="relative top-60">Loading...</h1>
  }

  if(isError){
    return <h1 className="relative top-60">!Error</h1>
  }

  // if (!enquiry || enquiry.length === 0) return <p>No enquiries found.</p>;

  return (
    <section>
      <div className=" mx-4 my-2 p-4 flex flex-col border-2 shadow-sm bg-white border-gray-200 border-opacity-50 rounded-lg">
        <div className="flex items-center justify-between p-2 gap-y-5">
          <div className="inline-flex justify-start items-center gap-x-2">
            <div className="m-1 p-2 rounded-md text-white bg-gray-900">
              Today enquiries:
               {/* {enquiries.length} */}
            </div>
            <div className="m-1 p-2 rounded-md text-white bg-cyan-500">
              Total enquiries:
               {/* {enquiries.length} */}
            </div>
            
          </div>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="px-3 py-2 font-medium shadow-sm bg-yellow-400 text-gray-800 border rounded-lg gap-x-2 inline-flex items-center"
              onClick={handleAdd}
            >
              Add Enquiry
            </button>
            {showModel && (
              <div
                className={`fixed pt-10 -inset-0 bg-gray-50 bg-opacity-50 z-50 overflow-auto`}
                onClick={(e) => e.stopPropagation()}
              >
                <AddEnquiry toggleModel={toggleModel} editUser={editUser} />
              </div>
            )}
          </div>
        </div>
        <hr className="my-4" />

       <div className="flex justify-between">
       <div className=" w-60 h-7 ml-4 mb-2 flex flex-row justify-between  ">
          <h3 className="text-lg font-semibold">Download :-</h3>
        <button className=" text-lg text-blue-600 "
         onClick={downloadExcel}
         >Excel /</button>
        <button className=" text-lg text-blue-600 " 
        onClick={downloadPDF}
        > PDF /</button>
        <button className=" text-lg text-blue-600 "
         onClick={downloadCSV}
         > CSV</button>
        </div>

        <form className="ml-4 mb-2 flex flex-row justify-between " role="search"
        //  onSubmit={filteredData}
         >
        <input type="search" placeholder="Search" aria-label="Search" value={searchData} onChange={handleChange} />
        {/* <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        <button className="btn btn-success btn-sm" type="submit"  >Search</button>
      </form>
       </div>

        <div className="flex flex-col my-2">
          <div className="overflow-x-auto">
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
                        Course Name
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
                    {
                    /* {!record || record?.length === 0 ? ( */}
                     { enquiry?.map((enquiry, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {enquiry.enquiryId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            <span className="inline-block">{enquiry.name}</span>
                            <br />
                            <span className="inline-block">
                              {enquiry.email}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {enquiry.contact}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {enquiry.courseName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {enquiry.courseFee}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {enquiry.finalizeFees}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {enquiry.status}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {enquiry.demo}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                className="inline-block text-base font-semibold rounded-lg border border-transparent text-yellow-400 hover:text-yellow-600 focus:outline-none focus:text-yellow-600 disabled:opacity-50 disabled:pointer-events-none mr-5"
                                onClick={() => handlePreview(enquiry)}
                              >
                                <i className="fa-solid fa-eye"></i>
                              </button>
                              <button
                                type="button"
                                className="inline-block text-base font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                onClick={() => handleEdit(enquiry)}
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    {/* ) : (
                      <tr>
                        <td
                          colSpan="8"
                          className="text-center p-4 text-yellow-600"
                        >
                          No enquiries found.
                        </td>
                      </tr>
                    ) */}
                    {/* } */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {showPreview && (
        <div className="fixed pt-10 -inset-0 bg-gray-50 bg-opacity-50 z-50 overflow-auto">
          <PreviewEnquiry togglePrevModel={togglePreview} data={previewData} />
        </div>
      )}
    </section>
  );
};

export default Enquires;
