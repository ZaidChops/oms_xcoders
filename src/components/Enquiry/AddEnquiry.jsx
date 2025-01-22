import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData, updateUser ,showData} from "../../redux-config/EnquirySlice";

const AddEnquiry = ({ toggleModel, editUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    course: "",
    demo: "no",
    courseFee: "",
    yearOfPassing: "",
    referralBy: "",
    status: "",
    finalizeFees: "",
    followUp: ""
  });

  const dispatch = useDispatch();




  useEffect(() => {
    if (editUser) {
      setFormData(editUser); // Populate form with editUser data
    }
    // fetchEnquiries()
  }, [editUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const existingData = JSON.parse(localStorage.getItem("enquiryData")) || [];
    let updatedData;
  
    if (editUser) {
      // Update existing enquiry
      updatedData = existingData.map((item) =>
        item.id === editUser.id ? { ...formData, id: editUser.id } : item
      );
      dispatch(updateUser({ ...formData, id: editUser.id })); // Update in Redux store
    } else {
      // Generate a new unique ID
      const lastId = existingData.length
        ? Math.max(
            ...existingData.map((item) =>
              parseInt(item.id.replace("XCE", ""), 10)
            )
          )
        : 0;
      const newId = `XCE${String(lastId + 1).padStart(3, "0")}`;
      updatedData = [...existingData, { ...formData, id: newId }];
      dispatch(addData({ ...formData, id: newId })); // Add to Redux store
    }
  
    // Update localStorage and Redux store with the entire list
    localStorage.setItem("enquiryData", JSON.stringify(updatedData));
    dispatch(showData(updatedData));
  
    toggleModel(); // Close the modal
  };
  

  return (
    <>
      <section className="enquiry-form">
        <div className={`max-w-96 sm:max-w-xl md:max-w-4xl mx-auto mt-6 bg-white rounded-md shadow-md -translate-y-0 duration-1000`}>
          <div className="p-6 flex justify-between items-center gap-2 rounded-t-md bg-gradient-to-r from-orange-300 to-yellow-300 ">
            <h2 className="text-lg font-semibold text-gray-700 capitalize">{editUser ? "Edit Enquiry" : "Add Enquiry"}</h2>
            <button onClick={toggleModel} className="h-8 w-8 rounded-full text-white bg-red-500 shadow-md">X</button>
          </div>

          <form onSubmit={handleSubmit} className="px-8 py-4">
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label className="text-gray-700" htmlFor="studentName">Name</label>
                <input id="studentName" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Prakriti Kushwah" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20 focus:outline-none focus:ring" />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="studentEmail">Email Address</label>
                <input id="studentEmail" name="email" type="text" value={formData.email} onChange={handleChange} placeholder="prakriti189@gmail.com" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20 focus:outline-none focus:ring" />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="studentContactNo">Contact No</label>
                <input id="studentContactNo" name="contact" type="text" value={formData.contact} onChange={handleChange} placeholder="+919755839451" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20 focus:outline-none focus:ring" />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="studentCourse">Course</label>
                <input id="studentCourse" name="course" type="text" value={formData.course} onChange={handleChange} placeholder="MERN Stack" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20 focus:outline-none focus:ring no-arrows" />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="courseFee">Course Fee</label>
                <input id="courseFee" name="courseFee" type="text" value={formData.courseFee} onChange={handleChange} placeholder="4999" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20 focus:outline-none focus:ring no-arrows" />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="finalizeFees">Finalize Fees</label>
                <input id="finalizeFees" name="finalizeFees" type="text" value={formData.finalizeFees} onChange={handleChange} placeholder="3999" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20 focus:outline-none focus:ring no-arrows" />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="yearOfPassing">Year of Passing</label>
                <input id="yearOfPassing" name="yearOfPassing" type="text" value={formData.yearOfPassing} onChange={handleChange} placeholder="2024" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20 focus:outline-none focus:ring no-arrows" />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="referralBy">Referral By</label>
                <input id="referralBy" name="referralBy" type="text" value={formData.referralBy} onChange={handleChange} placeholder="Shailendra" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20 focus:outline-none focus:ring no-arrows" />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="status">Status</label>
                <select id="status" name="status" value={formData.status} onChange={handleChange} className="block w-full h-10 py-2 px-4 mt-2 text-gray-700 border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                  <option defaultValue="Select Category">Select status</option>
                  <option value="interested">Interested</option>
                  <option value="callback">Callback</option>
                  <option value="not interested">Not interested</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700" htmlFor="demo">Demo</label>
                <select id="demo" name="demo" value={formData.demo} onChange={handleChange} className="block w-full h-10 py-2 px-4 mt-2 text-gray-700 border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                  <option defaultValue="Select Category">Select demo</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700" htmlFor="followUp">Follow Up</label>
                <input id="followUp" name="followUp" type="text" value={formData.followUp} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20 focus:outline-none focus:ring no-arrows" />
              </div>
            </div>

            <div className="flex justify-end mt-12 pb-3">
              <div className="flex justify-between items-center gap-2">
                <button onClick={toggleModel} type="button" className="px-8 py-2.5 leading-5 font-medium text-red-600 transition-colors duration-300 transform bg-red-300 rounded-md hover:bg-red-200 focus:outline-none focus:bg-red-200">Cancel</button>
                <button type="submit" className="px-12 py-2.5 leading-5 text-black/75 font-medium transition-colors duration-300 transform bg-gradient-to-r rounded-md bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-300">Save</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddEnquiry;