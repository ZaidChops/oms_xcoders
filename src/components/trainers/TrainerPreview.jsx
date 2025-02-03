// import React from 'react';
import {
  User,
  Mail,
  Phone,
  Code,
  GraduationCap,
  Calendar,
} from "lucide-react";

function TrainerPreview({ togglePrevModel, data }) {
  //   const trainerDetails = {
  //     name: "Dr. Sarah Mitchell",
  //     email: "sarah.mitchell@excelacademy.com",
  //     contact: "+1 (555) 234-5678",
  //     expertise: ["Mathematics", "Physics", "Calculus", "Statistics"],
  //     experience: "15+ years",
  //     status: "Active",
  //     joiningDate: "January 15, 2022",
  //   };

  return (
    <section>
      <div className="fixed inset-0 z-40 flex justify-center bg-opacity-50 bg-black overflow-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="min-w-96 max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-300 to-yellow-300 px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-start">
                  <GraduationCap className="h-8 w-8 text-black" />
                  <h1 className="ml-3 text-2xl font-semibold text-black">
                    Trainer Profile
                  </h1>
                </div>

                <button
                  onClick={togglePrevModel}
                  className="h-8 w-8 rounded-full text-white bg-red-500 shadow-md"
                >
                  X
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-6 space-y-6">
              {/* Main Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Trainer Name</p>
                    <p className="text-lg font-medium text-gray-900">
                      {data.trainerName}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-medium text-gray-900">
                      {data.trainerEmail}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Contact</p>
                    <p className="text-lg font-medium text-gray-900">
                      {data.trainerContact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Expertise */}
              <div className="flex items-center space-x-3">
                <Code className="h-8 w-8 text-gray-400" />
                {/* <div>
                  <p className="text-sm text-gray-500">Areas of Expertise</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {data.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {skill}
                      </span>
                    ))}

                  </div> */}
                <div>
                  <p className="text-sm text-gray-500">Area of Expertise</p>
                  <p className="text-lg font-medium text-gray-900">
                    {data.trainerTechStack}
                  </p>
                </div>
              </div>

              {/* Experience */}
              {/* <div className="flex items-center space-x-3">
                <Clock className="h-8 w-8 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Teaching Experience</p>
                  <p className="text-lg font-medium text-gray-900">
                    {trainerDetails.experience}
                  </p>
                </div>
              </div> */}

              {/* Joining Date */}
              <div className="flex items-center space-x-3">
                <Calendar className="h-8 w-8 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Joining Date</p>
                  <p className="text-lg font-medium text-gray-900">
                    {new Date(data.trainerJoiningDate).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4">
              <div className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainerPreview;
