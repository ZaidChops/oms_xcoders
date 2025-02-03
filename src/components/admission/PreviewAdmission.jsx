import { Eye, User } from "lucide-react";

const PreviewAdmission = ({ togglePrevModel, data }) => {
  return (
    <section className="">
      <div className="min-h-screen fixed inset-0 bg-black bg-opacity-50 z-40 overflow-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-300 to-yellow-300 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="h-8 w-8 text-gray-700" />
                  <h1 className="ml-3 text-2xl font-medium text-gray-700">
                    Admission Preview
                  </h1>
                </div>
                <button
                  onClick={() => togglePrevModel()}
                  className="h-8 w-8 rounded-full text-white bg-red-500 shadow-md"
                >
                  X
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Personal Details */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-yellow-400 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Candidate Name</p>
                    <p className="font-medium">{data.name}</p>
                  </div>
                  {/* <div>
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="font-medium">{data.gender}</p>
                  </div> */}
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium">{data.dateOfBirth}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Contact</p>
                    <p className="font-medium">{data.contact}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{data.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Father&apos;s Name</p>
                    <p className="font-medium">{data.fatherName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Mother&apos;s Name</p>
                    <p className="font-medium">{data.motherName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Father&apos;s Occupation
                    </p>
                    <p className="font-medium">{data.fatherOccupation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Parent Contact</p>
                    <p className="font-medium">{data.parentContact}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Academic Qualification
                    </p>
                    <p className="font-medium">{data.academicQualification}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year of Passing</p>
                    <p className="font-medium">{data.yearOfPassing}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Premanent Address</p>
                    <p className="font-medium">{data.permanentAddress}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Temporary Address</p>
                    <p className="font-medium">{data.temporaryAddress}</p>
                  </div>
                </div>
              </div>

              {/* Course and Payment Details */}
              {/* <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-blue-600 flex items-center">
                  <IndianRupee className="h-5 w-5 mr-2" />
                  Course and Payment Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Course Category</p>
                    <p className="font-medium">{data.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Course Name</p>
                    <p className="font-medium">{data.courseName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Course Fee</p>
                    <p className="font-medium">₹{data.courseFee}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Discount</p>
                    <p className="font-medium">{data.discount}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Discount Amount</p>
                    <p className="font-medium">₹{data.discountAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payable Amount</p>
                    <p className="font-medium">₹{data.payableAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payment Mode</p>
                    <p className="font-medium">{data.paymentMode}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Transaction/Cheque No
                    </p>
                    <p className="font-medium">{data.transactionNo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bank Name</p>
                    <p className="font-medium">{data.bankName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Received Amount</p>
                    <p className="font-medium">₹{data.receivedAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payment Date</p>
                    <p className="font-medium">{data.paymentDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Remaining Amount</p>
                    <p className="font-medium">₹{data.remainingAmount}</p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* <div className="bg-gray-50 px-6 py-4 flex justify-end">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Print Admission Form
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewAdmission;
