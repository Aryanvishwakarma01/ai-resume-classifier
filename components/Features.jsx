import React from "react";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const Features = () => {
  return (
    <div className="flex flex-wrap gap-6 p-10">
      <div className="flex-1 min-w-[250px] bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-xl transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="bg-white p-6 rounded-xl h-full">
          <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
            <Target className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">ATS Score</h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Check how well your resume passes Applicant Tracking Systems
          </p>
        </div>
      </div>

     
      <div className="flex-1 min-w-[250px] bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-xl transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="bg-white p-6 rounded-xl h-full">
          <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
            <Users className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Category Fit</h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Identify the best job categories that match your profile
          </p>
        </div>
      </div>

   
      <div className="flex-1 min-w-[250px] bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-xl transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="bg-white p-6 rounded-xl h-full">
          <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
            <Award className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Skill Match</h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Analyze how your skills align with market demands
          </p>
        </div>
      </div>

     
      <div className="flex-1 min-w-[250px] bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-xl transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="bg-white p-6 rounded-xl h-full">
          <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
            <TrendingUp className="h-6 w-6 text-orange-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Improvements</h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Get actionable suggestions to enhance your resume
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
