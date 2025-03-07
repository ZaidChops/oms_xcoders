const Dashboard = () => {
  const dashboardStats = {
    "Total Enquiries": 1500,
    "Today Enquiries": 45,
    "Total Trainers": 35,
    "Total Admissions": 1200,
    "Today Admissions": 15,
    "Demo Classes": 8,
  };

  return (
    <section>
      <div className="mx-2 my-2 p-4 border-2 border-gray-200 border-opacity-50 rounded-lg bg-white">
        <div className="flex items-center justify-between gap-y-5">
          <h2 className="inline-block font-semibold">Dashboard</h2>
        </div>

        <div className=" grid grid-cols-2 gap-2 mb-4 border-gray-200 rounded-lg mt-4 sm:grid-cols-3">
          {Object.entries(dashboardStats).map(([key, value], index) => (
            <div
              className="cards m-1 p-4 bg-gray-50 border border-gray-200 rounded-xl"
              key={index}
            >
              <div className="text-center z-10 ">
                <div className="flex justify-center gap-x-3">
                  <span
                    className="material-symbols-rounded text-2xl text-gray-600 inline-flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10
                bg-white rounded-lg border-1 border-gray-100 p-4 mb-3 shadow-md"
                  >
                    person
                  </span>
                </div>
                <h2 className="text-l text-gray-700 font-normal sm:text-lg pb-2">
                  {key}
                </h2>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg">{value}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
