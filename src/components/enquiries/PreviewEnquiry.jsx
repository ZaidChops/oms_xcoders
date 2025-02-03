import {
  User,
  BookOpen,
  MessageSquare,
  Eye,

} from "lucide-react";

const PreviewEnquiry = ({ togglePrevModel, data }) => {
  return (
    <section className="">
      <div className="min-h-screen fixed inset-0 bg-black bg-opacity-50 z-40 overflow-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className=" bg-white shadow-lg rounded-lg overflow-auto">
            <div className="bg-gradient-to-r from-orange-300 to-yellow-300 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="h-8 w-8 text-gray-800" />
                  <h1 className="ml-3 text-2xl font-medium text-gray-800">
                    Enquiry Preview
                  </h1>
                </div>
                {/* <button
          onClick={() => setShowPreview(false)}
          className="text-white hover:text-blue-100"
        >
          Back to Form
        </button> */}
                <button
                  className="h-8 w-8 bg-red-500 text-white rounded-full shadow-md"
                  onClick={() => togglePrevModel()}
                >X</button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Course Details */}
              <div className="bg-gray-50 p-2 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-yellow-500 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Course Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Course Category</p>
                    <p className="font-medium">
                      {data.courseCategory || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Course Name</p>
                    <p className="font-medium">
                      {data.courseName || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">
                      {data.courseDuration || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Course Fee</p>
                    <p className="font-medium">
                      ₹{data.courseFee || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Finalized Fee</p>
                    <p className="font-medium">
                      ₹{data.finalizeFee || "Not specified"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Candidate Details */}
              <div className="bg-gray-50 p-2 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-yellow-500 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Candidate Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">
                      {data.name || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">
                      {data.email || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Contact</p>
                    <p className="font-medium">
                      {data.contact || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Qualification</p>
                    <p className="font-medium">
                      {data.academicQualification || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year of Passing</p>
                    <p className="font-medium">
                      {data.yearOfPassing || "Not specified"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Enquiry Details */}
              <div className="bg-gray-50 p-2 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-yellow-500 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Enquiry Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Source</p>
                    <p className="font-medium">
                      {data.sourceOfEnquiry || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Referral By</p>
                    <p className="font-medium">
                      {data.referralBy || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-medium">
                      {data.status || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Demo Schedule</p>
                    <p className="font-medium">
                      {data.demo || "no"}
                      {/* {formData.demo ? new Date(formData.demo).toLocaleString() : 'Not scheduled'} */}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Counselor</p>
                    <p className="font-medium">
                      {data.counselorName || "Not specified"}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Follow Up Message</p>
                  <p className="font-medium whitespace-pre-wrap">
                    {data.followUp || "No follow up message"}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 flex justify-end">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Print Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewEnquiry;

